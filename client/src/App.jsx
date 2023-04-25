import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const onTextChange = (event) => {
        const { value } = event.target;
        setName(value);
    };

    const onGreet = () => {
        const url = "http://localhost:4000/hello";
        const payload = {
            name,
        };
        axios.post(url, payload).then((response) => {
            if (response && response.data) {
                setMessage(response.data.message);
            }
        });
    };

    return (
        <div>
            <h1>Prasad's App</h1>

            <div className="text-wrap">
                <input type="text" onChange={onTextChange} />
            </div>
            <div>
                <button onClick={onGreet}>Greet</button>
            </div>

            <div className="greet-wrap">{message}</div>
        </div>
    );
};

export default App;
