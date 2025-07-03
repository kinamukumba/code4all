import Link from "next/link";
import Image from 'next/image';
import { BiVoicemail } from "react-icons/bi";
import { FaCode, FaFacebook, FaLinkedin, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa6";
export default function Footer() {
    return (
        <>
            <footer>
                <section className="section-footer">
                    <div className="contain">
                        <Link href="/"><div className="logo-img center"><Image className="logo-f" src="/logo_main2.png" width={150}
                            height={50} alt="" /></div></Link>
                        <p>
                            Code4All é uma plataforma de ensino de programação que forma desenvolvedores com foco na prática, inclusão e oportunidades reais no mercado digital.
                        </p>
                        <form className="row-input">
                            <label htmlFor="inputEmail">Newletter</label>
                            <div className="input">
                                <BiVoicemail />
                                <input type="email" name="newiEmail" id="inputEmail" placeholder="seuemaul@exemplo.com" />
                                <button>Enviar</button>
                            </div>
                        </form>
                        <div className="media">
                            <span><Link href=""><FaFacebook /></Link></span>
                            <span><Link href=""><FaWhatsapp /></Link></span>
                            <span><Link href=""><FaTelegram /></Link></span>
                            <span><Link href=""><FaYoutube /></Link></span>
                        </div>
                    </div>
                    <nav className="footer-nav">
                        <ul>
                            <p>Companhia</p>
                            <Link href=""><li>Sobre</li></Link>
                            <Link href=""><li>Serviço</li></Link>
                            <Link href=""><li>Team</li></Link>
                        </ul>
                        <ul>
                            <p>Comunidade</p>
                            <Link href=""><li>Termos & Condições</li></Link>
                            <Link href=""><li>Política de uso</li></Link>
                            <Link href=""><li>FAQS</li></Link>
                        </ul>
                    </nav>
                </section>
                <em>&copy; Todos direitos reservado a <i>KINACODE</i></em>
            </footer>
        </>
    );
}