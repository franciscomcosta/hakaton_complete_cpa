import React from "react";
import Logo from '../../assets/ahead-logo.jpeg';
import CarbonNeutralPNG from '../../assets/carbon-neutral.png';
import CreditoCarbonoPNG from '../../assets/credito-carbono.png';
import FeedPNG from '../../assets/feed.png';
import LicitacoesPNG from '../../assets/licitacoes.png';
import NoticiaABC_PNG from '../../assets/noticia_abc.png';
import './index.css';
import Footer from "../components/footer/footer";



function Home() {
    return (
        <>  
            <header>
                <img src={Logo} id="logo" alt="Ahead Logo"/>
                    <ul class="navbar">
                        <li class="nav-item"><a href="https://www.gov.br/agricultura/pt-br/assuntos/sustentabilidade/agricultura-de-baixa-emissao-de-carbono/publicacoes/abc-portugues.pdf">Plano ABC+</a></li>
                        <li class="nav-item"><a href="https://www.bndes.gov.br/wps/portal/site/home/mercado-de-capitais/creditos-de-carbono">Créditos de Carbono</a></li>
                        <li class="nav-item"><a href="#licitacoes">Licitações</a></li>
                    </ul>
            </header>

            <div id="feed_description">
                <div>
                    <h1>Feed</h1>
                    <h2 id="feed-subtitle">Emita menos carbono e acompanhe outros produtores rurais sustentáveis.</h2>
                    <a class="button" href="/login" id="login" >Login</a>
                    <a class="button" href="/register" id="cadastre_se" >Cadastre-se</a>
                </div>
                
                <img src={FeedPNG} id="feed-Image" alt="Examplo de Feed"/>
            </div>

            <section id="main-content">
            <div id="plano-abc">
                <h2 id="plano-title">Plano ABC+</h2>
                <p id="plano-subtitle">Segundo o Gov.br, o Plano ABC+ pretende reduzir a emissão de carbono equivalente a 1.1 bilhão de toneladas no setor agropecuário até 2030.</p>
                <img src={NoticiaABC_PNG} alt="Notícia ABC+" id="noticia-abc"/>
            </div>

            <div id="services">
                <div id="creditos_carbono" class="service_card">
                    <div>
                        <h2>Créditos de Carbono</h2>
                        <p>Compre e venda créditos de carbono para assegurar a sustentabilidade ambiental do seu negócio.</p>
                    </div>

                    <img src={CreditoCarbonoPNG} alt="Credito de Carbono"/>
                </div>

                <div id="licitacoes" class="service_card">
                    <div>
                        <h2>Licitações</h2>
                        <p>Inscreva-se e acompanhe licitações do setor agropecuário.</p>
                    </div>
                    <img src={LicitacoesPNG} alt="Licitações"/>
                </div>

                <div id="sustentabilidade" class="service_card">
                    <div>
                        <h2>Ganhe selos de sustentabilidade</h2>
                        <p>Ganhe selos de sustentabilidade na plataforma ao diminuir a emissão de carbono na atividade agropecuária.</p>
                    </div>
                    <img src={CarbonNeutralPNG} alt="Carbono Neutro"/>
                </div>
            </div>
            </section>

            <Footer />
        </>
    )
}

export default Home