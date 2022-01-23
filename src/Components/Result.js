import { Button } from '@material-ui/core';
import React from 'react';
import "./Results.css";

export const Result = ({temp,description,icon,setTemp}) => {
    return (
        <div className='result'>
            <div className='result_box'>
                <h1>Temp :{temp} </h1>
                <p>Desc:{description} </p>
                <img src={icon} alt='logo'/><br/>
                <Button variant='contained' color="default" onClick={()=> {setTemp("");
                  }} >
                    Back
                </Button>
            </div>
            
        </div>
    )
}
