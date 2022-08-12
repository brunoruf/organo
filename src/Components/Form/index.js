import "./Form.css"
import TextField from "../TextField"
import Button from "../Button"
import DropDownList from "../DropDownList"
import { useState } from "react"



const Form = ({mainTitle, cardInfos, teamList, closeModal}) => {

    const [time, setTime] = useState('')
    const [nome, setNome] = useState('')
    const [bordao, setBordao] = useState('')
    const [forca, setForca] = useState('')
    const [resistencia, setResistencia] = useState('')
    const [image, setImage] = useState('')

    const onSave = (event) => {
        event.preventDefault();
        cardInfos({
            time,
            nome,
            bordao,
            forca,
            resistencia,
            image,
        })
        setTime('')
        setNome('')
        setBordao('')
        setForca('')
        setResistencia('')
        setImage('')
        closeModal({closeModal})
    };

    return (
        <section className="container-form">
            <form className="form" onSubmit={onSave}>
                <div>
                    <h2>{mainTitle}</h2>
                    <button onClick={closeModal} className="buttonx">X</button>
                </div>
                <DropDownList
                    label="Time"
                    placeholder="Selecione o time"
                    teamList={teamList}
                    valueChanged={valor => setTime(valor)}
                    value={time}
                />
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome"
                    valueChanged={valor => setNome(valor)}
                    value={nome}
                />
                <TextField
                    required={true}
                    label="Bordão"
                    placeholder="Digite o bordão"
                    valueChanged={valor => setBordao(valor)}
                    value={bordao}
                />
                <div className="atributos">
                    <TextField
                        label="Força"
                        placeholder="Digite seu nome"
                        className="atributo"
                        valueChanged={setForca}
                        value={forca}
                    />
                    <TextField
                        label="Resistência"
                        placeholder="Digite seu nome"
                        className="atributo"
                        valueChanged={setResistencia}
                        value={resistencia}
                    />
                </div>
                <TextField
                    label="Imagem"
                    placeholder="Digite seu nome"
                    valueChanged={setImage}
                    value={image}
                />
                <Button text="Cadastrar"/>
            </form>
        </section>
    )
}

export default Form