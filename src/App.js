// import { useState } from "react";


// function App() {
//  // state(etat, données)
//  const [compteur, setCompteur] = useState(1);


//  //comportement
//  const handleClick = () => {
//    setCompteur(compteur + 1);
//  };
//  //affichage(render)
//  return (
//    <div>
//      <h1>{compteur}</h1>
//      <button onClick={handleClick}>Incrementer</button>
//    </div>
//  );
// }
// export default App;


// import { useState } from "react";

// function App() {
//   //state(etat données)
//   const [fruits, setFruits] = useState([
//     { id: 1, nom: "Abricot" },
//     { id: 2, nom: "Banane" },
//     { id: 3, nom: "Mangue" }
//   ]);

//   //Comportement
//   const handleDelete = (id) => {
//     console.log(id);

//     //copie du state
//     const fruitsCopy = [...fruits];

//     //Manipuler mon state
//     const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

//     //Modification de mon state
//     setFruits(fruitsCopyUpdated);
//   };

//   //affichage(render)
//   return (
//     <div>
//       <h1>Liste de Fruits</h1>
//       <ul>
//         {fruits.map((fruit) => (
//           <li key={fruit.id}>
//             {fruit.nom}
//             <button onClick={() => handleDelete(fruit.id)}>x</button>
//           </li>
//         ))}
//       </ul>
   
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";

// function App() {
//   //state(etat données)
//   const [fruits, setFruits] = useState([
//     { id: 1, nom: "Abricot" },
//     { id: 2, nom: "Banane" },
//     { id: 3, nom: "Mangue" }
//   ]);

//   const [nouveauFruit, setNouveauFruit] = useState("");

//   // const inputRef = useRef();

//   //Comportement
//   const handleDelete = (id) => {};

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     //Copie du State
//     const fruitsCopy = [...fruits];

//     // Manipulation sur la copie du State
//     const id = new Date().getTime();
//     const nom = nouveauFruit;
//     fruitsCopy.push({ id, nom });

//     //Modifier le state avec le setter
//     setFruits(fruitsCopy);
//     setNouveauFruit("");
//   };

//   const handleChange = (event) => {
//     setNouveauFruit(event.target.value);
//   };

//   //affichage(render)
//   return (
//     <div>
//       <h1>Liste de Fruits</h1>
//       <ul>
//         {fruits.map((fruit) => (
//           <li key={fruit.id}>
//             {fruit.nom}
//             <button onClick={() => handleDelete(fruit.id)}>x</button>
//           </li>
//         ))}
//       </ul>
//       <form action="submit" onSubmit={handleSubmit}>
//         <input
//           value={nouveauFruit}
//           type="text"
//           placeholder="Ajouter un fruit... "
//           onChange={handleChange}
//         />
//         <button>Ajouter +</button>
//       </form>
//     </div>
//   );
// }
// export default App;

import { useState } from "react";
import Fruit from "./Components/Fruit";
import Form from "./Components/Form";


function App() {
  // state (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  // comportements
  const handleDelete = (id) => {
    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3. modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {
    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipulation sur la copie du state
    fruitsCopy.push(fruitAAjouter);

    //3. modifier le state avec le setter
    setFruits(fruitsCopy);
  };

  const afficherFruitPrefere = (fruitNom) => {
    alert(`J'aime trop ce fruit: ${fruitNom}`);
  };

  // affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onClick={() => afficherFruitPrefere(fruit.nom)}
            key={fruit.id}
          />
        ))}
      </ul>
      <Form handleAdd={handleAdd} />
    </div>
  );
}

export default App;

// Gestion du formulaire
// 1. création du formulaire
// 2. soumission du formulaire (onSubmit / handleSubmit)
// 3. collecte des données du formulaire
// 3a. méthode 1: documentGetElementById "React" (useRef)
// 3b. méthode 2: sync descendante / ascendante (onChange / handleChange)






