import "../scss/App.scss";
import Header from "./Header"
import Who from "./Who"
import Footer from "./Footer";  


function App() {
    return (

        <>
        <Header />
        <main className="body">
            <h1>cosas allincrewnisticas</h1>
            <Who />
            

        </main>
        <Footer />
        </>
    )
}

export default App