// RegisterForm.js
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function RegisterForm({onFormSubmit}) {


  const navigate = useNavigate();

    const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    onFormSubmit(formData);

    navigate('/account');
  };

  return (
    <div className='form-container'>
      <h2>Create your <br/>PopX account</h2>
      <form onSubmit={handleSubmit}>
      <input className='form-input' type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
        <input className='form-input' type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
        <input className='form-input' type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input className='form-input' type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <input className='form-input' type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" />
     
        <button className='button' type="submit">Create Account</button>
      </form>

     </div>
    
  );
}

export default RegisterForm;
