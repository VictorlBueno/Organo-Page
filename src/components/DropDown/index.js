import "./DropDown.css";

export const DropDown = (props) => {
    return (
        <div className="drop-down">
            <label>{props.label}</label>

            <select
                onChange={(event) => props.onChanged(event.target.value)}
                required={props.required}
                value={props.FieldValue}
            >
                <option value=""></option>

                {props.itens.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;
