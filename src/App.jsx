import './App.css'
import Lottery from "./Lottery.jsx";
import "./Lottery.css"

function App() {

  return (
    <div>
     <Lottery n={3} winningSum={15}/>
     <h3>**If the sum of ticket numbers is equal to 15, its a win**</h3>
     </div>
  );
}

export default App;
