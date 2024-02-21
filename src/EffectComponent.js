import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if(value === 0) {
      console.log('useEffect on render');
    } else {
      console.log('useEffect on update state');
    }

  }, [value]);

  const onClickHandler = () => {
    setValue(value + 1);
  };

  return(
    <>
      <p>
        EffectComponent
      </p>
      <p>Value: <span>{value}</span></p>
      <button onClick={onClickHandler}>Click me to change value</button>
    </>
  );
}

export default EffectComponent;