import Link from "next/link";
import Image from 'next/image';
import { BiKey, BiVoicemail } from "react-icons/bi";
import { CgPassword } from "react-icons/cg";
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
                            <label htmlFor="inputEmail">Email</label>
                            <div className="input">
                                <BiVoicemail/>
                                <input type="email" name="logiEmail" id="inputEmail" placeholder="seuemaul@exemplo.com"/>
                            </div>
                        </div>
                        <div className="row-input">
                            <label htmlFor="inputPass">Senha <Link href=""><i>Redifinir senha</i></Link></label>
                            <div className="input">
                                <BiKey/>
                                <input type="password" name="logiPass" id="inputPass" placeholder="xxxxxxxxx"/>
                            </div>
                        </div>
                        <div className="remembe">
                            <input type="radio" name="" id="rem" />
                            <label htmlFor="rem">Lembrar-se de mim</label>
                        </div>
                        <button>Entrar na conta</button>
                         <p className="changeSign">Ainda não tenho conta! <Link href="/sign"><i>Criar conta</i></Link></p>
                    </form>
                </section>
            </div>
        </>
    );
}