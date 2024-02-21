import './App.css';
import EffectComponent from './EffectComponent';
import LayoutEffectComponent from './LayoutEffectComponent';
import ReducerComponent from './ReducerComponent';
import RefComponent from './RefComponent';
import StateComponent from './StateComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='wrapper'><EffectComponent/></div>
        <div className='wrapper'><LayoutEffectComponent/></div>
        <div className='wrapper'><StateComponent/></div>
        <div className='wrapper'><ReducerComponent/></div>
        <div className='wrapper'><RefComponent/></div>
      </header>
    </div>
  );
}

export default App;
