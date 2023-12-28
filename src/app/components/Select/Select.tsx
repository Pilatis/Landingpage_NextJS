
import './Select.css'

export default function select({ placeholder, required, options }) {


    return (
        <select className="select" required={required}>
           <option value="">{placeholder}</option>
           {
            options?.map((option, index) => ( //index = 0
             <option key={index} value={option.value}>{option.label}</option>
            ))
           }
        </select>
    )
};