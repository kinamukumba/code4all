import "../styles/auth/global.css"
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <main className="page-not-found">
                <Image
                src="/not-found1.png"
                alt="Not Found"
                width={200}
                height={200}
            />
            <h1 className="title">Página não encontrada!</h1>

            <Link href="/"><button>Voltar a página inicial</button></Link>
            </main>
        </>
    );
}