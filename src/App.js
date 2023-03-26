import './App.css';
import Header from './components/Header';
import { Route,Routes } from 'react-router';
import SignUp from './components/SignUp';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Registration from './components/Registration';
import RegistrationStep_1 from './components/RegistrationStep_1';
import RegistrationStep_2 from './components/RegistrationStep_2';
import RegistrationStep_3 from './components/RegistrationStep_3';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/registration/step1' element={<RegistrationStep_1/>}/>
        <Route path='/registration/step2' element={<RegistrationStep_2/>}/>
        <Route path='/registration/step3' element={<RegistrationStep_3/>}/>
      </Routes>
    </div>
  );
}

export default App;
