import * as React from "react";

import Header from "../components/homepage/Header";
import ExchageCrypto from "../components/homepage/ExchageCrypto";
import RecentTransaction from "../components/homepage/RecentTransaction";
import LatestUpdates from "../components/homepage/LatestUpdates";

export default function Homepage() {
  return (
    <div>
      <Header />
      <ExchageCrypto />
      <RecentTransaction />
      <LatestUpdates />
    </div>
  );
}
