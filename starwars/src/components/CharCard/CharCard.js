import React from 'react';
import styled from 'styled-components';
import CharInfo from '../CharInfo/CharInfo';

const Card = styled.div`
    width: 500px;
    margin: 10px
    display: flex;
    border: 2px solid black;
`;
const Name = styled.h3`
    text-align: center;
    width: 40%;
    align-self: center;
    // border-right: 2px solid black;
`;
const CharCard = (props) => {
    // console.log(props)
    return (
        <Card>
            <Name>{props.char.name}</Name>
            <CharInfo info={props.char}/>
        </Card>
    )
}

export default CharCard;