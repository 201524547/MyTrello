import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import { selectBoard } from '../util/board.reducer'

const Container = styled.div`
    width: 272px;
    min-height: 40px;
    background: lightcoral;
    color: white;
    padding: 5px;
    display: flex;
    flex-direction: column;
`
const List = ({id}) => {

    const boards = useSelector(selectBoard);
    const {title, cardIds } = boards[id];

    return (
        <Container>
            <div>{title}</div>
        </Container>
    )
}

export default List
