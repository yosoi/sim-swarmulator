import React, { useState } from "react";

import { Message } from "semantic-ui-react";

export default function Welcome() {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <Message
      content="Welcome to Cult Simulator. Turn back now or prepare to waste a lot of time here."
      header="Uhhhhh..."
      info
      onDismiss={() => setVisible(false)}
    ></Message>
  ) : (
    <div></div>
  );
}
