import { useEffect } from "react"
import "./App.css"
import { observable, autorun } from "mobx"

const a = observable({
    name: "Ivan Fan",
    income: 3,
    debit: 2
})

function App() {

    useEffect(() => {
        autorun(() => {
            console.log("a", a.income)
        })

    }, [])

    return (
        <div className="App">
            <button onClick={() => {
                a.income++
            }}>+
            </button>

            <div>
                {a.income}
            </div>

            <button onClick={() => {
                a.income--
            }}>-
            </button>
        </div>
    )
}

export default App
