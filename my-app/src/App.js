import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGretting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting gretting="I'm a stateful class component!"/>
    </div>
  );
}

export default App;
