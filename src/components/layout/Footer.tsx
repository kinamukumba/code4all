import Link from "next/link";
import { BiVoicemail } from "react-icons/bi";
import { FaCode, FaFacebook, FaLinkedin, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa6";
export default function Footer() {
    return (
        <>
            <footer>
                <section className="section-footer">
                    <div className="contain">
                        <Link href="/"><div className="logo-img center"><FaCode /> code4all</div></Link>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam deserunt est consectetur eligendi iusto quos nam impedit consequuntur quaerat necessitatibus voluptate reiciendis quo expedita molestias provident ut, possimus asperiores?
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
                            <span><FaFacebook /></span>
                            <span><FaWhatsapp /></span>
                            <span><FaTelegram /></span>
                            <span><FaYoutube /></span>
                            <span><FaLinkedin /></span>
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