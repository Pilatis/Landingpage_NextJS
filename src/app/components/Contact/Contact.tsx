
import Link from 'next/link'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Select from '../Select/Select'
import axios from 'axios'
import { useFormik } from 'formik'

import './Contact.css'

export default function Contact() {


    return (
        <div className='container-contact'>
            <div className='container-text-contact'>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
            <div className='form'>

                <h1>Fale com um especialista</h1>
                <form>
                    <Input id="name" type="text" placeholder='Nome completo' required />
                    <Input id="email" type="email" placeholder='E-mail profissional' required />
                    <Input id="phone" type="number" placeholder='Celular/Whatsapp' pattern='^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$' required />
                    <Input id="website" type="text" placeholder='Site' required />

                    <Select id="midia" placeholder="Orçamento para mídia" options={[
                        { label: "Instagram", value: "instagram" },
                        { label: "Facebook", value: "facebook" },
                        { label: "Linkedin", value: "linkedin" },
                    ]}
                        required
                    />

                    <button className='btn-form'  >Enviar</button>
                </form>

            </div>
            <div className="p-footer-text">
                <p>Ao enviar este formulário, você reconhece que leu e concorda com nossa <span><Link href="/components/Cases">Política de Privacidade</Link></span></p>
            </div>
        </div>
    )
}