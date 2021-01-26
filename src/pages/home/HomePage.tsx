import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../store";

export const HomePage = observer(() => {
  const {
    homeStore: { appName }
  } = React.useContext(StoreContext);

  return <div> {appName} </div>;
});
