import { Grid, Icon, Menu } from "semantic-ui-react";
import React, { useCallback, useState } from "react";

import composeResource from "bits/composeResource";
import useGameLoop from "bits/useGameLoop";

export default function Game() {
  // TODO: abstract these pairs to custom hook
  const [souls, setSouls] = useState(10);
  const [soulsRate, setSoulsRate] = useState(1);

  const [devotion, setDevotion] = useState(35);
  const [devotionRate, setDevotionRate] = useState(0);

  const [hysteria, setHysteria] = useState(0);
  const [hysteriaRate, setHysteriaRate] = useState(0);

  const update = useCallback(() => {
    setSouls((souls) => souls + soulsRate);
    setDevotion((devotion) => devotion + devotionRate);
    setHysteria((hysteria) => hysteria + hysteriaRate);
  }, []);

  useGameLoop(1, update);

  // TODO: convert this to a dictionary with names as keys
  const resources = [
    ["Devotion", devotion, false, true],
    ["Souls", souls, false, true],
    ["Hysteria", hysteria, false, souls >= 15],
  ].map((resource) => composeResource(...resource));

  const [activeResourceName, setActiveResourceName] = useState(
    resources[0].name
  );

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Menu tabular>
            {resources
              .filter((resource) => resource.isUnlocked())
              .map((resource) => (
                <Menu.Item
                  active={activeResourceName === resource.name}
                  key={resource.name}
                  onClick={() => setActiveResourceName(resource.name)}
                >
                  {resource.canUpgrade() ? (
                    <Icon name="arrow alternate circle up"></Icon>
                  ) : (
                    <div></div>
                  )}
                  {`${resource.get()} ${resource.name}`}
                </Menu.Item>
              ))}
          </Menu>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>{activeResourceName}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
