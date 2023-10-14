import React from 'react'
import './header.css'
import Logo from '../../../assets/ahead-logo.jpeg';

export default function Header () {
    
    return (
        <>
            <header>
                { }
                <img src={Logo} id="logo" alt="Ahead Logo"/>
                <ul class="navbar">
                <li class="nav-item"><a href="https://www.gov.br/agricultura/pt-br/assuntos/sustentabilidade/agricultura-de-baixa-emissao-de-carbono/publicacoes/abc-portugues.pdf">Plano ABC+</a></li>
                <li class="nav-item"><a href="https://www.bndes.gov.br/wps/portal/site/home/mercado-de-capitais/creditos-de-carbono">Créditos de Carbono</a></li>
                <li class="nav-item"><a href="#licitacoes">Licitações</a></li>
                </ul>
            </header>
        </>
    )
}




