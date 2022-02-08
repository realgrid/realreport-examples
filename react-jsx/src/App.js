import './App.css';
import textReport from "./report-samples/textreport";
import RealReportViewer from './components/RealReport';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RealReportViewer report={textReport}></RealReportViewer>
      </header>
    </div>
  );
}

export default App;
