import { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }
    //test
    return (
        <form onSubmit={handleSubmit}>
            <label> Benutzername:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <br></br>
            <label> Vorname, Name:
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </label>
            <br></br>
            <label> Email Adresse:
                <input
                    type="text"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                />
            </label>
            <br></br>
            <input type="submit" />
        </form>
    )
}

export default MyForm;