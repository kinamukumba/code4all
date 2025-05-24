import 'animate.css';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { BiBook, BiCheck, BiCodeBlock, BiKey, BiLeftArrow, BiRightArrow, BiRightArrowCircle, BiSolidBusiness, BiUser, BiVoicemail } from "react-icons/bi";
import { BsBook, BsBookFill, BsBuilding, BsBuildings, BsCode, BsPeople } from "react-icons/bs";

import { DiCodeigniter, DiMysql, DiPostgresql } from "react-icons/di";
import { FaJs, FaNodeJs, FaPeopleArrows, FaWhatsappSquare, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { FcNext, FcRight } from "react-icons/fc";
import { GrConnectivity } from "react-icons/gr";
import { ImConnection } from "react-icons/im";
import { LuGraduationCap } from "react-icons/lu";
import { MdComputer } from "react-icons/md";
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
            <h1 className="" data-aos="fade-up"><strong>Pensar</strong> sem Limite!</h1>
            <p className='' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nesciunt odio voluptas corrupti neque exercitationem cumque eius totam maxime fugiat nobis, modi delectus mollitia tempore debitis in iste commodi ad.</p>
            <Link className="btnStart " data-aos="fade-up" href="/login">
              <button><DiCodeigniter /> Comece a sua <i>Jornada.js</i></button>
            </Link>
          </div>
        </div>
        <div className="flex us center" id="us">
          <span className="post">Porquê a code4all?</span>
          <h2>Ensino diferenciado, <i>Códigos melhores!</i></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minima quidem veniam a architecto dolore reiciendis sit, possimus amet illo odit esse dicta commodi animi enim tempora suscipit ex aspernatur.</p>
          <section className="section-difference" data-aos="fade-up">
            <div className="diff">
              <span className="center">
                <MdComputer color="#145331" />
              </span>
              <h3>XXXXXXXXXXXXXX</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo saepe perspiciatis, quisquam esse totam dolor quasi at porro est excepturi adipisci quod consequatur vel maiores ipsum vitae corporis omnis pariatur.
              </p>
            </div>

            <div className="diff">
              <span className="center">
                <GrConnectivity color="#6b4012" />
              </span>
              <h3>XXXXXXXXXXXXXX</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo saepe perspiciatis, quisquam esse totam dolor quasi at porro est excepturi adipisci quod consequatur vel maiores ipsum vitae corporis omnis pariatur.
              </p>
            </div>

            <div className="diff">
              <span className="center">
                <LuGraduationCap color="#571d8b" />
              </span>
              <h3>XXXXXXXXXXXXXX</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo saepe perspiciatis, quisquam esse totam dolor quasi at porro est excepturi adipisci quod consequatur vel maiores ipsum vitae corporis omnis pariatur.
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
                <FaJs />
              </span>
              <h3>Introdução ao Javascript</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo saepe perspiciatis, quisquam esse totam dolor quasi at porro est excepturi adipisci quod consequatur vel maiores ipsum vitae corporis omnis pariatur.
              </p>
              <em className="category">Front-end</em>
              <em>FeedBacks - <i> 98%</i></em>
              <label><i></i></label>

            </div>

            <div className="diff tech">
              <span className="center">
                <TbBrandNextjs />
              </span>
              <h3>Next.JS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo saepe perspiciatis, quisquam esse totam dolor quasi at porro est excepturi adipisci quod consequatur vel maiores ipsum vitae corporis omnis pariatur.
              </p>
              <em className="category">Front-end</em>
              <em>FeedBacks - <i> 80%</i></em>
              <label><i></i></label>
            </div>

            <div className="diff tech">
              <span className="center">
                <FaNodeJs />
              </span>
              <h3>Node.JS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo saepe perspiciatis, quisquam esse totam dolor quasi at porro est excepturi adipisci quod consequatur vel maiores ipsum vitae corporis omnis pariatur.
              </p>
              <em className="category">Back-end</em>
              <em>FeedBacks - <i> 95%</i></em>
              <label><i></i></label>
            </div>
          </section>
          <Link href="" className="hover"><button>Ver mais cursos</button></Link>
        </div>
        <div className="flex start" id="start">
          <h3>Venha e faça parte da <i>Jornada.js</i></h3>
          <p>Junte-se a comunidade de +500k desenvolvedores Javascript e transforme a sua carreira!</p>
          <form className="row-input">
            <div className="input">
              <BiVoicemail />
              <input type="email" name="logiEmail" id="inputEmail" placeholder="seuemaul@exemplo.com" />
            </div>
            <button className="hover">Começar</button>
            <div className="media">
              <span><FaFacebook /></span>
              <span><FaWhatsapp /></span>
              <span><FaTelegram /></span>
              <span><FaYoutube /></span>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minima quidem veniam a architecto dolore reiciendis sit, possimus amet illo odit esse dicta commodi animi enim tempora suscipit ex aspernatur.</p>
          <section className="section-difference service" data-aos="fade-up">
            <div className="diff service">
              <div className="stacks">
                <span><RiNextjsFill /></span>
                <span><RiNodejsFill /></span>
                <span><SiPrisma /></span>
                <span><DiPostgresql /></span>
              </div>
              <h3>Desenvolvimento Web</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio earum error voluptates quod libero placeat officia sapiente quisquam nostrum magnam voluptatem enim in, aperiam accusantium modi ipsum qui nesciunt itaque.</p>
              <ul>
                <li><BiCheck /> xxxxxxx</li>
                <li><BiCheck /> xxxxxxx</li>
                <li><BiCheck /> xxxxxxx</li>
                <li><BiCheck /> xxxxxxx</li>
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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio earum error voluptates quod libero placeat officia sapiente quisquam nostrum magnam voluptatem enim in, aperiam accusantium modi ipsum qui nesciunt itaque.</p>
              <ul>
                <li><BiCheck /> xxxxxxx</li>
                <li><BiCheck /> xxxxxxx</li>
                <li><BiCheck /> xxxxxxx</li>
                <li><BiCheck /> xxxxxxx</li>
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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio earum error voluptates quod libero placeat officia sapiente quisquam nostrum magnam voluptatem enim in, aperiam accusantium modi ipsum qui nesciunt itaque.</p>
              <ul>
                <li><BiCheck /> xxxxxxx</li>
                <li><BiCheck /> xxxxxxx</li>
                <li><BiCheck /> xxxxxxx</li>
                <li><BiCheck /> xxxxxxx</li>
              </ul>
              <em>Ter ajuda com o seu projecto tecnológico <BiRightArrowCircle /></em>
            </div>
          </section>
        </div>
        <div className="flex us center feed" id="feed">
          <span className="post">Histórico</span>
          <h2>Olhe o que as pessoas falam de nós, <i>Code4all!</i></h2>
          <section className="feedback-wrapper" id='feedbackWrapper'>
            <FeedbackSlider />
          </section>
        </div>
        <div className="flex us center" id="community">
          <span className="post">Conexões</span>
          <h2>Junte-se as nossas <i>Comunidades!</i></h2>
          <section className="section-difference community">
            <div className="diff community" data-aos="fade-up">
              <span><FaFacebook /></span>
              <h3>Página do Facebbok</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore modi, beatae consequatur sed alias dolor laborum? Enim doloribus ab ullam quam praesentium sapiente qui, tempore rem maiores, repellat eligendi modi.</p>
              <em>+1k Seguidores</em>

              <button><FaFacebook /> Visitar Página</button>
            </div>

            <div className="diff community" data-aos="fade-up">
              <span><FaWhatsapp /></span>
              <h3>Comunidade WhatsApp</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore modi, beatae consequatur sed alias dolor laborum? Enim doloribus ab ullam quam praesentium sapiente qui, tempore rem maiores, repellat eligendi modi.</p>
              <em>+2k Membros</em>

              <button><FaWhatsapp /> Juntar-se ao grupo</button>
              <button><GiShadowFollower /> Seguir o canal</button>
            </div>

            <div className="diff community" data-aos="fade-up">
              <span><FaLinkedinIn /></span>
              <h3>Página do Facebbok</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore modi, beatae consequatur sed alias dolor laborum? Enim doloribus ab ullam quam praesentium sapiente qui, tempore rem maiores, repellat eligendi modi.</p>
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
