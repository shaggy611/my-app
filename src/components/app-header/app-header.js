import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    align-items: flex-end;
    justify-content: space-between;
    display: flex;
    h1 {
        font-size: 26px;
        :hover {
            color: blue;
            transition-duration: 300ms;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = () => {
    return (
        <Header>
            <h1>Vsevolod Romaniuk</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </Header>
    )
}

export default AppHeader;
