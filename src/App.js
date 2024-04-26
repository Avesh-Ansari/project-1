
import React, {useState} from 'react';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import RegisterForm from './component/RegisterForm';
import AccountSetting from './component/AccountSetting';
import LoginForm from './component/LoginForm';

function App() {

  const [userData, setUserData] = useState(null);

 
  const handleRegisterFormSubmit = (data) => {
   
    localStorage.setItem('userData', JSON.stringify(data));
   
    setUserData(data);
  };


  const handleLoginFormSubmit = (data) => {
   
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
  //  console.log("retireve user data",storedUserData)
    if (storedUserData && storedUserData.email === data.email && storedUserData.password === data.password) {
     
      setUserData(storedUserData);
    } else {
    
      alert('Invalid email or password');
    }
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterForm onFormSubmit={handleRegisterFormSubmit} />} />
        <Route path="/login" element={<LoginForm onFormSubmit={handleLoginFormSubmit} />} />
        <Route path="/account" element={<AccountSetting userData={userData} />} />
      </Routes>
    </Router>
  );


}

export default App;
