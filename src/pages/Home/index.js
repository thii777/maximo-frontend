import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Tasks } from './styles';
import api from '../../services/api'
import logo from '../../assets/logo.png'

export default function MyTasks() {
    const [tasks, setTasks] = useState([])
    const userId = localStorage.userId
    const userName = localStorage.userName

    useEffect(() => {
        api.get('tasks').then(response => {
            setTasks(response.data)
        })
    }, [])

    const allName = userName.split(' ')
    const firstName = allName[0]

    return (
        <div>
            <Container>
                <div className="cards">
                    <header>
                        <img src={logo} alt="logotipo" />
                        <span>Olá, {firstName}</span>

                        <Link to="/mytasks">Meus pedidos</Link>
                        <Link className="logout" to="/">Sair</Link>
                    </header>
                </div>
            </Container>

            <Tasks>
                <h1>Ajude, Somos o máximo!</h1>
                <ul>
                    {tasks.map(task => (
                        <li key={userId}>
                            <div className="data">
                                <div>
                                    <strong>Nome</strong>
                                    <p>{task.name}</p>
                                </div>
                                <strong className="tower">torre 2</strong>
                            </div>
                            <div className="box">
                                <strong>Titulo</strong>
                                <p>{task.title}</p>

                                <strong>O que você precisa?</strong>
                                <p>{task.description}</p>

                                {/* <span>Contato</span> */}
                                <div className="contact">
                                    <button className="whatsapp">whatsapp</button>
                                    <button className="email">email</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </Tasks>

        </div>
    );
}
