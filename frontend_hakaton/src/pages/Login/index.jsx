import React from 'react'
import {Formik, Form, Field} from "formik";
import './login.css'

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';


function Login () {



    
    const handleSubmitForm = async (values, { resetForm }) => {
        console.log(values)
        await axios.get('http://localhost:5500/login', {
            params:{
                user: values.user,
                password: values.password
            }
        }).then((res) => {
            console.log(res.data)
            toast.success("Usuário validado", {
                position: toast.POSITION.TOP_RIGHT
              });
            localStorage.setItem('user', res.data.user)
            setTimeout(() => window.location.href = '/feed', 1000)
        }).catch((err) => {
            console.log(err.response.data.msg)
            toast.error("Usuário não encontrado.", {
                position: toast.POSITION.TOP_RIGHT
            })
            resetForm()
        })
    }


    return (
        <>
         <Header />
        <section className='container'>
            <Formik initialValues={{
                user: "",
                password: ""
              }} onSubmit={handleSubmitForm}>
                <Form className="form" >
                    <h3>Login</h3>
                <Field type='text' name="user" id="user" placeholder="Insira seu usuário..."/>
                <Field type="password" name="password" id="senha" placeholder="Insira sua senha..."/>                    
                <button type="submit" >Login</button>        
                    <h4 className="h42">Esqueceu sua senha?</h4>
                </Form>
            </Formik>
            <ToastContainer />
        </section>
        <Footer />
        </>
    )
}

export default Login;