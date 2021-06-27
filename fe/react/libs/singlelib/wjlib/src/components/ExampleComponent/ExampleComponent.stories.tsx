import React from "react";
import { ExampleComponent } from "./ExampleComponent";

import type { ReactElement } from "react";

// export default {
//   title: "Display/Badge",
//   component: ExampleComponent,
// };

export const Default = (): ReactElement => {
  return (
    <div className="space-x-4">
      <ExampleComponent text="abc"></ExampleComponent>
    </div>
  );
};

// export const SemanticNewBadge = (): ReactElement => {
//   return <NewBadge />;
// };

// export const SemanticBetaBadge = (): ReactElement => {
//   return <BetaBadge />;
// };

// export const SemanticAlertBadge = (): ReactElement => {
//   return <AlertBadge count={279} />;
// };
