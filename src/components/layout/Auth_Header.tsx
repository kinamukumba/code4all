'use client';

import { useEffect } from "react";
import { BiGroup, BiHome, BiLogOut, BiMenu, BiMessage, BiPaperclip, BiSearch } from "react-icons/bi";
import "../../styles/auth/global.css";
import { IoNotifications } from "react-icons/io5";
import Link from "next/link";
import { GiGraduateCap, GiHelp } from "react-icons/gi";

import Image from "next/image";
import { CgProfile } from "react-icons/cg";

export default function AuthHeader() {
    useEffect(() => {
        const uxIconDrop = document.querySelectorAll<HTMLElement>('.header-el .icon');
        const uxDrop = document.querySelectorAll<HTMLElement>('.header-el .drop');

        // Guarda os handlers para limpar depois
        const handlers: { icon: HTMLElement, handler: () => void }[] = [];

        uxIconDrop.forEach((icon, index) => {
            const handler = () => {
                // Oculta todos os dropdowns
                uxDrop.forEach(drop => drop.classList.remove('active'));

                // Alterna apenas o dropdown correspondente ao ícone clicado
                uxDrop[index]?.classList.toggle('active');
            };

            icon.addEventListener('click', handler);
            handlers.push({ icon, handler });
        });


        const menuIcon = document.querySelector<HTMLElement>('.menu.icon');
        const menu = document.querySelector<HTMLElement>('.menu-aside');

        const menuHandler = () => {
            menu?.classList.toggle('ok');
        };

        menuIcon?.addEventListener('click', menuHandler);

        return () => {
            handlers.forEach(({ icon, handler }) => {
                icon.removeEventListener('click', handler);
            });

            menuIcon?.removeEventListener('click', menuHandler);
        };
    }, []);

    return (
        <>
            <header className="header">
                <div className="section-left">
                    <div className="menu icon">
                        <BiMenu />
                    </div>

                    <h1>Painel do estudante</h1>
                </div>

                <div className="section-right">
                    <form className="input-search">
                        <input type="text" placeholder="O que está buscando?" name="search" />
                        <button type="submit">
                            <BiSearch />
                        </button>
                    </form>

                    <div className="header-el notification">
                        <div className="icon">
                            <IoNotifications />
                        </div>
                        <div className="drop hidden notification">
                            <h2 className="title notif">Notificações</h2>
                            <div className="content-not">
                                <Image
                                    src="/not-found.png"
                                    alt="Not Found"
                                    width={100}
                                    height={70}
                                />

                                <p>Nenhuma notificação</p>
                            </div>
                        </div>
                    </div>

                    <div className="header-el profile">
                        <div className="icon profile">
                            <p>KM</p>
                        </div>
                        <div className="drop hidden profile-data">
                            <div className="data">
                                <h2 className="title">Kina Mukumba</h2>
                                <p>kinamukumba@gmail.com</p>
                                <Link href="/auth/profile">
                                    <button><CgProfile />Acessar perfil</button>
                                </Link>

                                <Link href="/auth/profile">
                                    <button className="logout"><BiLogOut />Terminar sessão</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="menu-aside">
                <ul className="item-aside">
                    <Link href="/auth/dashboard">
                        <li className="itens focus">
                            <BiHome />
                            <p>Home</p>
                        </li>
                    </Link>

                    <Link href="/auth/course">
                        <li className="itens">
                            <GiGraduateCap />
                            <p>Cursos</p>
                        </li>
                    </Link>

                    <Link href="/auth/graduation">
                        <li className="itens">
                            <BiPaperclip />
                            <p>Certificados</p>
                        </li>
                    </Link>

                    <Link href="/auth/community">
                        <li className="itens">
                            <BiGroup />
                            <p>Comunidades</p>
                        </li>
                    </Link>

                    <Link href="/auth/message">
                        <li className="itens">
                            <BiMessage />
                            <p>Mensagens</p>
                        </li>
                    </Link>

                    <Link href="/auth/support">
                        <li className="itens">
                            <GiHelp />
                            <p>Suporte</p>
                        </li>
                    </Link>

                    <Link href="/auth/support">
                        <li className="itens">
                            <BiLogOut />
                            <p>Terminar sessão</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    );
}
