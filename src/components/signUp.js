import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const create = async (e) => {
        e.preventDefault();
        //debugger
        await axios
            .post(
                "http://localhost:8080/signup",
                {
                    name: name,
                    email: email,
                    password: password,

                },
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        Accept: "*",
                    },
                }
            ).then((res) => {
                let data = res.data;
                console.log(data);
                if (data) {
                    sessionStorage.setItem("user", JSON.stringify(data));
                    navigate("/")
                }
            });
    }

    return (
        <>
            <h2>signup Here</h2>
            <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={create} className="botton" type="button">SignUp</button>
        </>
    )
}