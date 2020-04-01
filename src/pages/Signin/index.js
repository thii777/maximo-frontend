import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiEye, FiEyeOff } from 'react-icons/fi';
import TextField from '@material-ui/core/TextField';
import { Container } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';

export default function Signin() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [type, setType] = useState('password');
  const [eye, setEye] = useState('block');
  const [eyeOff, setEyeOff] = useState('none');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    if (!setEmail.length === [0]) {
      console.log('digite email e senha');
    }

    let data = {
      email,
      senha
    };

    try {
      const response = await api.post('session', data);
      localStorage.setItem('userId', response.data.id);
      localStorage.setItem('userName', response.data.name);

      history.push('/home');
    } catch (e) {
      alert(e.message);
    }
  }

  function ocultPassword() {
    setType('password');
    setEye('block');
    setEyeOff('none');
  }

  function showPassword() {
    setType('text');
    setEye('none');
    setEyeOff('block');
    if (type === 'text') {
      ocultPassword();
    }
  }

  return (
    <div>
      <div className='back' />
      <Container>
        <section className='form'>
          <form onSubmit={handleLogin}>
            <img src={logo} alt='logotipo' />
            <h1>Faça seu login</h1>
            <TextField
              label='E-mail'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <TextField
              label='Senha'
              className='password'
              type={type}
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
            <FiEye
              display={eye}
              onClick={showPassword}
              className='eye'
              size={25}
              color='black'
            />
            <FiEyeOff
              display={eyeOff}
              onClick={showPassword}
              className='eye'
              size={25}
              color='black'
            />

            <button className='button' type='submit'>
              Entrar
            </button>
            <Link className='link' to='/signup'>
              <FiLogIn size={16} color='#000' />
              Não tenho cadastro
            </Link>
          </form>
        </section>
      </Container>
    </div>
  );
}
