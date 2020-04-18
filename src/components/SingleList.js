import React from 'react';
import { Table, Header, Container, Statistic } from 'semantic-ui-react';

function SingleList({ stateData }) {
  const {
    state,
    positive,
    death,
    recovered,
    hospitalized,
    inIcuCurrently,
    total,
  } = stateData;

  return (
    <Container className="containerHead">
      <Header size="medium">{state}</Header>
      <Table celled selectable columns={4}>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing warning>
              Confirmed
            </Table.Cell>
            <Table.Cell>
              <Statistic size="mini">
                <Statistic.Value>{positive}</Statistic.Value>
              </Statistic>
            </Table.Cell>
            <Table.Cell warning>Hospitalized</Table.Cell>
            <Table.Cell>
            <Statistic size='mini'>
      <Statistic.Value>{hospitalized}</Statistic.Value>
    </Statistic>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell negative>Deaths</Table.Cell>
            <Table.Cell>
              <Statistic size="mini">
                <Statistic.Value>{death}</Statistic.Value>
              </Statistic>
            </Table.Cell>
            <Table.Cell negative>Intensive Care</Table.Cell>
            <Table.Cell>
            <Statistic size='mini'>
      <Statistic.Value>{inIcuCurrently}</Statistic.Value>
    </Statistic>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell positive>Recovered</Table.Cell>
            <Table.Cell>
              <Statistic size="mini">
                <Statistic.Value>{recovered}</Statistic.Value>
              </Statistic>
            </Table.Cell>
            <Table.Cell positive>Total Test Results</Table.Cell>
            <Table.Cell><Statistic size='mini'>
      <Statistic.Value>{total}</Statistic.Value>
    </Statistic></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );
}

export default SingleList;
