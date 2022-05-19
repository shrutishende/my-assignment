import React, { useState } from "react";
import "./Task2.css";

const Task2 = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");

    const [data, setData] = useState([]);

    const changeFirst = (event) => {
        setFirst(event.target.value);
    };

    const changeLast = (event) => {
        setLast(event.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const newData = { first, last };

        if (first && last) {
            setData((ls) => [...ls, newData]);
            setFirst("");
            setLast("");
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="input">
                    <form onSubmit={submitHandler}>
                        <label>First Name</label>
                        <input
                            name="first"
                            type="text"
                            value={first}
                            onChange={changeFirst}
                            required
                        />
                        <label> Last Name</label>
                        <input
                            name="last"
                            type="text"
                            value={last}
                            onChange={changeLast}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>

                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th> <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((index) => {
                                return (
                                    <tr>
                                        <td>{index.first}</td>
                                        <td>{index.last}</td>{" "}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Task2;
