import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [objectnum,setObjectnum]=useState(0)
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");

let allobjects = [
  {
      "name": "Cygnus",
      "hint1": "Look for a cross-shaped constellation flying along the Milky Way.",
      "hint2": "Its brightest star, Deneb, forms one corner of the Summer Triangle.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Cygnus_IAU.svg"

  },
  {
      "name": "Lyra",
      "hint1": "Look for a small parallelogram of stars near Vega, one of the brightest stars in the sky.",
      "hint2": "Vega is almost directly overhead in mid-summer evenings.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Lyra_IAU.svg"

  },
  {
      "name": "Aquila",
      "hint1": "Find Altair, the bright star flanked by two dimmer stars, forming a straight line.",
      "hint2": "Aquila lies along the Milky Way, below Cygnus.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Aquila_IAU.svg"

  },
  {
      "name": "Sagittarius",
      "hint1": "Look for the 'Teapot' asterism low in the southern sky.",
      "hint2": "This constellation points towards the center of the Milky Way.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/5/54/Sagittarius_IAU.svg"

  },
  {
      "name": "Scorpius",
      "hint1": "Look for a J-shaped pattern of stars with a bright red heart, Antares.",
      "hint2": "It's close to the horizon in the southern sky during summer evenings.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/38/Scorpius_IAU.svg"

  },
  {
      "name": "Hercules",
      "hint1": "Look for the 'Keystone,' a trapezoid of four stars.",
      "hint2": "It's situated between Vega in Lyra and Arcturus in Boötes.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Hercules_IAU.svg"


  },
  {
      "name": "Draco",
      "hint1": "Find the winding dragon between the Big and Little Dippers.",
      "hint2": "Its tail starts near the handle of the Big Dipper.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Draco_IAU.svg"

  },
  {
      "name": "Pegasus",
      "hint1": "Look for the Great Square, a large, almost perfect square of four stars.",
      "hint2": "It's rising in the eastern sky during late summer evenings.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pegasus_IAU.svg"

  },
  {
      "name": "Andromeda",
      "hint1": "Look for a line of stars extending from the upper left corner of the Great Square of Pegasus.",
      "hint2": "The Andromeda Galaxy lies near its second brightest star, Mirach.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Andromeda_IAU.svg"

  },
  {
      "name": "Cassiopeia",
      "hint1": "Look for the W or M-shaped constellation opposite the Big Dipper across Polaris.",
      "hint2": "It’s high in the northern sky in late summer.",        
      "image": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Cassiopeia_IAU.svg"


  },
  {
      "name": "Perseus",
      "hint1": "Find the bright star Algol, part of a chain of stars extending from Andromeda.",
      "hint2": "It’s near the Pleiades star cluster.",
      "image": "https://en.wikipedia.org/wiki/Perseus_%28constellation%29#/media/File:Perseus_IAU.svg"

  },
  {
      "name": "Cepheus",
      "hint1": "Look for a house-shaped constellation near Cassiopeia.",
      "hint2": "Its brightest star, Alderamin, is moderately bright and not far from Polaris.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/8/82/Cepheus_IAU.svg"

  },
  {
      "name": "Sagitta",
      "hint1": "Find a small arrow-shaped constellation near the Milky Way.",
      "hint2": "It's located between Aquila and Cygnus.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Sagitta_IAU.svg"

  },
  {
      "name": "Vulpecula",
      "hint1": "Look for a faint constellation near Sagitta.",
      "hint2": "The Dumbbell Nebula (M27) is located within this constellation.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/Vulpecula_IAU.svg"

  },
  {
      "name": "Delphinus",
      "hint1": "Look for a small diamond-shaped constellation resembling a dolphin.",
      "hint2": "It’s located near Aquila and Sagitta.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Delphinus_IAU.svg"

  },
  {
      "name": "Polaris (North Star)",
      "hint1": "Look for the end of the Little Dipper’s handle.",
      "hint2": "It’s almost directly north and doesn't move much in the sky.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/d/da/Ursa_Minor_constellation_map.svg"


  },
  {
      "name": "Vega",
      "hint1": "Look for the brightest star in the constellation Lyra.",
      "hint2": "It’s nearly overhead in the summer sky.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Lyra_constellation_map.svg" // Vega is the brightest star in Lyra

  },
  {
      "name": "Deneb",
      "hint1": "Look for the brightest star in Cygnus, forming one corner of the Summer Triangle.",
      "hint2": "It’s part of the Northern Cross asterism.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Cygnus_constellation_map.svg" // Deneb is the brightest star in Cygnus

  },
  {
      "name": "Altair",
      "hint1": "Look for the bright star flanked by two dimmer stars in Aquila.",
      "hint2": "It’s the southernmost star in the Summer Triangle.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Aquila_constellation_map.svg" // Altair is the brightest star in Aquila

  },
  {
      "name": "Arcturus",
      "hint1": "Follow the arc of the Big Dipper’s handle to find this bright star.",
      "hint2": "It’s the brightest star in the constellation Boötes.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Bo%C3%B6tes_IAU.svg" // Arcturus is the brightest star in Boötes

  },
  {
      "name": "Antares",
      "hint1": "Look for the red heart of the Scorpion, near the southern horizon.",
      "hint2": "It’s the brightest star in Scorpius.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Scorpius_constellation_map.svg" // Antares is the brightest star in Scorpius

  },
  {
      "name": "Capella",
      "hint1": "Look for the bright star in the constellation Auriga, visible early in the morning.",
      "hint2": "It’s near the constellation Perseus.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Auriga_constellation_map.svg" // Capella is the brightest star in Auriga

  },
  {
      "name": "Albireo",
      "hint1": "Look for the double star at the head of the Northern Cross in Cygnus.",
      "hint2": "It appears as one star to the naked eye but splits into two with a telescope.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Cygnus_constellation_map.svg" // Albireo is in Cygnus

  },
  {
      "name": "Alpheratz",
      "hint1": "Find the brightest star in Andromeda, forming a corner of the Great Square of Pegasus.",
      "hint2": "It’s the upper left star of the square.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Andromeda_constellation_map.svg" // Alpheratz is the brightest star in Andromeda

  },
  {
      "name": "Mirach",
      "hint1": "Look for a bright star in the Andromeda constellation.",
      "hint2": "It’s a key marker for finding the Andromeda Galaxy.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Andromeda_IAU.svg" // Mirach is in Andromeda

  },
  {
      "name": "Enif",
      "hint1": "Look for the brightest star in Pegasus, at the horse’s nose.",
      "hint2": "It’s near the Great Square of Pegasus.",
      "image": "https://en.wikipedia.org/wiki/Epsilon_Pegasi#/media/File:Pegasus_constellation_map.svg" // Enif is the brightest star in Pegasus

  },
  {
      "name": "Algol",
      "hint1": "Look for the bright star in Perseus known as the Demon Star.",
      "hint2": "It’s part of a noticeable 'V' shape of stars.",
      "image": "https://earthsky.org/upl/2021/09/Cassiopeia_Perseus_October-e1632268821102.jpg" // Algol is in Perseus

  },
  {
      "name": "Altinak",
      "hint1": "Look for the easternmost star in Orion's Belt, visible early in the morning.",
      "hint2": "It’s part of the distinctive line of three stars.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Ngc2024_2mass.jpg" // Altinak is in Orion

  },
  {
      "name": "Pleiades (Seven Sisters)",
      "hint1": "Look for a small, tight cluster of stars in Taurus, visible early in the morning.",
      "hint2": "It’s often mistaken for the Little Dipper due to its compact appearance.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg" // Pleiades star cluster
  },
  {
      "name": "Great Hercules Cluster (M13)",
      "hint1": "Look for a fuzzy spot in the Keystone asterism of Hercules.",
      "hint2": "It’s located between the stars Eta and Zeta Herculis.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Messier_13.jpg" // M13 in Hercules


  }
]

const [showhint1, sethint1]=useState(false)
const [showhint2, sethint2]=useState(false)
const [showhint3, sethint3]=useState(false)


function generateRandomObject(){
  setObjectnum(Math.floor(Math.random()*30))
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



  return (
    <div className='apphome'>
<div>
    <button onClick={generateRandomObject}>Generate New Object</button>
    <br></br>
   <h1>{allobjects[objectnum].name}</h1>
</div>

<br></br>
   <button onClick={()=>{sethint1(!showhint1)}}>Hint 1</button>
   <br></br>
{showhint1 ? allobjects[objectnum].hint1 : null}
<br></br>
<button onClick={()=>{sethint2(!showhint2)}}>Hint 2</button>
<br></br>
{showhint2 ? allobjects[objectnum].hint2 : null}
<br></br>
<br></br>
<button onClick={()=>{sethint3(!showhint3)}}>Hint 3 Image</button>
<br></br>
{showhint3 ? <img style={{width:"300px", border:"solid", borderColor:"red"}} src={allobjects[objectnum].image} alt="celestial image"/> : null}
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
