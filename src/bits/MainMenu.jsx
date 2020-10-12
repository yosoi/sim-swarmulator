import { Grid, Header, Menu } from "semantic-ui-react";

import { Link } from "react-router-dom";
import React from "react";

export default function MainMenu() {
  // TODO: get actual version somehow
  const version = "0.1.0";
  return (
    <Grid verticalAlign="middle">
      <Grid.Column computer={4} floated="left" mobile={8} tablet={4}>
        <Header as={Link} to="/">
          Cult Simulator
        </Header>
      </Grid.Column>
      <Grid.Column
        computer={12}
        floated="right"
        mobile={8}
        tablet={12}
        textAlign="right"
      >
        <Menu compact secondary>
          <Menu.Item as={Link} to="/changelog">
            {`v${version}`}
          </Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
  );
}
