import styled from 'styled-components';

const Tr = styled.tr`
    margin-bottom: 2px solid red;
    padding: 0px 5px;
    
`

function ListTable(props){
    return (
        <>
            <Tr>
              <td>{props.position} - {props.name}</td>
              <td>{props.won}</td>
              <td>{props.draw}</td>
              <td>{props.lost}</td>
              <td>{props.points}</td>
            </Tr>
        </>
    )
}

export default ListTable;