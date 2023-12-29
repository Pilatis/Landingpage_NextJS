
import './Input.css'

interface InputProps {//definindo a interface que descreve os tipos para as props
  type: string;
  placeholder: string;
  pattern?: string;
  required: boolean;
}

export default function Input({
  type,
  placeholder,
  pattern,
  required
} : InputProps) {//Para o typescript reconhecer os tipos esperados pelas props

    return (
       <input 
          className='input'
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          required={required}
         />
    )
};
