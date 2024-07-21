import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import albireo from "./assets/albireo.png";
import algol from "./assets/algol.png";
import alnitak from "./assets/alnitak.png";
import alpheratz from "./assets/alpheratz.png";
import altair from "./assets/altair.png";
import andromeda from "./assets/andromeda.png";
import antares from "./assets/antares.png";
import aquila from "./assets/aquila.png";
import arcturus from "./assets/arcturus.png";
import capella from "./assets/capella.png";
import cassiopeia from "./assets/cassiopeia.png";
import cepheus from "./assets/cepheus.png";
import cygnus from "./assets/cygnus.png";
import delphinus from "./assets/delphinus.png";
import deneb from "./assets/deneb.png";
import draco from "./assets/draco.png";
import enif from "./assets/enif.png";
import hercules from "./assets/hercules.png";
import lyra from "./assets/lyra.png";
import m13 from "./assets/m13.png";
import mirach from "./assets/mirach.png";
import pegasus from "./assets/pegasus.png";
import perseus from "./assets/perseus.png";
import pleiades from "./assets/pleiades.png";
import polaris from "./assets/polaris.png";
import sagitta from "./assets/sagitta.png";
import sagittarius from "./assets/sagittarius.png";
import scorpius from "./assets/scorpius.png";
import vega from "./assets/vega.png";
import vulpecula from "./assets/vulpecula.png";


function App() {
  const [count, setCount] = useState(0)
  const [objectnum, setObjectnum] = useState(0)
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");

  let allobjects = [
    {
        "name": "Jupiter",
        "hint1": "Largest planet in the solar system",
        "hint2": "Has a Great Red Spot, a giant storm",
        "hint3": "Visible to the naked eye, often very bright"
    },
    {
        "name": "Big Dipper",
        "hint1": "Part of the Ursa Major constellation",
        "hint2": "Used to locate Polaris, the North Star",
        "hint3": "Consists of seven bright stars"
    },
    {
        "name": "Polaris",
        "hint1": "Also known as the North Star",
        "hint2": "Located in the constellation Ursa Minor",
        "hint3": "Used for navigation as it remains nearly stationary in the sky"
    },
    {
        "name": "Pleiades",
        "hint1": "Also known as the Seven Sisters",
        "hint2": "An open star cluster in the constellation Taurus",
        "hint3": "Visible to the naked eye as a small, misty patch"
    },
    {
        "name": "Sirius",
        "hint1": "Brightest star in the night sky",
        "hint2": "Located in the constellation Canis Major",
        "hint3": "Twinkles brightly due to its brightness and low altitude in the sky"
    },
    {
        "name": "Orion's Belt",
        "hint1": "Three aligned stars in the constellation Orion",
        "hint2": "Easily recognizable and used to locate other stars",
        "hint3": "Part of the larger Orion constellation"
    },
    {
        "name": "Andromeda Galaxy",
        "hint1": "Nearest spiral galaxy to the Milky Way",
        "hint2": "Visible to the naked eye under dark skies",
        "hint3": "Part of the Andromeda constellation"
    },
    {
        "name": "Betelgeuse",
        "hint1": "Bright red supergiant star",
        "hint2": "Located in the constellation Orion",
        "hint3": "One of the largest stars visible to the naked eye"
    },
    {
        "name": "Venus",
        "hint1": "Second planet from the Sun",
        "hint2": "Often visible as the Morning or Evening Star",
        "hint3": "Brightest planet in the night sky"
    },
    {
        "name": "Cassiopeia",
        "hint1": "W-shaped constellation",
        "hint2": "Located opposite the Big Dipper in the sky",
        "hint3": "Associated with the mythological queen Cassiopeia"
    },
    {
        "name": "Aldebaran",
        "hint1": "Brightest star in the constellation Taurus",
        "hint2": "A red giant star",
        "hint3": "Part of the Hyades star cluster"
    },
    {
        "name": "Capella",
        "hint1": "Brightest star in the constellation Auriga",
        "hint2": "Actually a binary star system",
        "hint3": "One of the brightest stars in the northern sky"
    },
    {
        "name": "Antares",
        "hint1": "Bright red supergiant star",
        "hint2": "Located in the constellation Scorpius",
        "hint3": "Often called the heart of the Scorpion"
    },
    {
        "name": "Altair",
        "hint1": "Brightest star in the constellation Aquila",
        "hint2": "Part of the Summer Triangle asterism",
        "hint3": "Relatively close to Earth"
    },
    {
        "name": "Fomalhaut",
        "hint1": "Brightest star in the constellation Piscis Austrinus",
        "hint2": "Often called the Autumn Star",
        "hint3": "One of the loneliest bright stars, with few nearby stars visible"
    }
]


  const [showhint1, sethint1] = useState(false)
  const [showhint2, sethint2] = useState(false)
  const [showhint3, sethint3] = useState(false)


  function generateRandomObject() {
    setObjectnum(Math.floor(Math.random() * 15))
    sethint1(false)
    sethint2(false)
    sethint3(false)

  }



  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem("players")) || [];
    setPlayers(storedPlayers);
  }, []);

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const onFieldChange = (e) => {
    setName(e.target.value);
  };

  const generatePlayerName = () => {
    setPlayers([...players, { name, score: 0 }]);
    setName("");
  };

  const updatePlayerScore = (index, delta) => {
    const updatedPlayers = players.map((player, i) => {
      if (i === index) {
        return { ...player, score: player.score + delta };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };

  const eraseName = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
  };



  function generateImages() {
    if (allobjects[objectnum].name === "Albireo") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={albireo} alt="celestial image" />;
    if (allobjects[objectnum].name === "Algol") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={algol} alt="celestial image" />;
    if (allobjects[objectnum].name === "Alnitak") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={alnitak} alt="celestial image" />;
    if (allobjects[objectnum].name === "Alpheratz") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={alpheratz} alt="celestial image" />;
    if (allobjects[objectnum].name === "Altair") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={altair} alt="celestial image" />;
    if (allobjects[objectnum].name === "Andromeda") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={andromeda} alt="celestial image" />;
    if (allobjects[objectnum].name === "Antares") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={antares} alt="celestial image" />;
    if (allobjects[objectnum].name === "Aquila") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={aquila} alt="celestial image" />;
    if (allobjects[objectnum].name === "Arcturus") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={arcturus} alt="celestial image" />;
    if (allobjects[objectnum].name === "Capella") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={capella} alt="celestial image" />;
    if (allobjects[objectnum].name === "Cassiopeia") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={cassiopeia} alt="celestial image" />;
    if (allobjects[objectnum].name === "Cepheus") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={cepheus} alt="celestial image" />;
    if (allobjects[objectnum].name === "Cygnus") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={cygnus} alt="celestial image" />;
    if (allobjects[objectnum].name === "Delphinus") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={delphinus} alt="celestial image" />;
    if (allobjects[objectnum].name === "Deneb") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={deneb} alt="celestial image" />;
    if (allobjects[objectnum].name === "Draco") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={draco} alt="celestial image" />;
    if (allobjects[objectnum].name === "Enif") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={enif} alt="celestial image" />;
    if (allobjects[objectnum].name === "Hercules") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={hercules} alt="celestial image" />;
    if (allobjects[objectnum].name === "Lyra") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={lyra} alt="celestial image" />;
    if (allobjects[objectnum].name === "M13") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={m13} alt="celestial image" />;
    if (allobjects[objectnum].name === "Mirach") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={mirach} alt="celestial image" />;
    if (allobjects[objectnum].name === "Pegasus") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={pegasus} alt="celestial image" />;
    if (allobjects[objectnum].name === "Perseus") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={perseus} alt="celestial image" />;
    if (allobjects[objectnum].name === "Pleiades") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={allobjects[objectnum].image} alt="celestial image" />;
    if (allobjects[objectnum].name === "Polaris") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={polaris} alt="celestial image" />;
    if (allobjects[objectnum].name === "Sagitta") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={sagitta} alt="celestial image" />;
    if (allobjects[objectnum].name === "Sagittarius") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={sagittarius} alt="celestial image" />;
    if (allobjects[objectnum].name === "Scorpius") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={scorpius} alt="celestial image" />;
    if (allobjects[objectnum].name === "Vega") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={vega} alt="celestial image" />;
    if (allobjects[objectnum].name === "Vulpecula") return <img style={{ width: "300px", border: "solid", borderColor: "red" }} src={vulpecula} alt="celestial image" />;

  }


  return (
    <div className='apphome'>
      <div>
        <button onClick={generateRandomObject}>Generate New Object</button>
        <br></br>
        <h1>{allobjects[objectnum].name}</h1>
      </div>

      <br></br>
      <button onClick={() => { sethint1(!showhint1) }}>Hint 1</button>
      <br></br>
      {showhint1 ? allobjects[objectnum].hint1 : null}
      <br></br>
      <button onClick={() => { sethint2(!showhint2) }}>Hint 2</button>
      <br></br>
      {showhint2 ? allobjects[objectnum].hint2 : null}
      <br></br>
      <button onClick={() => { sethint3(!showhint3) }}>Hint 3</button>
      <br></br>
      
      {showhint3 ? allobjects[objectnum].hint3 : null}

      {/* {showhint3 ?
        generateImages()
        : null} */}
      <br></br>
      <label htmlFor="name">Name of Player:</label>
      <input onChange={onFieldChange} value={name} type="text" id="name" name="name" />
      <button onClick={generatePlayerName}>Add Player</button>
      <br></br>
      <table>

        <thead>
          <tr>
            <th scope="col">Person</th>
            <th scope="col">Points accumulated</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <th scope="row">{player.name}</th>
              <td>{player.score}</td>
              <td>
                <button onClick={() => updatePlayerScore(index, 1)}>+</button>
                <button onClick={() => updatePlayerScore(index, -1)}>-</button>
                <button onClick={() => eraseName(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App
