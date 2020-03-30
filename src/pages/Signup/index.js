import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Container } from './styles';
import api from '../../services/api'
import logo from '../../assets/logo.png'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()

        const data = {
            name,
            email,
            senha
        }

        try {
            const response = await api.post('users', data)
            alert(response.data.id)

            history.push('/')
        } catch(e){
            console.error(e.message)
        }
    }

    return (
        <div>
            <Container>
                <section className="form">
                    <form onSubmit={handleRegister}>
                        <img src={logo} alt="logotipo" />
                        <h1>Faça seu cadastro</h1>

                        <input
                            placeholder="Digite seu nome completo"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <input
                            placeholder="digite seu email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input
                            placeholder="digite sua senha"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />

                        <button className="button" type="submit">Enviar</button>

                        <Link className="link" to="/">
                            Ja tenho cadastro
                        </Link>
                    </form>
                </section>
            </Container>
        </div>
    );
}
