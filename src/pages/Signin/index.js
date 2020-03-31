import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import { Container } from './styles';
import api from '../../services/api'
import logo from '../../assets/logo.png'

export default function Signin() {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()
        
        if(!setEmail.length === [0]){
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
            alert('Erro, tente novamente', e)
        }
    }

    return (
        <div>
            <div className="back"/>
            <Container>
                <section className="form">
                    <form>
                        <img src={logo} alt="logotipo" />
                        <h1>Faça seu login</h1>
                            <h3>E-mail:</h3>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                         <h3>Senha:</h3>
                        <input
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />

                        <button className="button" type="submit" onClick={handleLogin}>Entrar</button>

                        <Link className="link" to="/signup">
                        <FiLogIn size={16} color="#000" />
                            Não tenho cadastro
                        </Link>
                    </form>
                </section>
            </Container>
        </div>
    );
}
