import React, { useState, useLayoutEffect } from 'react';

const LayoutEffectComponent = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  useLayoutEffect(() => {
    if (showParagraph) {
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Доданий абзац!';
      const paragrafsWraper = document.getElementById('paragrafs');
      paragrafsWraper.appendChild(paragraph);

      return () => {
        paragrafsWraper.removeChild(paragraph);
      };
    }
  }, [showParagraph]);

  return(
    <>
      <p>
        LayoutEffectComponent
      </p>
      <button onClick={() => setShowParagraph(!showParagraph)}>{!showParagraph ? 'Додати абзац' : 'Видалити абзац'}</button>
      <div id='paragrafs'></div>
    </>
  );
}

export default LayoutEffectComponent;