import Nav from "./nav" 
import Login from "./login"
import "./app.css"

function App() {
    return (
        <div className="App">
            <section>
                <h3>Log In</h3>
            </section>
            <Nav/>
            <Login/>
        </div>
    )
}

export default App;