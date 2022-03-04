import logo from './logo.svg';
import './App.css';
import Login_SignUp from './pages/Login-SignUp/Login_SignUp';
import BackdropFilter from './Test/BackdropFilter/BackdropFilter';
import {Routes as Switch, Route} from 'react-router-dom';
import Page404 from './pages/Page404';

function App() {
  return (
    <>
    {/* <BackdropFilter /> */}
    <Switch>
      <Route path='' element={<Login_SignUp />} />
      <Route path='*' element={<Page404 />} />
    </Switch>
    </>
  );
}

export default App;
