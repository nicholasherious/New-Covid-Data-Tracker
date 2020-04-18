import React from 'react';
import { Grid, Card, Statistic } from 'semantic-ui-react';

function Main({ covidData }) {
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  const {
    positive,
    inIcuCurrently,
    recovered,
    death,
    total,
    hospitalized,
  } = covidData;
  return (
    <Grid stackable columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Card.Group>
            <Card fluid>
              <Card.Content>
                <Card.Header>Confirmed</Card.Header>
                <Card.Description>
                  <Statistic size="small" color="blue">
                    <Statistic.Value>
                      {formatNumber([positive])}
                    </Statistic.Value>
                  </Statistic>
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
        <Grid.Column>
          <Card.Group>
            <Card fluid>
              <Card.Content>
                <Card.Header>Deaths</Card.Header>
                <Card.Description>
                  <Statistic size="small" color="red">
                    <Statistic.Value>{formatNumber([death])}</Statistic.Value>
                  </Statistic>
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
        <Grid.Column>
          <Card.Group>
            <Card fluid>
              <Card.Content>
                <Card.Header>Recovered</Card.Header>
                <Card.Description>
                  <Statistic size="small" color="green">
                    <Statistic.Value>
                      {formatNumber([recovered])}
                    </Statistic.Value>
                  </Statistic>
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Card.Group>
            <Card fluid>
              <Card.Content>
                <Card.Header>Hospitalized</Card.Header>
                <Card.Description>
                  <Statistic size="small" color="grey">
                    <Statistic.Value>
                      {formatNumber([hospitalized])}
                    </Statistic.Value>
                  </Statistic>
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
        <Grid.Column>
          <Card.Group>
            <Card fluid>
              <Card.Content>
                <Card.Header>Intensive Care</Card.Header>
                <Card.Description>
                  <Statistic size="small" color="grey">
                    <Statistic.Value>
                      {formatNumber([inIcuCurrently])}
                    </Statistic.Value>
                  </Statistic>
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
        <Grid.Column>
          <Card.Group>
            <Card fluid>
              <Card.Content>
                <Card.Header>Total Test Results</Card.Header>
                <Card.Description>
                  <Statistic size="small" color="grey">
                    <Statistic.Value>{formatNumber([total])}</Statistic.Value>
                  </Statistic>
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Main;
