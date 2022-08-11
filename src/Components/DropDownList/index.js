import "./DropDownList.css";



const DropDownList = ({label, teamList, value, valueChanged, id}) => {

    return (
        <div className="dropdown-list">
            <label>{label}</label>
            <select onChange={event => valueChanged(event.target.value)} value={value} id={id}>
                <option defaultValue=''>Selecione um time</option>
                {teamList.map((item) => (<option key={item}>{item}</option>))}
            </select>
        </div>
    )
};

export default DropDownList;