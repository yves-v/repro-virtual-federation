/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useState } from "react";

import {
  __federation_method_setRemote,
  __federation_method_getRemote,
  __federation_method_wrapDefault,
  // @ts-ignore
} from "virtual:__federation__";

export default function Plugin1App() {
  return (
    <div
      style={{ backgroundColor: "lightgreen", borderRadius: 10, padding: 20 }}
    >
      Plugin1 <CountButton />
      <Remote
        entryUrl="http://localhost:4502/assets/remoteEntry.js"
        component="Plugin2App"
      />
    </div>
  );
}

function Remote({
  entryUrl,
  component,
}: {
  entryUrl: string;
  component: string;
}) {
  const Component = React.lazy(async () => {
    __federation_method_setRemote("dynamic", { url: entryUrl });
    const comp = __federation_method_getRemote("dynamic", `./${component}`);
    return __federation_method_wrapDefault(comp, true);
  });

  return (
    <Suspense fallback="Loading remote">
      <Component />
    </Suspense>
  );
}

function CountButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() =>
        setCount((old) => {
          return old + 1;
        })
      }
    >
      click me: {count}
    </button>
  );
}
