import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {
console.log('test:', process.env.EMAIL)
    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: 'smtp.gmail.com',
        ssl: true,
    });

try { //tenta fazer isso(executar essas linhas) TIPO de condição(sucesso ou fracasso)
    const message = await client.sendAsync({ //enviar email
        text: 'Teste',                 //nome no email
        from: 'pilatilucas@gmail.com', //para quem
        to: 'pilatilucas@gmail.com',   //de quem
        subject: 'testing emailjs',    //assunto do email 
    });

    console.log(message);
    res.status(200).json({message: 'email enviado'})
} catch (err) { //error
    console.error(err)
}

    res.status(200).json({ message: 'Send Mail' })
}