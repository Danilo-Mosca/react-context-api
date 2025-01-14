import { PostsPage } from "./pages/PostsPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Importo axios
import axios from "axios";
//Api url per axios
const apiUrl = import.meta.env.VITE_API_URL;

import { GlobalContext } from "./contexts/GlobalContext"; //Importo il contesto (context) GlobalContext che ho creato nel componente GLobalContext.jsx
import { AlertProvider } from "./contexts/AlertContext";   // Importo AlertContext
import DefaultLayout from "./pages/DefaultLayout";
import Contact from "./pages/Contact";
import ChiSiamo from "./pages/ChiSiamo";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddPostPage from "./pages/AddPostPage";

function App() {
  // Variabile di stato contenente la lista dei tags (che all'avvio inizializzo con un array vuoto)
  const [tagList, setTagList] = useState([]);
  // Variabile di stato contenente messaggio di alert
  const [alert, setAlert] = useState({ type: "", message: "" });

  // Appena entro nel componente, grazie all'hook useEffect, richiamo la funzione getTags che andrà a riempire la lista degli ingredienti con
  // i valori prelevati con axios tramite API dal models del backend
  useEffect(() => {
    getTags();
  }, []);

  // Funzione che riempie tramite urlAPI chiamata con axios la variabile di stato tagList con tutti gli ingredienti
  function getTags() {
    axios.get(apiUrl + "/tags")
      .then((res) => {
        setTagList(res.data.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        // Istruzioni di finally
      });
  }

  return (
    // Assegno come valore del Context la variabile di stato tagList che sarà disponibile a tutti i componenti che la richiederanno,
    // importando la context GlobalContext che ho creato, assegnandogli la proprietà Provider, che wrappa tutti i componenti al suo interno
    <GlobalContext.Provider value={{ tagList }}>
      {/* Importo il Provider personalizzato AlertProvider presente in AlertCOntext.jsx */}
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={HomePage} />
              <Route path="/posts">
                <Route index Component={PostsPage} />
                <Route path=":id" Component={PostPage}></Route>
                <Route path="create" Component={AddPostPage} />
              </Route>
              <Route path="/chi-siamo" Component={ChiSiamo} />
              <Route path="/contact" Component={Contact} />
              {/* Se inserisco l'URL /articoli: "http://localhost:5173/articoli" con Navigate reindirizzo alla rotta /post: "http://localhost:5173/posts" */}
              <Route path="articoli" element={<Navigate to="/posts" />} />
            </Route>
            {/* Rotta per le pagine non trovate: inserendo path="*" */}
            <Route path="*" Component={NotFoundPage} />
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </GlobalContext.Provider>
  );
}

export default App
