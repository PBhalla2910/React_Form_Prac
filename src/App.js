import Hcdlogo from "./img/HCD_logo.png";
import background from "./img/bg.jpg";
import './App.css';
import MyForm from "./components/form"
function App() {
  return (
    <div className="App">
             <header className="App-header-div">
      <img className="Hcdlogo" src={Hcdlogo} alt="Hcd" />
      <p className="logo_heading">California Housing deparment</p>
      </header>
           <div className="houseimg_body" style={{ backgroundImage: `url(${background})`,opacity:0.7,height:"550px"}}>
       <p>Login</p>
       <MyForm/>
      </div>
      <footer>Copyright © 2020 State of California</footer>
    </div>
  );
}

export default App;
