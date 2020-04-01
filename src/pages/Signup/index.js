import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

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
      }, 3000)

      setMessage("Cadastrado com sucesso");
      setStatus('success')
      handleClick()

    } catch {
      setStatus('error')
      setMessage("Error")
      handleClick()
    }
  }
  function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
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

            <input
              placeholder='Digite seu nome completo'
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <input
              placeholder='digite seu email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <input
              placeholder='digite sua senha'
              value={senha}
              onChange={e => setSenha(e.target.value)}
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
              Ja tenho cadastro
            </Link>
          </form>
        </section>
      </Container>
    </div>
  );
}
