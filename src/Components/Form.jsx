import { useState } from "react";

export default function Form({handleAdd}){


  const [nouveauFruit, setNouveauFruit] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    //Copie du State
  

    // Manipulation sur la copie du State
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    // fruitsCopy.push(fruitAAjouter);

    //Modifier le state avec le setter
    // setFruits(fruitsCopy);
    handleAdd(fruitAAjouter)
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  return <div>
    <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit... "
          onChange={handleChange}
        />
        <button>Ajouter +</button>
      </form>
  </div>;
}