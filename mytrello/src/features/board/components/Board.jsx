import React from 'react'
import styled from 'styled-components';
import { initializeBoardStart, selectBoardIds } from '../util/board.reducer';
import CreateListButton from './CreateListButton';
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import List from './List';

const Container = styled.div`
    width: 100vw;
    height: 100vw;
    display: flex;
    align-items: flex-start;
    padding: 10px;
`
const Board = () => {
    const ListIds =  useSelector(selectBoardIds);
    const dispatch = useDispatch(); 
    useEffect(()=>{
        dispatch(initializeBoardStart());
    },[dispatch]);
    
    return (
        <Container>
            {ListIds.map((id)=>(
                <List key={id} id ={id}/>
            ))}
            <CreateListButton/>
        </Container>
    )
}

export default Board;
