import Image from "next/image"
import Link from "next/link"

import './Header.css'
import Button from "../Button/Button"

export default function Header() {


    return (
        <div className="container">
            <div className="logo">
                <Image className="logo-header" src="/images/logo.png" width="170" height="70" alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link className="link" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" href="/routes/What">O que fazemos</Link>
                    </li>
                    <li>
                        <Link className="link" href="/routes/Cases">Cases</Link>
                    </li>
                </ul>
            </div>
            <div className="btn-header">
                <Button title='Fale Conosco' />
            </div>
        </div>
    )
}