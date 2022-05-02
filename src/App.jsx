
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App=() => {
    return (
        <>
            <Header/>
            <ItemListContainer greeting="¡Bienvenidos a Oleo!"/>
            <ItemDetailContainer/>
            <Main/>
            <Footer/>
        </>
        
        ) 
        
}

export default App;