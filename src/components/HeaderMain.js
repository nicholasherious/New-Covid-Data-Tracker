import React from 'react';
import { Icon, Header, Flag } from 'semantic-ui-react';

function HeaderMain({ covidData }) {
  const { lastModified } = covidData;
  const date = new Date(lastModified);
  return (
    <Header as="h1" icon textAlign="center">
      <Icon name="doctor" />
      <Header.Content>
        Covid-19 Data
        <Header.Subheader>
          <Flag name="us" /> U.S. Tracking
        </Header.Subheader>
        <Header.Subheader>Updated: {date.toString()}</Header.Subheader>
      </Header.Content>
    </Header>
  );
}

export default HeaderMain;
