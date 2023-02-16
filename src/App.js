import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {

  const [joke ,setJoke] = useState('');
  const [punchline,setPunchline] = useState("");

  const options = {
    method: 'GET',
    url: 'https://dad-jokes.p.rapidapi.com/random/joke',
    headers: {
      'X-RapidAPI-Key': 'd2522839b2msh4ace1a56b684154p16965fjsnb763b8049e28',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
  };

    const getjoke = () => {
         axios
            .request(options)
            .then((res) => {
             
             setJoke(res.data.body[0].setup)

             setTimeout(() => {
              setPunchline(res.data.body[0].punchline)
             },9000);

             setPunchline("");
            })
            .catch((err) => console.log(err));
    }

    // useEffect(() => {
    //   getjoke()
    // }, [])
    

  return (
    <div className="App">
      <div className='container'>
          <h1> Press Button for new Joke</h1>
          <h1> And Wait for The puuchline</h1>
          <div className='joke'>
             <h2>{joke}</h2>
             <h2>{punchline}</h2>
          </div>
          <button onClick={getjoke} className="btn">new joke</button>
      </div>
    </div>
  );
}

export default App;
