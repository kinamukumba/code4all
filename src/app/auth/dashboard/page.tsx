'use client';
import { useEffect } from "react";
import "../../../styles/auth/global.css"
import AuthHeader from "@/components/layout/Auth_Header";
import { GiPointing, GiProgression } from "react-icons/gi";
import { BsSkipEnd } from "react-icons/bs";
import { MdPinEnd } from "react-icons/md";
import { BiPrinter } from "react-icons/bi";
import { TbPoint } from "react-icons/tb";

export default function Dashboard() {

    useEffect(() => {
        const timeout = setTimeout(() => {
            const maskLoader = document.querySelectorAll('.mask-load');
            maskLoader.forEach((mask) => {
                mask.classList.add('hidden');
            });
        }, 2500);

        return () => clearTimeout(timeout); // boa prática para limpar
    }, []);

    return (
        <>
            <AuthHeader />
            <main className="main-auth-dash">
                <div className="section dash-data">
                    <h1 className="title">Bem-vindo ao dashboard</h1>
                    <div className="grid-card-data">
                        <div className="card-data">
                            <div className="flex flex-row gap-1 mask-load">

                                <div className="row-loader">
                                    <div className="animate-pulse bg-gray-300 w-28 h-12 rounded-full"></div>
                                    <div className="animate-pulse bg-gray-300 w-36 h-12 rounded-full"></div>
                                </div>
                            </div>

                           <span>
                                <h1 style={{color: '#1a3790'}}>00</h1>
                                <p>Cursos em andamentos</p>
                           </span>

                           <GiProgression color="#1a3790"/>
                        </div>

                        <div className="card-data">
                            <div className="flex flex-row gap-1 mask-load">

                                <div className="row-loader">
                                    <div className="animate-pulse bg-gray-300 w-28 h-12 rounded-full"></div>
                                    <div className="animate-pulse bg-gray-300 w-36 h-12 rounded-full"></div>
                                </div>
                            </div>

                            <span>
                                <h1 style={{color: '#6b4012'}}>00</h1>
                                <p>Cursos concluídos</p>
                           </span>

                           <MdPinEnd color="#6b4012"/>
                        </div>

                        <div className="card-data">
                            <div className="flex flex-row gap-1 mask-load">

                                <div className="row-loader">
                                    <div className="animate-pulse bg-gray-300 w-28 h-12 rounded-full"></div>
                                    <div className="animate-pulse bg-gray-300 w-36 h-12 rounded-full"></div>
                                </div>
                            </div>

                            <span>
                                <h1 style={{color: '#571d8b'}}>00</h1>
                                <p>Certificados emitidos</p>
                           </span>

                           <BiPrinter color="#571d8b"/>
                        </div>

                        <div className="card-data">
                            <div className="flex flex-row gap-1 mask-load">

                                <div className="row-loader">
                                    <div className="animate-pulse bg-gray-300 w-28 h-12 rounded-full"></div>
                                    <div className="animate-pulse bg-gray-300 w-36 h-12 rounded-full"></div>
                                </div>
                            </div>

                            <span>
                                <h1 style={{color: '#601639'}}>00</h1>
                                <p>Pontuações</p>
                           </span>

                           <TbPoint color="#601639"/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}