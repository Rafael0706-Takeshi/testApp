import * as React from "react";

import SupportedCrypto from "../SupportedCrypto";

export default function RecentTransaction(props: any) {
  return (
    <div>
      {/* Recent Transaction */}

      <section className="container-md my-4 my-lg-5 py-4 py-lg-5 position-relative m-auto container">
        <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
          <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
            Recent Transaction
          </h4>
        </div>
        <div className="list-group"></div>
      </section>

      {/* Supported Crypto */}
      <SupportedCrypto />
    </div>
  );
}
