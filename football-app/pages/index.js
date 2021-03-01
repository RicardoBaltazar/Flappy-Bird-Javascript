import React from 'react';
import Head from 'next/head'
import styled from 'styled-components';

import Container from '../src/Components/Container'
import Header from '../src/Components/Header'
import ListTable from '../src/Components/ListTable'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Select = styled.select`
    width: 30vw;
    padding: 10px 20px;
    border: 2px solid #06aa48;
    border-radius: 20px ;
    @media screen and (max-width: 900px) {
        width: 60vw;
        margin-top: 25px;
    }
    @media screen and (max-width: 500px) {
        width: 90vw;
    }
`

const Table = styled.table`
  width: 90vw;
  padding: 60px 0;

  th{
    border-bottom: 1px solid #06aa48;
    text-align: left;
    padding: 10px 0px;
  }
  td {
    border-bottom: 1px solid grey;
    text-align: left;
    padding: 10px 0px;
  }
  @media screen and (max-width: 900px) {
        width: 95vw;
  }
  @media screen and (max-width: 400px) {
        font-size: 14px;
  }
  @media screen and (max-width: 321px) {
        font-size: 12px;
  }
`

function Home() {
  const [valueCodeFilter, setValueCodeFilter] = React.useState('2013');
  const [tableApi, setTableApi] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://api.football-data.org/v2/competitions/${valueCodeFilter}/standings`, {
      method: "GET",
      headers: {
        "X-Auth-Token": "4fc66876e3c6435e98400a89fb206a1a"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('Respota Recebida');
        console.log(data);
        setTableApi(data.standings[0].table);
      })
  }, [valueCodeFilter]);

  const dataTableRanking = tableApi.map(tableApi => {
    return (
      <>
        <ListTable
          position={tableApi.position}
          name={tableApi.team.name}
          won={tableApi.won}
          draw={tableApi.draw}
          lost={tableApi.lost}
          points={tableApi.points}
        />
      </>
    )
  })

  return (
    <>
      <Head>
        <title>App Football</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <Select onChange={event => setValueCodeFilter(event.target.value)}>
            <option id='brasil' value='2013'>Selecione um campeonato</option>
            <option id='brasil' value='2013'>Série A - Brasil</option>
            <option id='netherlands' value='2003'>Eredivisie - Holanda</option>
            <option id='england' value='2021'>Premier League - Inglaterra</option>
            <option id='germany' value='2002'>Bundesliga - Alemanha</option>
            <option id='italy' value='2019'>Serie A - Italia</option>
            <option id='spain' value='2014'>La Liga - Espanha</option>
            <option id='postugal' value='2017'>Primeira Liga - Portugal</option>
            <option id='france' value='2015'>Ligue 1 - França</option>
          </Select>

          <Table>
            <tr>
              <th>Time</th>
              <th>Vitórias</th>
              <th>Empates</th>
              <th>Derrotas</th>
              <th>Pontos</th>
            </tr>
            {dataTableRanking}
          </Table>
        </Main>

      </Container>
    </>
  )
}

export default Home;