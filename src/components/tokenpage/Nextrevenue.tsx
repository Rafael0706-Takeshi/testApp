import * as React from "react";

export default function Nextrevenue() {
  return (
    <div>
      <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
        <div className="align-items-center justify-content-center m-auto text-center row">
          <div className="col-xl-7 col-lg-8 col-md-12 col-12">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className="h2 text-primary text-center">
                Next Revenue Share Airdrop
              </p>
              <h2 className="h1 text-gradient text-center position-relative z-3 d-inline mb-4">
                Countdown till next Payout
              </h2>
              <div className="w-100 g-2 g-sm-1 g-md-3 row">
                <div className="col-md-3 col-sm-3 col-6">
                  <div className="w-100 card">
                    <div className="p-3 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                      <p className="h1 text-primary mb-0 text-center">0</p>
                      <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                        Days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-6">
                  <div className="w-100 card">
                    <div className="p-3 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                      <p className="h1 text-primary mb-0 text-center">0</p>
                      <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                        Hours
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-6">
                  <div className="w-100 card">
                    <div className="p-3 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                      <p className="h1 text-primary mb-0 text-center">0</p>
                      <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                        Minutes
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-6">
                  <div className="w-100 card">
                    <div className="p-3 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                      <p className="h1 text-primary mb-0 text-center">0</p>
                      <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                        Seconds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
