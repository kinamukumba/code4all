import Image from "next/image";

export default function NotFound() {
    return (
        <>
            <Image
                src="/not-found.png"
                alt="Not Found"
                width={200}
                height={200}
            />
        </>
    );
}