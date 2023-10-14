import React from 'react'
import {Formik, Form, Field} from "formik";
import '../Login/login.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';



function Register ()  {


    const handleSubmitForm = async (values, actions) => {
        await axios.post('http://localhost:5500/cadUser', {
            user: values.user,
            password: values.password,
            email: values.email
        }).then((res) => {
            console.log(res.data)
            toast.success("Usuário cadastrado com sucesso", {
                position: toast.POSITION.TOP_RIGHT
              });
            setTimeout(() => window.location.href = '/', 1000)
        }).catch((err) => {
            console.log(err)
            toast.error("Usuário não encontrado.", {
                position: toast.POSITION.TOP_RIGHT
            })
            actions.resetForm()
        })
    }




    return(
    <>

        <Header />
        <section className='container'>
            <Formik initialValues={{}}  onSubmit={handleSubmitForm}>
                <Form className="form" >
                    <h3>Cadastro</h3>
                <Field type='text' name="user" id="user" placeholder="Insira seu usuário..."/>
                <Field type="text" name="email" id="email" placeholder="Insira seu email..."/>                    
                <Field type="password" name="password" id="senha" placeholder="Insira sua senha..."/>     
                <button type="submit" >Login</button>        
                </Form>
            </Formik>
            <ToastContainer />
            
        </section>
        <Footer />
    </>
    )
}

export default Register;