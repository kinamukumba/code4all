import 'animate.css';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { BiBook, BiCheck, BiCodeBlock, BiKey, BiLeftArrow, BiRightArrow, BiRightArrowCircle, BiSolidBusiness, BiUser, BiVoicemail } from "react-icons/bi";
import { BsBook, BsBookFill, BsBuilding, BsBuildings, BsCode, BsPeople, BsStack } from "react-icons/bs";

import { DiCodeigniter, DiMysql, DiPostgresql } from "react-icons/di";
import { FaJs, FaNodeJs, FaPeopleArrows, FaWhatsappSquare, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { FcNext, FcRight } from "react-icons/fc";
import { GrConnectivity } from "react-icons/gr";
import { ImConnection } from "react-icons/im";
import { LuGraduationCap } from "react-icons/lu";
import { MdComputer, MdWeb } from "react-icons/md";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import Loader from '@/components/load';
import { RiNextjsFill, RiNodejsFill } from 'react-icons/ri';
import { SiPrisma } from 'react-icons/si';
import { GiGraduateCap, GiShadowFollower } from 'react-icons/gi';
import FeedbackSlider from '@/components/feedback';
import { LiaLinkedin } from 'react-icons/lia';
export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <div className="flex hero" id="hero">
          <div className="container-bcg">
            <h1 className="" data-aos="fade-up">Comece sua jornada no desenvolvimento web e lidere o futuro com <strong>JavaScript.</strong></h1>
            <p className='' data-aos="fade-up">A Code4All é mais do que uma plataforma de aprendizagem — é um movimento para tornar o conhecimento em tecnologia acessível, prático e transformador para todos.</p>
            <Link className="btnStart " data-aos="fade-up" href="/login">
              <button><DiCodeigniter /> Comece a sua <i>Jornada.js</i></button>
            </Link>
          </div>
        </div>
        <div className="flex us center" id="us">
          <span className="post">Porquê a code4all?</span>
          <h2>Ensino diferenciado, <i>Códigos melhores!</i></h2>
          <p>Ensinar não é apenas transmitir conhecimento, mas transformar a forma como ele é vivido e aplicado.</p>
          <section className="section-difference" data-aos="fade-up">
            <div className="diff">
              <span className="center">
                <MdComputer color="#0c8645" />
              </span>
              <h3>Tecnologia na Prática</h3>
              <p>
                Na Code4All, o ensino acontece no teclado. Desde o primeiro módulo, o aluno entra em contato direto com a prática. Aqui, cada clique tem propósito e cada linha de código é resultado de uma explicação clara, aplicada e orientada à resolução de problemas reais.
              </p>
            </div>

            <div className="diff">
              <span className="center">
                <GrConnectivity color="#6b4012" />
              </span>
              <h3>Conexão com o Mundo</h3>
              <p>
                Mais do que uma plataforma de ensino, a Code4All é um ecossistema de oportunidades. Nossos alunos se conectam com mentores, colegas, profissionais e empresas que compartilham o mesmo objetivo: transformar vidas por meio do código.
              </p>
            </div>

            <div className="diff">
              <span className="center">
                <LuGraduationCap color="#571d8b" />
              </span>
              <h3>Educação que Forma para a Vida</h3>
              <p>
                Nosso compromisso vai além do ensino técnico. Queremos formar pensadores criativos, solucionadores de problemas e cidadãos digitais preparados para o mercado e para o mundo.
              </p>
            </div>
          </section>
        </div>
        <div className="flex us tech center" id="tech">
          <span className="post">Evolução tecnológica</span>
          <h2>Últimos lançamentos, <i>aprenda novas tecnologias!</i></h2>
          <section className="section-difference tech " data-aos="fade-up">
            <div className="diff tech">
              <span className="center">
                <BsStack />
              </span>
              <h3>Introdução a Programação Web</h3>
              <p>
                A programação web é o ponto de partida para quem deseja criar soluções digitais modernas, acessíveis e que funcionam diretamente em navegadores, como Google Chrome, Firefox ou Safari. Ela está por trás de tudo o que usamos na internet: sites, blogs, lojas online, redes sociais, plataformas educacionais e muito mais.
              </p>
              <em className="category">Front-end</em>
              <em>FeedBacks - <i> 98%</i></em>
              <label><i></i></label>

            </div>

            <div className="diff tech">
              <span className="center">
                <FaJs />
              </span>
              <h3>JavaScript Intermédio</h3>
              <p>
                O JavaScript Intermédio representa a segunda etapa da jornada de quem está aprendendo a programar para a web. Depois de dominar os fundamentos (como variáveis, funções simples, operadores e interações básicas com HTML), o aluno passa a construir lógicas mais sofisticadas, dinâmicas e estruturadas com JavaScript.
              </p>
              <em className="category">Front-end</em>
              <em>FeedBacks - <i> 80%</i></em>
              <label><i></i></label>
            </div>

            <div className="diff tech">
              <span className="center">
                <FaJs />
              </span>
              <h3>JavaScript Avançado</h3>
              <p>
                Depois de aprender os fundamentos e dominar a lógica no nível intermédio, o JavaScript Avançado é o passo que leva o aluno a escrever código mais limpo, escalável, profissional e pronto para aplicações reais de alto nível.
              </p>
              <em className="category">Back-end</em>
              <em>FeedBacks - <i> 95%</i></em>
              <label><i></i></label>
            </div>
          </section>
          <Link href="/login" className="hover"><button>Ver mais cursos</button></Link>
        </div>
        <div className="flex start" id="start">
          <h3>Venha e faça parte da <i>Jornada.js</i></h3>
          <p>Junte-se a comunidade de +500k desenvolvedores Javascript e transforme a sua carreira!</p>
          <form className="row-input">
            <div className="input">
              <BiVoicemail />
              <input type="email" name="newletterEmail" id="inputEmail" placeholder="seuemaul@exemplo.com" />
            </div>
            <button className="hover">Começar</button>
            <div className="media">
              <span><Link href=""><FaFacebook /></Link></span>
              <span><Link href=""><FaWhatsapp /></Link></span>
              <span><Link href=""><FaTelegram /></Link></span>
              <span><Link href=""><FaYoutube /></Link></span>
            </div>
          </form>
        </div>
        <div className="flex us center" id="num">
          <span className="post">Nossos números</span>
          <h2>Números alcançados, <i>conecte-se a nós!</i></h2>
          <section className="section-difference num">
            <div className="count" data-aos="zoom-in">
              <p>+3</p>
              <em>Tecnologias lecionadas</em>
              <BsCode />
            </div>

            <div className="count" data-aos="zoom-in">
              <p>+5</p>
              <em>Tutoriais & Cursos</em>
              <BsBook />
            </div>

            <div className="count" data-aos="zoom-in">
              <p>+1k</p>
              <em>Profissionais</em>
              <BsPeople />
            </div>

            <div className="count" data-aos="zoom-in">
              <p>+10</p>
              <em>Colaboradores</em>
              <BsBuildings />
            </div>
          </section>
        </div>
        <div className="flex us center" id="service">
          <span className="post">Soluções</span>
          <h2>Explore e aproveita as nossas <i>Soluções!</i></h2>
          <p>Navegue pela nossa plataforma, descubra recursos, participe da comunidade e transforme sua jornada digital com a gente.</p>
          <section className="section-difference service" data-aos="fade-up">
            <div className="diff service">
              <div className="stacks">
                <span><RiNextjsFill /></span>
                <span><RiNodejsFill /></span>
                <span><SiPrisma /></span>
                <span><DiPostgresql /></span>
              </div>
              <h3>Desenvolvimento Web</h3>
              <p>Criamos websites, sistemas e plataformas web totalmente personalizados, responsivos e otimizados para performance e SEO.
Seja para empresas que precisam de presença digital, lojas que desejam vender online ou organizações que precisam de sistemas internos, entregamos soluções seguras, escaláveis e modernas.</p>
              <ul>
                <li><BiCheck /> Websites institucionais e catálogos online;</li>
                <li><BiCheck /> Sistemas de gestão personalizados (ERP, CRM, RH);</li>
                <li><BiCheck /> Plataformas educacionais e de e-learning;</li>
                <li><BiCheck /> Portais e dashboards interativos;</li>
              </ul>
              <em>Contruímos o seu Website <BiRightArrowCircle /></em>
            </div>
            <div className="diff service">
              <div className="stacks">
                <span><TbBrandReactNative /></span>
                <span><RiNodejsFill /></span>
                <span><DiMysql /></span>
              </div>
              <h3>Desenvolvimento Mobile</h3>
              <p>Desenvolvemos aplicativos para Android, iOS ou híbridos, focados em usabilidade, performance e impacto. Com nossa equipa técnica, criamos apps sob medida para startups, empresas e projetos sociais que precisam se aproximar dos seus usuários de forma prática e eficaz.</p>
              <ul>
                <li><BiCheck /> Aplicativos de vendas, entrega e marketplace;</li>
                <li><BiCheck /> Plataformas de gestão e controle para equipes externas;</li>
                <li><BiCheck /> Plataformas de gestão e controle para equipes externas;</li>
                <li><BiCheck /> Aplicações com autenticação, notificações e geolocalização.</li>
              </ul>
              <em>Contruímos a sua aplicação <BiRightArrowCircle /></em>
            </div>
            <div className="diff service">
              <div className="stacks">
                <span><FaPeopleArrows /></span>
                <span><GiGraduateCap /></span>
                <span><BsBookFill /></span>
              </div>
              <h3>Academia de Projectos</h3>
              <p>A Academia de Projetos da Code4All é um espaço onde conectamos empresas com jovens talentos da tecnologia. Por meio de desafios reais e mentorias técnicas, cocriamos soluções inovadoras enquanto desenvolvemos novos profissionais para o mercado.</p>
              <ul>
                <li><BiCheck /> Submeter ideias ou problemas reais da sua empresa;</li>
                <li><BiCheck /> Trabalhar com squads de jovens programadores;</li>
                <li><BiCheck /> Testar MVPs antes de escalar o investimento;</li>
                <li><BiCheck /> Apoiar projetos sociais com tecnologia de impacto.</li>
              </ul>
              <em>Ter ajuda com o seu projecto tecnológico <BiRightArrowCircle /></em>
            </div>
          </section>
        </div>
        <div className="flex us center feed" id="feed">
          <span className="post">Histórico</span>
          <h2>Olhe o que as pessoas falam de nós, <i>Code4all!</i></h2>
          <section className="feedback-wrapper" id='feedbackWrapper'>
            <FeedbackSlider classA='normal'/>
          </section>
          <section className="feedback-wrapper" id='feedbackWrapper'>
            <FeedbackSlider classA='reverse' />
          </section>
        </div>
        <div className="flex us center" id="community">
          <span className="post">Conexões</span>
          <h2>Junte-se as nossas <i>Comunidades!</i></h2>
          <section className="section-difference community">
            <div className="diff community" data-aos="fade-up">
              <span><FaFacebook /></span>
              <h3>Página do Facebbok</h3>
              <p>Na nossa página oficial do Facebook, você encontra conteúdos exclusivos, novidades, lançamentos de cursos, dicas de programação e histórias inspiradoras de quem está a transformar sua realidade por meio da tecnologia.</p>
              <em>+1k Seguidores</em>

              <button><FaFacebook /> Visitar Página</button>
            </div>

            <div className="diff community" data-aos="fade-up">
              <span><FaWhatsapp /></span>
              <h3>Comunidade WhatsApp</h3>
              <p>A Comunidade Code4All no WhatsApp é o espaço onde alunos, entusiastas da tecnologia e futuros programadores trocam experiências, partilham dúvidas, recebem dicas exclusivas e ficam por dentro de todas as novidades da nossa plataforma.</p>
              <em>+2k Membros</em>

              <button><FaWhatsapp /> Juntar-se ao grupo</button>
              <button><GiShadowFollower /> Seguir o canal</button>
            </div>

            <div className="diff community" data-aos="fade-up">
              <span><FaLinkedinIn /></span>
              <h3>Conta LinkedIn</h3>
              <p>A Code4All no LinkedIn é o espaço onde partilhamos a nossa visão como empresa, os bastidores do nosso impacto social, oportunidades de colaboração, artigos sobre tecnologia e educação, além de mostrar como estamos a transformar vidas por meio do ensino da programação.</p>
              <em>+5k Conexões</em>

              <button><FaLinkedinIn /> Visitar Página</button>
            </div>
          </section>
        </div>
        <div className="flex us center" id="contact">
          <span className="post">Fale connosco</span>
          <h2>Formulário de  <i>Contacto</i></h2>
          <form className="form contact" data-aos="fade-up">
            <div className="row-double">
              <div className="row-input">
                <label htmlFor="inputName">Nome Completo</label>
                <div className="input">
                  <BiUser/>
                  <input type="text" name="namecontact" id="inputName" placeholder="seunomecompleto" />
                </div>
              </div>
              <div className="row-input">
                <label htmlFor="inputEmail">Email</label>
                <div className="input">
                  <BiVoicemail />
                  <input type="email" name="emailcontact" id="inputEmail" placeholder="seuemaul@exemplo@gmail.com" />
                </div>
              </div>
            </div>

            <textarea name="" id="" placeholder='Mensagem'></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
