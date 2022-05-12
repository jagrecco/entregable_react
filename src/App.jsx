
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import {BrowserRouter} from "react-router-dom"
import {Routes, Route} from "react-router-dom"
import MiContexto from "./components/Contexto";

import { FirebaseApp } from "firebase/app";


const App=() => {
    return (

    <BrowserRouter>
        <MiContexto>
            <Header/>
            <Main/>
            <Footer/>
        </MiContexto>
    </BrowserRouter>
        
        ) 
        
}

export default App;