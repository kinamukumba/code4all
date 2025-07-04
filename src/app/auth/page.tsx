import '../../styles/auth/global.css'
import Link from "next/link";
import Image from 'next/image';
import { BiKey } from "react-icons/bi";

export default function Auth() {
    return (
        <>
            <main className="mainAuthCode">
                <form className="checking-code">
                    <Link href="/"><div className="logo-img center"><Image src="/logo_main.png" width={150}
                                        height={50} alt="" /></div></Link>
                    <h1 className="title">Código de verifição de conta</h1>
                    <p>Preencha o campo com o código que enviamos para o seu email</p>
                    <div className="row-input">
                        <label htmlFor="inputCode"></label>
                        <div className="input">
                            <BiKey />
                            <input type="text" name="authCode" id="inputCode" placeholder="" />
                        </div>
                        <button>Verificar</button>
                    </div>
                </form>
            </main>
        </>
    );
}