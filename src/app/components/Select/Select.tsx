
import './Select.css'

interface SelectProps {
   placeholder: string;
   required: boolean;
    options: { label: string; value: string }[];
}

export default function select({ placeholder, required, options } : SelectProps) {

    
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
