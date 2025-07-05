import { BiMenu } from "react-icons/bi";
import "../../styles/auth/global.css"
export default function AuthHeader() {
    return (
        <>
            <header className="header">
                <div className="menu">
                    <BiMenu/>
                </div>
            </header>
        </>
    );
}