import Link from "next/link";
import Image from 'next/image';
import { BiLogIn, BiMenu } from "react-icons/bi";
import { BsMenuApp } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
export default function Header() {
    /*window.addEventListener('scroll', ()=>{
        if(window.scrollY > 2){
            document.querySelector('header')?.classList.add('ok');
        }
    })*/

    return (
        <>
            <header className="ok">
                <Link href="/"><div className="logo-img center"><Image className="logo-f" src="/logo_main2.png" width={200}
                    height={50} alt="" /></div></Link>
                <nav className="nav-bar">
                    <ul className="nav-itens">
                        <Link href='#hero'>
                            <li className="item">Explorar</li>
                        </Link>
                        <Link href='#us'>
                            <li className="item">Sobre</li>
                        </Link>
                        <Link href='#tech'>
                            <li className="item">Be Dev</li>
                        </Link>
                        <Link href='#service'>
                            <li className="item">Serviços</li>
                        </Link>
                        <Link href='#community'>
                            <li className="item">Comunidade</li>
                        </Link>
                        <Link href='#contact'>
                            <li className="item">Contacto</li>
                        </Link>
                    </ul>
                </nav>
                <div className="button-sign">
                    <Link href='/login'>
                        <button className="login"><BiLogIn color="#ffffff" /> Login</button>
                    </Link>
                    <Link href='/sign'>
                        <button>Começar</button>
                    </Link>
                </div>
                <div className="menu">
                    <BiMenu />
                </div>
            </header>

            <div className="menuAside"></div>
        </>
    )
}