import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import { useState } from "react";
import Quiz from "./Component/Quiz";
import axios from "axios";
import Result from "./Component/Result";

function App() {
  const [name, setName] = useState("");
  const [ques, setQues] = useState();
  const [score, setScore] = useState(0);


const fetchQues = async(category, difficulty) =>{
const {data} = await axios.get(`https://opentdb.com/api.php?amount=10&${category && `category=${category}`}&${difficulty && `difficulty=${difficulty}`}&type=multiple`)

console.log(data);
setQues(data.results);

}
  

  return (
    <Router basename="Quizapp">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home name={name} setName={setName} fetchQues={fetchQues}/>} />
          <Route path="/Quiz" element={<Quiz name={name} ques={ques} score={score} setScore={setScore}/>} />
          <Route path="/result" element={<Result score={score} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
