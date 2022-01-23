import React from 'react'
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";
import "./input.css"
export const Inputer = ({input,setInput,findweather}) => {

    const handleChange = (event) =>{
        setInput(event.target.value)
    };
    const handleClick=(event) =>{
        event.preventDefault();
        findweather()
    }
    console.log(input);
    return (
        <div className='inputBox'>
            <div className='inputBox_field'>
                <h1> GOOGLE Weather App</h1>
                <p> Powered by</p>
                <img src='https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif'
                alt='logo'
                />
                <form>
                <Input placeholder="Enter the city Name" onChange={handleChange} value={input}/>
                <br/>
                <Button variant ="contained" color="primary" type ="submit" onClick ={handleClick} > Search</Button>
                </form>
                
            </div>
            
        </div>
    )
}
   export default Inputer;