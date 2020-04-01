import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { FiLogIn, FiEye, FiEyeOff } from 'react-icons/fi';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';

export default function Signup() {
  const [name, setName] = useState('');
  const [type, setType] = useState('password');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [eye, setEye] = useState('block');
  const [eyeOff, setEyeOff] = useState('none');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      senha
    };

    try {
      const response = await api.post('users', data);
      alert(response.data.id);
      setTimeout(() => {
        history.push('/');
      }, 3000);

      setMessage('Cadastrado com sucesso');
      setStatus('success');
      handleClick();
    } catch (e) {
      setStatus('error');
      setMessage(e.message);
      handleClick();
    }
  }
  function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
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

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Container>
        <section className='form'>
          <form onSubmit={handleRegister}>
            <img src={logo} alt='logotipo' />
            <h1>Faça seu cadastro</h1>
            <TextField
              label='Nome'
              placeholder='Digite seu nome'
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <TextField
              label='E-mail'
              required
              placeholder='Digite seu e-mail'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              label='Senha'
              type={type}
              required
              placeholder='Digite sua senha'
              value={senha}
              onChange={e => setSenha(e.target.value)}
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
              Enviar
            </button>
            <div className={classes.root}>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity={status}>
                  {message}
                </Alert>
              </Snackbar>
            </div>

            <Link className='link' to='/'>
              <FiLogIn size={15} color='black'></FiLogIn>
              Ja tenho cadastro
            </Link>
          </form>
        </section>
      </Container>
    </div>
  );
}
