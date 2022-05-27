import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import type { State } from "./store/types";

import * as Components from "./components";

const Render = () => {
  const pages = useSelector((state: State) => state.pages || []);

  return (
    <Switch>
      {pages.map((page) => (
        <Route
          key={page.id}
          path={page.slug}
          exact={page.exact}
          render={() => (
            <>
              {page.components.map((component) => {
                // component.name = Component:Variant
                const [componentName, variant] = component.name.split(":");

                if (componentName in Components) {
                  if (variant in Components[componentName]) {
                    const Comp = Components[componentName][variant];

                    return <Comp {...component.props} key={component.id} />;
                  }
                }

                return "UNKNOWN COMPONENT";
              })}
            </>
          )}
        />
      ))}
    </Switch>
  );
};

export default Render;
