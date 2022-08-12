import "./TextField.css"

const TextField = ({label, placeholder, id, required, valueChanged, value, className}) => {

    
    return (
        <div className="text-field">
            <label>{label}</label>
            <input required={required} placeholder={placeholder} id={id} onChange={event => valueChanged(event.target.value) } value={value} className={className}/>
        </div>
    )
};

export default TextField;