import '../Main/Main.scss';
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    const button = document.querySelector(".back-to-top") as HTMLElement;
    const btn = document.querySelector(".btn") as HTMLElement;
    const body = document.body;

    
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 300) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };

  
    const handleClick = () => {
      btn.classList.toggle("active");
      body.classList.toggle("dark-mode");
    };

    window.addEventListener("scroll", handleScroll);
    btn.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      btn.removeEventListener("click", handleClick);
    };
  }, []);



    return (
        <main className="main">
            <div id="top"></div>
            <section className='Header'>
                <nav >
                    <div className="nav-wrapper">

                        <a className="logo" href="/">Fonseca </a>


                        <ul className="right hide-on-med-and-down">

                            <li><a href="#experiencia" className="a-dark">Experiência</a></li>
                            <li><a href="#formacao" className="a-dark">Formação</a></li>
                            <li><a href="Your site is live at https://mariachf.github.io/-portf-lio-react-2025/" className="a-dark" target='_black' >Portfólio</a></li>
                        </ul>
                        <div className="btn"></div>
                    </div>
                </nav>

                <div className="box-header">

                    <div className="container">

                        <h1>Eduarda Fonseca</h1>
                        <h2 className="dark">Desenvolvedora Front-end</h2>
                        <p>São Paulo/SP</p>

                    </div>
                </div>

            </section>

            <section id="experiencia">

                <div className="rotated"> <h2>EXPERIÊNCIA</h2> </div>

                <div className="container1">
                    <p className="p">Desenvolvo pequenos projetos utilizando <b>HTML</b>, <b>CSS</b> e <b>JS</b>. Além de desenvolver o layout no <b>Figma</b>.</p>

                    <div className="exp-1">
                        <article className="experiencia">
                            <h3>Auxiliar de Escritório</h3>
                            <h4>Vitrine Comercio de Informática LTDA</h4>
                            <p>Fornecimento de suporte administrativo, gestão de planilhas e atendimento ao cliente
                                via chat, operações financeiras e controle e atualização do estoque da loja.

                            </p>
                        </article>
                    </div>

                    <div className="exp-2">
                        <article className="experiencia">
                            <h3>Atendente Jr</h3>
                            <h4>Minsait </h4>
                            <p>Ofereço suporte a uma empresa terceirizada de seguros em meio período,
                                lidando com atendimento ao cliente por telefone e chat, inclusive em situações
                                de atrito</p>

                        </article>
                    </div>

                </div>
            </section>


            <section id="formacao">

                <div className="rotated1"> <h2>FORMAÇÃO</h2> </div>

                <div className="box">
                    <p className="p">Realizei meu ensino médio em escola pública e atualmente estou cursando <b>Analise e desenvolvimento de sistema</b>. </p>


                    <div className="form-1">
                        <article className="formacao">
                            <h3>Centro universitário SENAC SP</h3>

                            <h4>Tecnologia em Gestão de Recursos Humanos</h4>
                            <p>2018 - 2020 </p>

                        </article>
                    </div>

                    <div className="form-1">
                        <article className="formacao">
                            <h3>Vai na Web</h3>

                            <h4>Desenvolvedor(a) em Tecnologia (Front-end)</h4>
                            <p>2023</p>

                        </article>
                    </div>

                    <div className="form-1">
                        <article className="formacao">
                            <h3>Centro universitário FAM</h3>

                            <h4>Análise e Desenvolvimento de Sistemas</h4>
                            <p>2023 - 2025</p>
                        </article>
                    </div>

                </div>

                <a href="#top" className="back-to-top"><img src="/assets/up-arrow.png" alt="botão"width="35"
      height="35"/></a>
            </section>

            
        </main>
    );
}
