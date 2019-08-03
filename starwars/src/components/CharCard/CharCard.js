import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 20px
`;
const CharCard = (props) => {
    console.log(props)
    return (
        <Card>
            <h3>{props.char.name}</h3>
        </Card>
    )
}

export default CharCard;