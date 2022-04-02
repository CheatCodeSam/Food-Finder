import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import FoodCards from "./FoodCards"

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <div style={{ position: "relative", paddingTop: "10px" }}>
            <FoodCards />
        </div>
    </React.StrictMode>,
    document.getElementById("root")
)
