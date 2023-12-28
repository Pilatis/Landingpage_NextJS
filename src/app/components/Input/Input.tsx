
import './Input.css'

export default function Input({
  type,
  placeholder,
  pattern,
  required
}) {

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