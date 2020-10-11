import Footer from "bits/Footer";
import Game from "bits/Game";
import { Grid } from "semantic-ui-react";
import MainMenu from "bits/MainMenu";
import React from "react";
import Welcome from "bits/Welcome";

function App() {
  return (
    <Grid container style={{ paddingTop: "1rem" }}>
      <Grid.Row>
        <Grid.Column>
          <MainMenu></MainMenu>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Welcome></Welcome>
          <Game></Game>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Footer></Footer>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
