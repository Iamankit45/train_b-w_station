import './App.css';
import BookTrainTicket from "./components/Railway/BookTrainTicket/BookTrainTicket.js";
import TrainList from "./components/Railway/Trains/TrainList.js";
import { Routes, Route,} from "react-router-dom";



function App() {
  return (
    <div className="App">
      {/* <BookTrainTicket /> */}
      <Routes>
            <Route path='/railways' element={<BookTrainTicket />}/>
            <Route path='/train-list' element={<TrainList/>}/>
       </Routes>
      
    </div>
  );
}

export default App;
