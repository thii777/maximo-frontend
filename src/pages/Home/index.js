import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, Tasks } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

export default function MyTasks() {
  const [tasks, setTasks] = useState([]);
  const userId = localStorage.userId;
  const userName = localStorage.userName;
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [open, setOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    api.get('tasks').then((response) => {
      setTasks(response.data);
    });
  }, []);

  function Refresh() {
    setTimeout(() => {
      setOpen(false);
      localStorage.clear();
      history.push('/');
    }, 3000);
    setMessage('Até Logo');
    setStatus('success');
    setOpen(true);
  }

  function NextPage() {
    setCount(count + 1);
    api.get(`/tasks?page=${count}`).then((Next) => {
      setTasks(Next.data);
      if (Next.data.length < 6) {
        setCount(1);
      }
    });
  }

  function BackPage() {
    setCount(count - 1);
    api.get(`/tasks?page=${count}`).then((Back) => {
      setTasks(Back.data);
    });

    if (count < 1) {
      setMessage('Não é possivel voltar mais páginas');
      setStatus('error');
      setOpen(true);
      setCount(1);
      setTimeout(() => {
        history.push(`/home`);
        setOpen(false);
      }, 3000);
      return;
    }
  }

  const allName = userName.split(' ');
  const firstName = allName[0];
  try {
    return (
      <div>
        <Container>
          <div className='cards'>
            <header>
              <img src={logo} alt='logotipo' />
              <span>Olá, {firstName}</span>

              <Link to='/mytasks'>Meus pedidos</Link>
              <Link className='logout' onClick={Refresh}>
                Sair
              </Link>
            </header>
          </div>
        </Container>

        <Tasks>
          <h1>Ajude, Somos o máximo!</h1>
          <div className='header-tasks'>
            <h4 onClick={BackPage}>Anterior</h4>
            <h4 onClick={NextPage}>Proxima</h4>
          </div>
          <ul>
            {tasks.map((task) => (
              <li key={userId}>
                <div className='data'>
                  <div>
                    <strong>Nome</strong>
                    <p>{task.name}</p>
                  </div>
                  <strong className='tower'>torre 2</strong>
                </div>
                <div className='box'>
                  <strong>Titulo</strong>
                  <p>{task.title}</p>

                  <strong>O que você precisa?</strong>
                  <p>{task.description}</p>

                  {/* <span>Contato</span> */}
                  <div className='contact'>
                    <button className='whatsapp'>whatsapp</button>
                    <button className='email'>email</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <MuiAlert severity={status} elevation={6} variant='filled'>
              {' '}
              {message}{' '}
            </MuiAlert>
          </Snackbar>
        </Tasks>
      </div>
    );
  } catch (err) {
    alert(err.message);
  }
}
