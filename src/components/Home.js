import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

const Home = () => {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [total, setTotal] = useState("");

    function addHandler() {
        setTotal(number1 + number2);
    }

    function subtractHandler() {
        setTotal(number1 - number2);
    }

    function divideHandler() {
        setTotal(number1 / number2);
    }

    function multiplyHandler() {
        setTotal(number1 * number2);
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Calculate Two Numbers</h1>
                <div className="input">
                    <div className="num-1">
                        <label>Number 1</label>
                        <input
                            type="number"
                            value={number1}
                            onChange={(e) => setNumber1(+e.target.value)}
                        />
                    </div>

                    <div className="num-2">
                        <label>Number 2</label>
                        <input
                            type="number"
                            value={number2}
                            onChange={(e) => setNumber2(+e.target.value)}
                        />
                    </div>
                    <button onClick={addHandler}>Add</button>
                    <button onClick={subtractHandler}>Subtract</button>
                    <button onClick={divideHandler}>Divide</button>
                    <button onClick={multiplyHandler}>Multiply</button>
                </div>

                <div className="result">
                    RESULT
                    <h2>{total}</h2>
                </div>
            </div>

            <NavLink to="/task2">
                <button>Go To Next Page</button>
            </NavLink>
        </div>
    );
};

export default Home;
