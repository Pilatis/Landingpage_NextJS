import Image from 'next/image'
import Button from '../Button/Button'
import './Welcome.css'

export default function Header() {


    return (
       <div className="container-welcome">
        <div className="content">
         <div className="text">
            <h1>Melhor Agência de Marketing do bairro</h1>
            <p>Somos uma agência de performance digital,</p><p>aceitamos vendas e aquisição de leads para grandes marcas</p> 
         </div>
         <div className='btn'>
         <Button title="Aumentar Vendas"/> 
         </div>
         </div>
         <div className="image">
            <Image src="/images/bannerWelcome.svg"  width="470" height="350" alt="Welcome" />
         </div>
       </div> 
    )
}