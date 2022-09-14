import React, { useState } from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    const inputChangeHandler = (event) => {
        const input = document.getElementById("input-tag");
        input.innerHTML = event.target.value;
    };

    const inputChangeHandler2 = (event) => {
        const enteredValue = event.target.value;
        
        if (event.key === 'Enter') { // 엔터키를 눌렀을 때
            props.onInput(enteredValue);
            event.target.value = ''; // 인풋값 초기화
        }
    };

    const inputClickHandler = (event) => {
        console.log('버튼 눌림');
        console.log(event);
        const input = document.getElementById("input-tag");
        console.log(input);
        const enteredValue = input.innerHTML;
        props.onInput(enteredValue);
        input.innerText = ''; 
    };

    return (
        <>
            {/* 알람 제목 */}
            <input className={classes[`${props.customStyle}`]} 
                    {...props.input} 
                    // onKeyDown={inputChangeHandler2}
                    onChange={inputClickHandler}
            />
            <input></input>
            
            <label htmlFor={props.input?.id}>{props.label}</label>
            <button onClick={inputClickHandler}>추가</button>
        </>
    )
}

export default Input;