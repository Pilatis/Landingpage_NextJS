import Link from 'next/link'
import Image from 'next/image'
import './Footer.css'

export default function Footer() {


  return (
    <div className="container-footer">
      {/*1-COLUMN */}
      <div className="column-footer">
        <Image className='logo-footer' src="/images/logo.png" width="150" height="55" alt="logo" />
        <h1 className='h1-column-number'>0800 800 800</h1>
        <p>whitepace@gmail.com</p>
      </div>

      {/*2-COLUMN */}
      <div className="column-footer">
        <h1 className='h1-column-green'>MENU</h1>
        <Link className='p-link' href="/"><p>Quem somos</p></Link>
        <Link className='p-link' href="/"><p>Cases</p></Link>
      </div>

      {/*3-COLUMN */}
      <div className="column-footer">
        <h1 className='h1-column-green'>CONTEÚDO</h1>
        <Link className='p-link' href="/"><p>E-books</p></Link>
        <Link className='p-link' href="/"><p>Fórmulas prontas</p></Link>
      </div>

      {/*4-COLUMN */}
      <div className="column-footer">
        <h1 className='h1-column-green'>SOCIAL</h1>
        <Image className="icon-footer" src="/images/instagram.svg" width="30" height="30" alt="instagram"/>
        <Image className="icon-footer" src="/images/facebook.svg" width="30" height="30" alt="facebook" />
        <Image className="icon-footer" src="/images/linkedin.svg" width="30" height="30" alt="linkedin" />
        <Image className="icon-footer" src="/images/youtube.svg" width="30" height="30" alt="youbute" />
      </div>
      
      <div className="private-footer">
        <h1 className='h1-private-footer'>©2024 Whitepace - Todos os direitos reservados.</h1>
      </div>
    </div>

  )
};