import React from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi';
import { Background, Container, Form } from './styles';
import { Link } from 'react-router-dom';

export function Signin() {
    return (
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e regenciar seus links úteis</p>
                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail} />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock} />

                <Button title="Entrar" />

                <Link to="/signup">
                    Criar conta
                </Link>
            </Form>

            <Background />
        </Container>
    );
}