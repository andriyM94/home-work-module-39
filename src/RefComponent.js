import { useRef } from "react";

const RefComponent = () => {
  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
    inputRef.current.placeholder = 'Фокус';
  };

  const blur = () => {
    inputRef.current.blur();
    inputRef.current.placeholder = 'Блюр';
  };

  return(
    <>
      <p>
        RefComponent
      </p>
      <div>
        <input type="text" ref={inputRef} className="input"/>
        <br />
        <button onClick={focus}>Фокус</button>
        <button onClick={blur}>Блюр</button>
      </div>
    </>
  );
}

export default RefComponent;