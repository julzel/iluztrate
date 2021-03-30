import React, { useState } from 'react';
import Svg from 'react-inlinesvg';

import Button from '../../components/button';
import TextInput from '../../components/textInput';
import './Login.scss';
import Logo from '../../assets/logo_white.svg';

const Login = ({ history }) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword] = useState('');

  const handleSubmit = ev => {
    ev.preventDefault();
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    if (email === authUser.email && password === authUser.password) {
      history.push('/inicio')
    }
  };

  const handleEmailChange = ev => setEmail(ev.target.value);

  const handlePasswordChange = ev => setPassword(ev.target.value);

  return (
    <div className="login">
      <div className="login-logo">
        <Svg src={Logo} />
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