
import './Button.css'

interface ButtonProps {
    title: string;
}

export default function Button({ title }: ButtonProps) {
    

    return (
        <>
        <div className='action'>
            <button>{title}</button>
        </div>
       
        </>
        
    )
}
