
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function LoginForm({onFormSubmit}) {


  const navigate = useNavigate();

    const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      <h2>Signin to your <br/>PopX Account</h2>
      <p>Lorem Ipsun dolor sit amet.</p>
      <p>Lorem Ipsun dolor sit amet.</p>
      <form onSubmit={handleSubmit}>
      <input className='form-input' type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" /> <br/>
        <input className='form-input' type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" /><br/>

        <button className='button' type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
