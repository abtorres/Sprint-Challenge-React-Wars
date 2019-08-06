import React from 'react';
import styled from 'styled-components';

const InfoDiv = styled.div`
    width: 100%;
    border-left: 2px solid black;
`;

const Span = styled.span`
    font-weight: bold;
`;
const CharInfo = (props) => {
    console.log(props)
    return (
        <InfoDiv>
            <p><Span>Birth-Year:</Span> {props.info.birth_year}</p>
            <p><Span>Gender:</Span> {props.info.gender}</p>
            <p><Span>Height:</Span> {props.info.height}</p>
            <p><Span>Weight:</Span> {props.info.mass}</p>
        </InfoDiv>
    )
};

export default CharInfo;