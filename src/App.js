import './App.css';

//Components
import OsInfo from './components/OsInfo';
import IpInfo from './components/IpInfo';
import TimeZone from './components/TimeZone';

function App() {
  return (
    <div className="App">
      <OsInfo />
      <IpInfo />
      <TimeZone />
    </div>
  );
}

export default App;
