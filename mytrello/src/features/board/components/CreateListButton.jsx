import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import uuid from 'react-uuid'
import {v4 as uuidv4} from "uuid"
import { createListStart } from '../util/board.reducer'

const Container = styled.div`
    width: 272px;
    height: 40px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightcoral;
`

const CreateListButton = () => {
    const dispatch = useDispatch();
    const [onCreate, setOnCreate] = useState(false);
    const [title, setTitle] = useState('');
    
    function onClick(){
        setOnCreate(true);
    }
    
    function onBlur(){
        setOnCreate(false);
    }

    function onChange(e){
        setTitle(e.target.value)
    }

    function createList(){
        const newID = uuid();
        dispatch(createListStart(newID, title));
        setTitle("");
        setOnCreate(false);
    }

    return (
    <Container onClick={onClick}>
        {onCreate ? <input 
            autoFocus onBlur={onBlur}
            onChange={onChange}
            value={title}
            onKeyPress ={e =>{
                e.key === 'Enter' && createList()
            }}
            /> 
        : 
        <span>+리스트 추가하기</span> } 
    </Container>
    )
}

export default CreateListButton
