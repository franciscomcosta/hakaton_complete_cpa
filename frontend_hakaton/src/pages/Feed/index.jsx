import React from 'react'
import {Formik, Form, Field} from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import './feed.css'
import Publish from './publish/publish';


export default function User(){


    let user = localStorage.getItem('user') 
    console.log(user)

    const handleSubmit = async (values, { resetForm }) => {

        console.log(values);

        toast.success("Publicação feita com sucesso!")

      };

    return (
        <>
            <Header />
            <section className="container">
                <h2> Bem vindo,  {user}</h2>
                <Formik initialValues={{user: ""}} onSubmit={handleSubmit}>
                <Form className="feedPub" >
                <Field type='text' name="user" id="user" placeholder="Escreva uma publicação..."/>
                <select name="type" id="type">
                    <option value="comemoracao">Comemoração</option>
                    <option value="denuncia">Denuncia</option>        
                </select>       
                <button type="submit" >Publicar</button>        
                </Form>
            </Formik>
            <Publish name="Otávio castelani" stars={4} desc='“Qualidade do ar insalubre em pleno centro urbano de Manaus.”' type='denuncia' img={1} />
            <Publish name="Francisco Moreira" stars={5} desc='“Apesar de visível melhora, ainda é evidente os efeitos das queimadas na zona urbana de Manaus.”' type='normal' img={2} />
            <ToastContainer />
            <Footer />
            </section>

            
        </>
    )
}