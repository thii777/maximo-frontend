import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Container } from './styles';
import api from '../../services/api'
import logo from '../../assets/logo.png'

export default function Signin() {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()
        
        if(!setEmail.length == [0]){
            console.log("digite email e senha")
        }
        
        let data = {
            email,
            senha
        }


        try {
            const response = await api.post('session', data)
            localStorage.setItem('userId', response.data.id)
            localStorage.setItem('userName', response.data.name)

            history.push('/home')

        } catch (e) {
            alert('Erro, tente novamente')
        }
    }

    return (
        <div>
            <Container>
                <section className="form">
                    <form onClick={handleLogin}>
                        <img src={logo} alt="logotipo" />
                        <h1>Faça seu login</h1>

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

                        <button className="button" type="submit">Entrar</button>

                        <Link className="link" to="/signup">
                            Não tenho cadastro
                        </Link>
                    </form>
                </section>
            </Container>
        </div>
    );
}
