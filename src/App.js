import {useState, useReducer, useEffect} from 'react';
import img from "./images.js"
import "./App.css"

function App() {
  const [state, setState] = useReducer((state, newState) => ({...state, ...newState}),
    {
      selections: [], 
      images: [
        {
          name: "img1",
          flipped: false,
          locked: false
        },
        {
          name: "img2",
          flipped: false,
          locked: false
        },
        {
          name: "img3",
          flipped: false,
          locked: false
        },
        {
          name: "img4",
          flipped: false,
          locked: false
        },
        {
          name: "img5",
          flipped: false,
          locked: false
        },
        {
          name: "img6",
          flipped: false,
          locked: false
        },
        {
          name: "img7",
          flipped: false,
          locked: false
        },
        {
          name: "img8",
          flipped: false,
          locked: false
        },
        {
          name: "img9",
          flipped: false,
          locked: false
        },
        {
          name: "img10",
          flipped: false,
          locked: false
        },
        {
          name: "img11",
          flipped: false,
          locked: false
        },
        {
          name: "img12",
          flipped: false,
          locked: false
        },
        {
          name: "img13",
          flipped: false,
          locked: false
        },
        {
          name: "img14",
          flipped: false,
          locked: false
        },
        {
          name: "img15",
          flipped: false,
          locked: false
        },
        {
          name: "img16",
          flipped: false,
          locked: false
        },
        {
          name: "img17",
          flipped: false,
          locked: false
        },
        {
          name: "img18",
          flipped: false,
          locked: false
        }
        ,
        {
          name: "img19",
          flipped: false,
          locked: false
        },
        {
          name: "img20",
          flipped: false,
          locked: false
        }
      ]
    }
  )

  useEffect(() => {
    if(state.selections.length === 2){
      validateSelection();
    }
  }, [state.selections]);

  const flipSquare = (div) => {
    if(!checkIfGameIsOver()){
      let tempState = [...state.images];
      if(!tempState[div].locked){
        if(tempState[div].flipped){
          tempState[div].flipped = false;
        } else {
          tempState[div].flipped = true;
        }
        if(!state.selections.includes(div)){
          setState({selections: [...state.selections, div], images: tempState});
        }
      }
    } else {
      console.log("GAME OVER!");
    }
  }

  const validateSelection = () => {
    let tempState = [...state.images];
    if(state.images[state.selections[0]].name === state.images[state.selections[1]].name){
      tempState[state.selections[0]].locked = true;
      tempState[state.selections[0]].flipped = true;
      tempState[state.selections[1]].locked = true;
      tempState[state.selections[1]].flipped = true;
      console.log("match found");
    } else {
      tempState[state.selections[1]].flipped = false;
      tempState[state.selections[0]].flipped = false;
    }
    setTimeout(() => setState({selections: [], images: tempState}), 500);
  }

  const checkIfGameIsOver = () => {
    let lockCount = 0;
    for(let i = 0; i < state.images.length; i++){
      if(state.images[i].locked === true) lockCount += 1;
    }
    if(lockCount === state.images.length) return true;
    else return false;
  }

  return (
    <div className="container">
      <div className="cardholder">
          {[...Array(state.images.length)].map((e, i) => 
          <div onClick={() => flipSquare(i)}
          className="temp" key={i}
          style={{backgroundImage: `url(${(state.images[i].flipped === false) ? img["bg"] : img[state.images[i].name]})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"}}>
        </div>)}
      </div>
    </div>
  );
}

export default App;