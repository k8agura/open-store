import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <div>
            <Container
                className={"d-flex justify-content-center align-items-center"}
                style = {{height: window.innerHeight - 54}}
            >
                <Card
                    style={{width: 600}}
                    className={"p-5"}
                >
                    <h3 className={"m-auto"}>
                        {isLogin ? 'Авторизация' : 'Регистрация'}
                    </h3>
                    <Form
                        className={"d-flex flex-column"}
                    >
                        <Form.Control
                            className={"mt-4"}
                            placeholder={"Введите ваш e-mail"}
                        />
                        <Form.Control
                            className={"mt-4"}
                            placeholder={"Введите ваш пароль"}
                        />
                        <div
                            className={"d-flex justify-content-between align-items-center mt-4"}
                        >
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизируйтесь</NavLink>
                                </div>
                            }
                            <Button
                                variant={"outline-success"}
                            >
                                {isLogin ?
                                    'Войти'
                                    :
                                    'Зарегистрироваться'
                                }
                            </Button>
                        </div>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Auth;