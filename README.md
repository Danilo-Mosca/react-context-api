# Esercizio di oggi: *React Context API*

```bash
# clono la cartella da github

npm create vite@latest

# alla domanda project-name inserisco . (dot)

npm install

# testo
npm run dev

# apro il .gitignore e aggiungo package-lock.json

 # installo gli altri pacchetti che mi servono
 #Esempio:
 npm install bootstrap
 npm install axios
# installo anche la libreria React Router che ci permette di mappare le rotte:
 npm install react-router-dom

# se voglio posso installare anche la libreria per le icone di Fontawesome installo i seguenti pacchetti:
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
# ed anche il React Component per le Font Awesome:
npm i --save @fortawesome/react-fontawesome@latest

 # cancello il contenuto di App.jsx e rimuovo gli import che non mi servono
 # cancello i file che non mi servono

 #se voglio importo bootstrap in main.jsx prima del mio css custom 
 import "bootstrap/dist/css/bootstrap.min.css";

 # comincio ad editare App.jsx


# add to rules in eslint
rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ..reactHooks.configs.recommended.rules,
      "react/prop-types": 0, 👈
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
```



```bash
Esercizio del 13/01/2024: repo: react-context-api
Esercizio di oggi: *React Context API*
*Consegna*
Sfruttiamo le Context API per rendere disponibile la lista dei post o dei tags in tutta la nostra app.
- Partiamo col definire la lista  all’interno di App.jsx
- Creiamo un file per definire il nostro Context ed esportiamolo
- Importiamo il Provider in App.jsx e wrappiamoci la nostra applicazione
- Facciamo in modo che i componenti  recuperino i dati dei post o dei tag consumando il Context.
Bonus
Aggiungere un AlertContext e un componente Alert, come visto oggi in classe
```