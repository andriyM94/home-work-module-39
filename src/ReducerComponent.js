import { useReducer, useRef } from "react";

const ReducerComponent = () => {
  const initialState = { firstName: '', secondName: '', birthYear: '' };

  const firstNameRef = useRef(null);
  const secondNameRef = useRef(null);
  const birthYearRef = useRef(null);

  const reducer = (state, type) => {
    switch (type) {
      case 'firstName':
        return {...state, firstName: firstNameRef.current.value };
      case 'secondName':
        return { ...state, secondName: secondNameRef.current.value };
      case 'birthYear':
        return { ...state, birthYear: birthYearRef.current.value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickHandler = (type) => {
    dispatch(type);
  };

  return (
    <>
      <p>Об'єкт: <span className="obj">{JSON.stringify(state)}</span></p>
      <p>
        <input type="text" placeholder="Імʼя" ref={firstNameRef} />
        <button onClick={() => onClickHandler('firstName')}>Імʼя</button>
        <br />
        <input type="text" placeholder="Прізвище" ref={secondNameRef} />
        <button onClick={() => onClickHandler('secondName')}>Прізвище</button>
        <br />
        <input type="date" placeholder="Рік народження" ref={birthYearRef} />
        <button onClick={() => onClickHandler('birthYear')}>Рік народження</button>
      </p>
    </>
  );
}

export default ReducerComponent;
