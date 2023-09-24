import { useState } from "react";
import './Button.css';

export default function Button() {
  
  //Symbols
  const symbols = {'sharp': '\u266F', 'flat': '\u266D'}

  //Notes
  const notesBank = [`C`, `C${symbols.sharp}`, `D${symbols.flat}`, `D`, `D${symbols.sharp}`, `E${symbols.flat}`, `E`, `F`, `F${symbols.sharp}`, `G${symbols.flat}`, `G`, `G${symbols.sharp}`, `A${symbols.flat}`, `A`, `A${symbols.sharp}`, `B${symbols.flat}`, `B`]

  //Qualities
  // Major, minor, diminished, augmented
  const qualitiesBank = ["", "m", "dim", "aug"];

  //Inversion
  const inversionsBank = ["root inv", "1st inv", "2nd inv"]

  const [note, setNote] = useState(getRandomElement(notesBank));
  const [quality, setQuality] = useState(getRandomElement(qualitiesBank));
  const [inversion, setInversion] = useState(getRandomElement(inversionsBank));

  const generateChord = () => {
    setNote(getRandomElement(notesBank));
    setQuality(getRandomElement(qualitiesBank));
    setInversion(getRandomElement(inversionsBank));
  }

  function getRandomElement<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const handleButtonClick = () => {
    generateChord()
  };

  return (
  <>
  <p>{note}{quality} {inversion}</p>
  <div className="button" onClick={handleButtonClick}>
    Change it
  </div>
  </>
  );
  }