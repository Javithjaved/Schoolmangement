
import { Form } from "react-bootstrap";

const Input = ({ name, value, onChange,label,onClick,variant }) => {
    return (
        <div>
             <Form.Label name={name}>{label}</Form.Label>
            <Form.Control name={name} value={value} onChange={onChange} label={label} />
        </div>
    );
};

export default Input;
