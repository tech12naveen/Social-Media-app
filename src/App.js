import React,{ useState } from "react";
import './App.css';
import Inputer from './Components/input';
import axios from "axios";
import { Result } from "./Components/Result";

function App() {
  const [input, setInput] = useState("");
  const [temp, setTemp]= useState("");
  const [description,setDescription ]  =useState("");
  const[icon,setIcon]= useState("");
   
  const findweather = async()=>{
    const apiKey ="b9f546be93845801d39c478bfc000082";
    const unit ="metric";
    const url ="https://api.openweathermap.org/data/2.5/weather?q=" +
      input +
      "&appid=" +
      apiKey+
      "&units="+
      unit;
      const response = await axios.get(url);
      console.log(response);
      const temp = await response.data.main.temp;
      const weatherDescription =await response.data.weather[0].description;
      const icon =await response.data.weather[0].icon;
      const imageURL ="https://openweathermap.org/img/wn/" +icon + "@2x.png";
      setTemp(temp);
      setDescription(weatherDescription);
      setIcon(imageURL);
      setInput("");
      console.log(temp,weatherDescription,icon,imageURL); 
  };
  
  return (
    <div className="App">
      {temp === "" ? (
      <Inputer input={input} setInput={setInput} findweather={findweather} />):

     ( <Result temp ={temp} description={description} icon ={icon} setTemp={setTemp} />
     )}
    </div>
  );
}

export default App;
