import * as React from "react";

export default function Faqpage() {
  return (
    <div>
      <header className="c-token-section mb-0 border-bottom border-1">
        <div className="position-relative container">
          <div className="align-items-center justify-content-between gy-4 row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="d-flex flex-column justify-content-start align-items-start">
                <p className="h2 text-primary">Introducing our</p>
                <h1 className="h1 text-gradient text-start position-relative z-3 d-inline mb-4">
                  Revenue Share Program
                </h1>
                <p className="mb-3 mb-lg-4">
                  Join our revenue-sharing program and earn a share of our
                  exchange and token fee profits based on your $Veil Token
                  ownership.
                </p>
                <div className="d-flex flex-flex justify-content-start align-items-start gap-2">
                  <a
                    role="button"
                    tabIndex={0}
                    href="/token"
                    className="text-center d-flex flex-row align-items-center justify-content-center mt-0 text-nowrap fw-bold px-3 px-md-4 py-3 rounded-3 btn btn-primary"
                  >
                    About Token
                  </a>
                  <a
                    role="button"
                    tabIndex={0}
                    href="https://etherscan.io/address/0x4406D9D8Eb6acF6A90c13C0977C21D290dC6c8F2"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-center fw-bold px-3 px-md-4 py-3 rounded-3 mb-0 btn btn-primary"
                  >
                    View RevShare Wallet
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <div className="w-100 card">
                <div className="px-5 card-header">
                  <p className="h4 mb-0 text-center">Total Paid Out So Far</p>
                </div>
                <div className="p-3 p-lg-4 px-lg-5 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                  <p className="h1 text-primary mb-0 text-center">ETH</p>
                  <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                    $ USD
                  </p>
                </div>
                <div className="card-footer">
                  <p className="small text-uppercase text-white-50 mb-0 text-center">
                    Last Payout:
                    <a href="/revenue-share#payouts">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="ms-2"
                      >
                        <g
                          stroke-width="1"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="0.5" y1="8" x2="15.5" y2="8"></line>
                          <polyline points="10.5 3 15.5 8 10.5 13"></polyline>
                        </g>
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
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
        <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
          <div className="align-items-center justify-content-center m-auto text-center row">
            <div className="col-xl-7 col-lg-8 col-md-12 col-12">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="h2 text-primary text-center">Revenue Sharing</p>
                <h2 className="h1 text-gradient text-center position-relative z-3 d-inline mb-4">
                  How does it work?
                </h2>
                <p className="mb-2">
                  Our revenue sharing program comes from the distributed profits
                  from our Veil Token taxes and our exchange processing. We
                  allocate 20% of all revenue back to our revenue sharing
                  program. This program will airdrop holders* of the Veil Token
                  every 72 hours, with the funds that are generated into the
                  RevShare wallet.
                </p>
                <p className="mb-3 mb-lg-4 fst-italic text-white-50 small">
                  *Eligibility: Veil Token Holders holding at-least 1,000,000
                  Veil Tokens.
                </p>
                <a
                  role="button"
                  tabIndex={0}
                  href="https://etherscan.io/address/0xB9c1a0E52DaeeAf235f3FDFAE0119EAEcaADbd9D"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-center fw-bold px-3 px-md-4 py-3 rounded-3 mb-0 btn btn-primary"
                >
                  View RevShare Wallet
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
          <div className="d-flex flex-column align-items-start align-items-sm-center justify-content-start justify-content-sm-center mb-4">
            <h3 className="h1 text-gradient text-primary text-start text-md-center position-relative z-3 d-inline mb-4">
              Our Revenue Income
            </h3>
            <p className="text-primary text-start text-md-center">
              Overview for Revenue generated from Veil Exchange &amp;Token Fees
            </p>
          </div>
          <div className="align-items-center justify-content-center mb-3 mb-lg-4 gy-3 gy-lg-0 row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="w-100 card">
                <div className="px-4 card-header">
                  <p className="h5 mb-0 text-center">Revenue from Exchange</p>
                </div>
                <div className="p-3 p-lg-4 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                  <p className="h1 text-primary mb-0 text-center">ETH</p>
                  <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                    $ USD
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="w-100 card">
                <div className="px-4 card-header">
                  <p className="h5 mb-0 text-center">Revenue from Token Fees</p>
                </div>
                <div className="p-3 p-lg-4 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                  <p className="h1 text-primary mb-0 text-center">ETH</p>
                  <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                    $ USD
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="align-items-center justify-content-center row">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="w-100 card">
                <div className="px-4 card-header">
                  <p className="h5 mb-0 text-center">Total Revenue</p>
                </div>
                <div className="p-3 p-lg-4 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                  <p className="h1 text-primary mb-0 text-center">ETH</p>
                  <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                    $ USD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <section
          id="payouts"
          className="my-4 my-lg-5 py-4 py-lg-5 position-relative container"
        >
          <div className="d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-5">
            <h3 className="h1 text-gradient text-start position-relative z-3 d-inline mb-4">
              Monthly Revenue &amp;Payouts
            </h3>
            <p className="mb-3 mb-lg-4 text-primary">
              Overview for the past 12 Months
            </p>
          </div>
          <div className="align-items-start justify-content-between gx-0 gx-lg-5 row">
            <div className="col-lg-8 col-12">
              <canvas role="img" height="150" width="300"></canvas>
            </div>
            <div className="col-lg-4 col-12">
              <table className="rounded-2 table table-dark table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th className="text-end">Payout</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cursor-pointer">
                    <td>11/10/2023</td>
                    <td className="text-end d-flex flex-row align-items-center justify-content-end">
                      <p className="mb-0">2.8 ETH</p>
                      <span className="small text-white-50 ms-2">$</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-center mt-3">
                <button type="button" disabled className="btn btn-secondary">
                  Prev
                </button>
                <span className="mx-2 my-2">Page 1 of 1</span>
                <button type="button" className="btn btn-secondary">
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
