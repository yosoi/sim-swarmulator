import { Grid, Menu } from "semantic-ui-react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

import Larvae from "bits/Larvae";
import Meat from "bits/Meat";
import React from "react";

export default function Game() {
  const createTabPath = (tabName) => `/tab/${tabName}`;

  const history = useHistory();
  const location = useLocation();

  const tabs = [
    { component: () => <Meat></Meat>, name: "meat" },
    { component: () => <Larvae></Larvae>, name: "larvae" },
  ];

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Menu tabular>
            {tabs.map((tab) => (
              <Menu.Item
                active={location.pathname === createTabPath(tab.name)}
                key={tab.name}
                onClick={() => history.push(createTabPath(tab.name))}
                {...tab}
              ></Menu.Item>
            ))}
          </Menu>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Switch>
            {tabs.map((tab) => (
              <Route exact key={tab.name} path={createTabPath(tab.name)}>
                {tab.component()}
              </Route>
            ))}
          </Switch>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
