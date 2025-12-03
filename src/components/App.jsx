import "../scss/App.scss";
import Header from "./Header"
import CrewMembers from "./CrewMembers";
import Footer from "./Footer";  


function App() {
    return (

        <>
        <Header />
        <main className="body">
            <h1>cosas allincrewnisticas</h1>
            
         <CrewMembers />   

        </main>
        <Footer />
        </>
    )
}

export default App