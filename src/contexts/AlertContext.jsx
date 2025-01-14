import { createContext, useContext, useState } from "react";

const AlertContext = createContext();  //creo il Context e gli do il nome AlertContext

// Creo un Provider (customizzato per fornire i dati)
// Per creare un Provider dobbiamo passare i children ai componenti figli (i componenti che consumeranno i dati che gli passeremo):
const AlertProvider = ({ children }) => {
    // Stato iniziale del messaggio di alert:
    const initialData = { type: "", message: "" };
    // con cui ci inizializzo una variabile di stato:
    const [alertData, setAlertData] = useState(initialData);

    /* Passo sia la variabile di stato alertData che la sua funzione per settarlo: */
    return (
        < AlertContext.Provider value={{ alertData, setAlertData }}>
            {children}
        </AlertContext.Provider>
    )
}

// Creo una hook customizzato (per consumare dati)
function useAlertContext() {
    // Gli hook personalizzati utilizzano altri hook esistenti e ritornano un nuovo hook
    const context = useContext(AlertContext);
    // In questo caso ritorno l'AlertContext:
    return context;
}

export { AlertProvider, useAlertContext };