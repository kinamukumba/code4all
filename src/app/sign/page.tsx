import Link from "next/link";
import { BiKey, BiUser, BiVoicemail } from "react-icons/bi";
import { CgPassword } from "react-icons/cg";
import Image from 'next/image';
import { FaCode } from "react-icons/fa";
import { ImSpinner } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { PiPassword } from "react-icons/pi";
export default function Login(){
    return(
        <>
            <div className="container-loin center">
                <section className="form center" data-aos="zoom-in">
                    <Link href="/"><div className="logo-img center"><Image src="/logo_main.png" width={150}
                                                            height={50} alt="" /></div></Link>
                    <h3>Bem-vindo de volta!</h3>
                    <p>Conecte-se a sua conta</p>
                    <form className="main-form">
                        <div className="row-input">
                            <label htmlFor="inputName">Nome completo</label>
                            <div className="input">
                                <BiUser/>
                                <input type="text" name="signName" id="inputName" placeholder="seunomecompleto"/>
                            </div>
                        </div>
                        <div className="row-input">
                            <label htmlFor="inputEmail">Email</label>
                            <div className="input">
                                <BiVoicemail/>
                                <input type="email" name="signEmail" id="inputEmail" placeholder="seuemaul@exemplo.com"/>
                            </div>
                        </div>
                        <div className="row-input">
                            <label htmlFor="inputPass">Senha <i className="typePass">Use +6 caracters com a mistura de letras, número e símbolos</i></label>
                            <div className="input">
                                <BiKey/>
                                <input type="password" name="signPass" id="inputPass" placeholder="xxxxxxxxxx"/>
                            </div>
                        </div>
                        <div className="remembe">
                            <input type="radio" name="" id="rem" />
                            <label htmlFor="rem">Aceitar os nossos <Link href=""><i>Termos & Condições</i></Link></label>
                        </div>
                        <button>Criar conta</button>

                        <p className="changeSign">Já tenho conta! <Link href="/login"><i>Fazer login</i></Link></p>
                    </form>
                </section>
            </div>
        </>
    );
}