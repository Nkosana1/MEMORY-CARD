import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";

const cardValues = ['A','B','C','D','E','F','G','H','A','B','C','D','E','F','G','H'];




function App() {
  

  return (
    <div className="app">
      <GameHeader score={3} moves={10}/>

      <div className="cards-grid">
        {cardValues.map((card, index) => (
          <Card key={`${card}-${index}`} card={card} />
        ))}
      </div>

    </div>
  );
    
  
}


export default App
