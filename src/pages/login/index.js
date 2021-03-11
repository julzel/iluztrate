import React, { useState } from 'react';
import Button from '../../components/button';
import TextInput from '../../components/textInput';
import './Login.scss';
import Logo from '../../assets/iluztrate_logo.jpg';

const Login = ({ history }) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword] = useState('');

  const handleSubmit = ev => {
    ev.preventDefault();
    const authUser = JSON.parse(sessionStorage.getItem('authUser'));
    if (email === authUser.email && password === authUser.password) {
      history.push('/')
    }
  };

  const handleEmailChange = ev => setEmail(ev.target.value);

  const handlePasswordChange = ev => setPassword(ev.target.value);

  return (
    <div className="login">
      <div className="login-logo">
        <img src={Logo} alt="iluztrate logo" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-block">
          <TextInput type="text" value={email} handleInputChange={handleEmailChange} placeholder="Correo electrónico" />
        </div>
        <div className="login-form-block">
          <TextInput type="password" value={password} handleInputChange={handlePasswordChange} placeholder="Contraseña" />
        </div>
        <div className="login-form-separator"></div>
        <div className="login-form-block">
          <Button type="submit" text="Iniciar Sesión" />
        </div>
      </form>
    </div>
  );
}
 
export default Login;