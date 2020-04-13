import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Tasks } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';

export default function MyTasks() {
  const [myTasks, setMyTasks] = useState([]);
  const userId = localStorage.userId;
  const userName = localStorage.userName;

  const allName = userName.split(' ');
  const firstName = allName[0];

  useEffect(() => {
    api
      .get('mytasks', {
        headers: {
          Authorization: userId,
        },
      })
      .then((response) => {
        setMyTasks(response.data);
      });
  }, [userId]);

  function DeleteTask() {
    console.log(myTasks)
    // api.delete('mytasks', {
    //   headers: {
    //     Authorization: userId,
    //   },
    //   params: {
    //       id: myTasks[2]
    //   }
    //  });
  }

  return (
    <div>
      <Container>
        <div className='cards'>
          <header>
            <img src={logo} alt='logotipo' />
            <span>Olá {firstName}</span>

            <Link to='/new'>Cadastrar ajuda</Link>
            <Link className='logout' to='/home'>
              Voltar
            </Link>
          </header>
        </div>
      </Container>

      <Tasks>
        <h1>Meus pedidos</h1>
        <ul>
          {myTasks.map(myTask => (
            <li key={myTask.id}>
              <strong>Titulo</strong>
              <p>{myTask.title}</p>

              <strong>O que você precisa?</strong>
              <p>{myTask.description}</p>
              <button onClick={DeleteTask}>delete</button>
            </li>
          ))}
        </ul>
      </Tasks>
    </div>
  );
}
