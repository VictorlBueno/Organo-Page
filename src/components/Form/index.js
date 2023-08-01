import { useState } from "react";
import Button from "../Button/";
import DropDown from "../DropDown/";
import TextField from "../TextField/";
import "./Form.css";

const Form = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    const onSave = (event) => {
        // Previne o reload
        event.preventDefault();
        // Passa o objeto para o chamador
        props.onSubmitNewWorker({
            name: name,
            position: position,
            image: image,
            team: team,
        });

        // Previne formulário
        setImage("");
        setName("");
        setPosition("");
        setTeam("");
    };

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField
                    label="Nome"
                    placeholder="Digite seu nome"
                    required={true}
                    value={name}
                    onChanged={(value) => setName(value)}
                />
                <TextField
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    required={true}
                    value={position}
                    onChanged={(value) => setPosition(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChanged={(value) => setImage(value)}
                />
                <DropDown
                    label="Time"
                    itens={props.teams}
                    required={true}
                    FieldValue={team}
                    onChanged={(value) => setTeam(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
};

export default Form;
