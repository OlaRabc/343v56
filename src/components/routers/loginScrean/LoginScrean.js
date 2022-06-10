import './LoginScrean.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
function LoginScrean({
    onLoginPatient,
    onLoginDoctor
}) {
    const [login, setLogin] = useState("")
    return (
        <div className="col-12 col-md-6 login-screan">
            <form >
                <div className="mt-2">
                    <label >Login</label>
                    <input type="email" className="mt-2 form-control " id="exampleFormControlInput1" placeholder="name@example.pl"
                        value={login} onChange={e => { setLogin(e.target.value); }}

                    />
                </div>

                <div className="mt-2">
                    <label>Hasło</label>
                    <input type="password" className="mt-2 form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="button" className="btn btn-secondary col-12 col-md-5 mt-4 " onClick={() => console.log("notNow 1")}>Zresetuj hasło</button>
                { /*<Link to="patient" >*/}
                <button
                    type="button"
                    className="btn btn-primary col-12 col-md-5 offset-md-2 mt-4"
                    onClick={() => {
                        if (login === "p") onLoginPatient();
                        if (login === "d") onLoginDoctor();
                    }}>
                    Zaloguj
                </button>
                {/*</Link>*/}
                <button type="button" className="btn btn-success col-12 mb-3  mt-4 " onClick={() => console.log("notNow 3")}>Zarejestruj się</button>
            </form>
        </div>
    );
}

export default LoginScrean;
