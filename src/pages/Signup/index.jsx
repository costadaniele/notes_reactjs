import React from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Background, Container, Form } from './styles';
import { Link } from 'react-router-dom';

export function Signup() {
    return (
        <Container>
            <Background />
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e regenciar seus links úteis</p>
                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser} />
                

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail} />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock} />

                <Button title="Cadastrar" />

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>


        </Container>
    );
}