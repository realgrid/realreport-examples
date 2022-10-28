import style from './css/Report.module.css';
import Header from './components/Header';
import ViewContainer from './components/ViewContainer';
import 'realreport/dist/realreport.css';

function App() {
  return (
    <div className={style.container}>
        <Header />
        <ViewContainer />
    </div>
  );
}

// contextAPI

export default App;
