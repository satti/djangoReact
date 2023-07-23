import { BrowserRouter, Routes,Route,} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import StudentListPage from './pages/StudentListPage';
import StudentEntry from './pages/StudentEntry';
import Navbar from './components/Navbar';
import MarksEntry from './pages/MarksEntry';


function App() {
  return (
    <div className="App">
      <>
       <BrowserRouter> 
       <Navbar/>
       <Routes> 
        <Route path='/' exact Component={Header}></Route>
        <Route path='/students' Component={StudentListPage}></Route>
        <Route path='/entry' Component={StudentEntry}></Route>
        <Route path='/mentry' Component={MarksEntry}></Route>
      </Routes>
      </BrowserRouter>
      </> 
    </div>
  );
}

export default App;
