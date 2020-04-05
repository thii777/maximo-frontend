import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import { Container, Tasks } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';

export default function NewTasks() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [open, setOpen] = useState(false);

  const userId = localStorage.userId;
  console.log(userId);

  const history = useHistory();

  const userName = localStorage.userName;

  const allName = userName.split(' ');
  const firstName = allName[0];

  async function handleTasks(e) {
    e.preventDefault();

    if (!setTitle.length === [0]) {
      console.log('digite title');
    }

    const data = {
      title,
      description,
    };

    try {
     await api.post('tasks', data, {
        headers: {
          Authorization: userId,
        },
      });

      setTimeout(() => {
        history.push('/mytasks');
        setOpen(false);
      }, 3000);
      setMessage('Pedido postado com sucesso!');
      setStatus('success');
      setOpen(true);
    } catch (e) {
      setMessage('Não foi possivel publicar seu pedido');
      setStatus('error');
      setOpen(true);

      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  }

  return (
    <div>
      <Container>
        <div className='cards'>
          <header>
            <div className='logo'>
              <img src={logo} alt='logotipo' />
              <p>Somos o máximo</p>
            </div>
            <span>Olá {firstName}</span>

            <Link to='/home'>Voltar</Link>
          </header>
        </div>
      </Container>

      <Tasks>
        <h1>Cadastrar novo pedido</h1>
        <ul>
          <li>
            <form onSubmit={handleTasks}>
              <strong>O que você precisa?</strong>
              <input
                placeholder='digite o que você precisa'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <strong className='second-strong'>Descreva com detalhes</strong>
              <textarea
                placeholder='Por gentileza, eu precisava comprar um filtro de café...'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button>Postar</button>
            </form>
          </li>
        </ul>
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MuiAlert severity={status} elevation={6} variant='filled'>
            {' '}
            {message}
          </MuiAlert>
        </Snackbar>
      </Tasks>
    </div>
  );
}
