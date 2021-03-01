import styled from 'styled-components';

const HEADER = styled.header`
    color: #fff;
    padding: 20px 50px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    font-size: 18px;
    margin-bottom: 2vw;
    background-color: #06aa48;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
    }
`

function Header(){
    return (
        <>
        <HEADER>
            <h1>AppFootball</h1>
            <small>Consulta de Ranking dos campeonatos</small>
        </HEADER>
        </>
    )
}

export default Header;