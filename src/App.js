
import './App.css';
import PatientManagement from './components/PatientManagement/PatientManagement';
import ReducerCounter from './components/ReducerCounter/ReducerCounter';

function App() {
  return (
    <div className="App">
      <ReducerCounter></ReducerCounter>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
