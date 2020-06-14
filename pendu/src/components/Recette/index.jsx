import React, { useEffect, useState } from "react";

const Recette = () => {
  //State
  const [recette, setRecette] = useState(0);
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [link, setLink] = useState("");

    useEffect(() => {
        console.log("Creation d'une nouvelle recette");
        const URL = `https://www.themealdb.com/api/json/v1/1/random.php`;
        fetch(URL)
        .then((response) => response.json())
        .then((response) => {
            setTitle(response.meals[0].strMeal)
            setImgUrl(response.meals[0].strMealThumb)
            setLink(response.meals[0].strSource)
        })
        .catch((error) => console.error(error));
    }, [recette]);

  return (
   <div>
       <h1>Une recette aléatoire ?</h1>
       <button onClick={() =>setRecette(recette+1)}>Voir une nouvelle recette</button>
       <h2>{title}</h2>
       <img src={imgUrl} style={{width:100}} alt="recette"></img>
       <a href={link}>Lien vers la recette</a>
   </div>
  );
};

export default Recette;