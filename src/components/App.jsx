import "../scss/App.scss";
import Header from "./Header"
import CrewMembers from "./CrewMembers";
import Footer from "./Footer";  
import Covers from "./Covers";


function App() {
    return (

        <>
        <Header />
        <main className="body">
            <h1>cosas allincrewnisticas</h1>

         <Covers />   
         <CrewMembers />   

        </main>
        <Footer />
        </>
    )
}

export default App