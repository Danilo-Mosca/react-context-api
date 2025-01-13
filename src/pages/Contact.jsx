import { useContext } from "react";     // importo il hook useContext per utilizzare il contesto GlobalContext
import { GlobalContext } from "../contexts/GlobalContext";  //Importo il contesto (context) GlobalContext che ho creato nel componente GLobalContext.jsx

export default function Contact() {
    // Utilizzo l'hook useContext passandogli il GlobalContext così da recuperare i dati che sono nella prop value del Provider
    const { tagList } = useContext(GlobalContext);
    
    return (
        <>
        <h1>Contatti</h1>
            <h3>Lista dei tag recuperati tramite la gestione dello stato globale di Context API:</h3>
            <ul>
                {/* Stampo a schermo i dati recuperati tramite la Context API   */}
                {tagList.map((tag) => (
                    <li key={tag.id}>{tag.title}</li>
                ))}
            </ul>
        </>
    );
}