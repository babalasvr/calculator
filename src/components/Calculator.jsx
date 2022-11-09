import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
    const [ num, setNum ] = useState(0)
    const [ numCalca, setNumCalca ] = useState(0)

    function inputNum(e) {
        if( num === 0 ){
            setNum(e.target.textContent)
        }else{
            setNum(num + e.target.textContent)
        }
        
    }
    

    function clearNum() {
        setNum(0)
    }

    function percent() {
        setNum(num / 100)
    }

    function changeSign() {
        if(num > 0)
        {
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }

    function calculate() {
        console.log('calculou');
    }

    function division(e) {
        setNumCalc(e.target.textContent)
        console.log(numCalc);
        
    }

  return (
    <Box m={5}>
    <Container maxWidth='xs'>
        <div className='wrapper'>
            <Box m={10}/>
            <h1>{num}</h1>
            <button onClick={clearNum}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={percent}>%</button>
            <button className='orange' onClick={division}>/</button>
            <button className='gray' onClick={inputNum}>7</button>
            <button className='gray' onClick={inputNum}>8</button>
            <button className='gray' onClick={inputNum}>9</button>
            <button className='orange'>X</button>
            <button className='gray' onClick={inputNum}>4</button>
            <button className='gray' onClick={inputNum}>5</button>
            <button className='gray' onClick={inputNum}>6</button>
            <button className='orange'>-</button>
            <button className='gray' onClick={inputNum}>1</button>
            <button className='gray' onClick={inputNum}>2</button>
            <button className='gray' onClick={inputNum}>3</button>
            <button className='orange'>+</button>
            <button className='gray' id='zero' onClick={inputNum}>0</button>
            <button className='gray'>,</button>
            <button className='orange' onClick={calculate}>=</button>
        </div>
    </Container>
    </Box>
  )
}
