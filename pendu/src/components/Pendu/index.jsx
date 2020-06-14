import React, { useEffect, useState } from 'react';
import Display from './Display';

const Pendu = () => {
  // State
  const [life, setLife] = useState(6);
  const [word, setWord] = useState('');
  const [hideWord, setHideWord] = useState([]);
  const [guess, setGuess] = useState('');
  const [game, setGame] = useState(false);
  const [status, setStatus] = useState('');
  const [usedLetters, setUsedLetters] = useState('');

  useEffect(() => {
    console.log("Création d'une partie");
    const URL = 'https://random-word-api.herokuapp.com/word?number=1';
    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        setWord((response[0]));
        setLife(6);
        const array = [];
        for (let i = 0; i < response[0].length; i++) {
          array.push('_ ');
        }
        setHideWord(array);
      })
      .catch((error) => console.error(error));
  }, [game]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.firstChild.value = '';
    if(guess.length>1){
        setStatus("Tu peux entrer 1 seul caractère")
    }else{
        console.log(word);
        const goodLetter = [];
        for (let i = 0; i < word.length; i++) {
        if (guess === word[i])goodLetter.push(i);
        }
        if (goodLetter.length < 1) {
        setUsedLetters( usedLetters => [...usedLetters, guess] )
        setLife(life - 1);
        setStatus(`Pas de ${guess} dans le mot dommage, tu perds une vie !`);
        } else {
        setStatus(`Bravo tu as trouvé la lettre ${guess}`);
        const array = hideWord;
        for (let i = 0; i < goodLetter.length; i++) {
            array[goodLetter[i]] = guess;
        }
        setHideWord(array);
        }
        if (life < 2) {
        setStatus(`Tu as perdu ! Le mot à trouver était ${word}`);
        setGame(false);
        } else if (!hideWord.includes('_ ')) {
        setStatus('Bravo tu as gagné!');
        setGame(false);
        }
    }
  };
  const handleInput = (e) => {
    setGuess(e.target.value);
  };
  return (
    <div>
      <h1>Jeu du Pendu</h1>
        {game && <Display hideWord={hideWord} usedLetters={usedLetters} life={life} />}
      <p>{status}</p>
      <form onSubmit={handleSubmit}>
        {game && <input type="text" onChange={handleInput} />}
      </form>
      <br />
      <button onClick={() => setGame(!game)}>Nouvelle partie</button>
    </div>
  );
};

export default Pendu;
