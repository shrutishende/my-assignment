import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Task2 from "./components/Task2";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/task2" element={<Task2 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
