import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './component/Header';
import Home from './component/Home';
import Pagination from './component/Pagination';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Pagination/>
    </>
  );
}

export default App;
