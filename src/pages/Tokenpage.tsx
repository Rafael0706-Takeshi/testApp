import * as React from "react";

export default function Tokenpage() {
  return (
    <div>
      <section className="c-token-section mb-0">
        <div className="container">
          <div className="justify-content-center justify-content-md-between align-items-center row">
            <div className="mb-5 mb-xl-0 me-0 me-md-5 col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-2">
                <h1 className="c-hero__title h1 text-center text-md-start position-relative z-3 d-inline">
                  <span className="text-gradient d-block">Introducing</span>
                  <span className="text-primary">$Veil Token</span>
                </h1>
              </div>
              <h2 className="fs-5 text-white text-center text-md-start fw-normal lh-lg mb-0 mb-4 mb-lg-4">
                Introducing our utility token to support the Veil exchange
                platform.
              </h2>
              <h3 className="fs-5 text-white text-center text-md-start  fw-normal lh-lg mb-0 mb-4 mb-lg-4">
                Contract: 0xb244b3574a5627849fca2057e3854340def63071
              </h3>
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-start">
                <a
                  role="button"
                  tabIndex={0}
                  href="https://app.uniswap.org/swap?outputCurrency=0xB244b3574a5627849fca2057E3854340Def63071"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-center fw-bold px-3 px-md-4 py-3 rounded-3 me-0 me-md-4 mb-3 mb-md-0 btn btn-primary"
                >
                  Buy Token
                </a>
                <a
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-center text-decoration-underline link-offset-3"
                  href="https://www.dextools.io/app/en/ether/pair-explorer/0xac9ae0eb05daee73bd964eaa0153b762d6455667"
                >
                  View Chart
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-12">
              <div className="d-flex justify-content-center align-items-center mb-2">
                <h1 className="h1 text-gradient text-center position-relative z-3 d-inline">
                  $Veil Tokenomics
                </h1>
              </div>
              <div className="d-flex flex-column justify-content-stretch border-0 rounded-0 list-group">
                <div className="p-3 bg-dark d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom list-group-item">
                  <p className="mb-0 fs-5 text-nowrap me-sm-5">
                    Token Taxes:
                    <span className="small opacity-50">(Buy/Sell)</span>
                  </p>
                  <p className="mb-0 fs-5 fw-bold text-primary">5% / 5%</p>
                </div>
                <div className="p-3 bg-dark d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom list-group-item">
                  <p className="mb-0 fs-5 text-nowrap me-sm-5">Total Supply:</p>
                  <p className="mb-0 fs-5 fw-bold text-primary c-tokenomics__total-supply">
                    1,000,000,000
                  </p>
                </div>
                <div className="p-3 bg-dark d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 list-group-item">
                  <p className="mb-0 fs-5 text-nowrap me-sm-5">
                    CEX Allocation:
                  </p>
                  <p className="mb-0 fs-5 fw-bold text-primary">80,000,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
          <div className="d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-5">
            <h4 className="h1 text-gradient text-center position-relative z-3 d-inline mb-4">
              $Veil Token Stats
            </h4>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-center text-decoration-underline link-offset-3"
              href="https://etherscan.io/address/0xb244b3574a5627849fca2057e3854340def63071"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 293.775 293.667"
              >
                <g fill="currentColor">
                  <g
                    id="etherscan-logo-light-circle"
                    transform="translate(-219.378 -213.333)"
                  >
                    <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M280.433 353.152a12.45 12.45 0 0 1 12.508-12.452l20.737.068a12.467 12.467 0 0 1 12.467 12.467v78.414c2.336-.692 5.332-1.43 8.614-2.2a10.389 10.389 0 0 0 8.009-10.11v-97.266a12.469 12.469 0 0 1 12.467-12.47h20.779a12.47 12.47 0 0 1 12.467 12.47v90.276s5.2-2.106 10.269-4.245a10.408 10.408 0 0 0 6.353-9.577V290.9a12.466 12.466 0 0 1 12.465-12.467h20.779a12.468 12.468 0 0 1 12.468 12.467v88.625c18.014-13.055 36.271-28.758 50.759-47.639a20.926 20.926 0 0 0 3.185-19.537 146.6 146.6 0 0 0-136.644-99.006c-81.439-1.094-148.744 65.385-148.736 146.834a146.371 146.371 0 0 0 19.5 73.45 18.56 18.56 0 0 0 17.707 9.173 508.86 508.86 0 0 0 14.643-1.518 10.383 10.383 0 0 0 9.209-10.306v-77.824"
                      fill="currentColor"
                    ></path>
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M244.417 398.641A146.808 146.808 0 0 0 477.589 279.9c0-3.381-.157-6.724-.383-10.049-53.642 80-152.686 117.405-232.79 128.793"
                      transform="translate(35.564 80.269)"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
              </svg>
              View on Etherscan
            </a>
          </div>
          <div className="gy-4 gy-xl-0 row row-cols-xl-4 row-cols-md-2 row-cols-1">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <p className="h4 mb-0 text-center">Total Holders</p>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="mb-0 d-flex flex-row align-items-center justify-content-center gap-2 text-primary card-title h5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <g
                        stroke-linecap="square"
                        stroke-linejoin="miter"
                        stroke-width="2"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                      >
                        <circle cx="9" cy="15" r="4"></circle>
                        <path d="M9,22c-4.418,0-8,3.582-8,8v1H17v-1c0-4.418-3.582-8-8-8Z"></path>
                        <circle cx="20.5" cy="6.5" r="5.5"></circle>
                        <path d="M21,31h10v-6c0-5.523-4.477-10-10-10-1.422,0-2.775,.297-4,.832"></path>
                      </g>
                    </svg>
                    <p className="h1 text-primary mb-0 text-center"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <p className="h4 mb-0 text-center">Total Transactions</p>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="mb-0 d-flex flex-row align-items-center justify-content-center gap-2 text-primary card-title h5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <g
                        stroke-linecap="square"
                        stroke-linejoin="miter"
                        stroke-width="2"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                      >
                        <polyline points="3,12 29,12 19,2 "></polyline>
                        <polyline points=" 29,20 3,20 13,30 "></polyline>
                      </g>
                    </svg>
                    <p className="h1 text-primary mb-0 text-center"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <p className="h4 mb-0 text-center">Liquidity</p>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="mb-0 d-flex flex-row align-items-center justify-content-center gap-2 text-primary card-title h5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 256 416.91"
                    >
                      <g>
                        <defs></defs>
                        <g
                          id="1677594065611-2455942_Layer_2"
                          data-name="Layer 2"
                        >
                          <g
                            id="1677594065611-2455942_Layer_1-2"
                            data-name="Layer 1"
                          >
                            <path
                              className="cls-1"
                              d="M127.96 0l-2.79 9.5v275.67l2.79 2.79 127.96-75.64L127.96 0z"
                              fill="#343434"
                            ></path>
                            <path
                              className="cls-2"
                              d="M127.96 0L0 212.32l127.96 75.64V0z"
                              fill="#8c8c8c"
                            ></path>
                            <path
                              className="cls-3"
                              d="M127.96 312.19l-1.57 1.92v98.2l1.57 4.6L256 236.59l-128.04 75.6z"
                              fill="#3c3c3b"
                            ></path>
                            <path
                              className="cls-2"
                              d="M127.96 416.9V312.19L0 236.59 127.96 416.9z"
                              fill="#8c8c8c"
                            ></path>
                            <path
                              className="cls-4"
                              d="M127.96 287.96l127.96-75.64-127.96-58.16v133.8z"
                              fill="#141414"
                            ></path>
                            <path
                              className="cls-5"
                              d="M0 212.32l127.96 75.64v-133.8L0 212.32z"
                              fill="#393939"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <p className="h1 text-primary mb-0 text-center"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <p className="h4 mb-0 text-center">Market Cap</p>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="mb-0 d-flex flex-row align-items-center justify-content-center gap-2 text-primary card-title h5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <g
                        stroke-linecap="square"
                        stroke-linejoin="miter"
                        stroke-width="2"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                      >
                        <rect x="4" y="19" width="6" height="12"></rect>
                        <polygon points="21,2 12,13 18,13 18,31 24,31 24,13 30,13 "></polygon>
                      </g>
                    </svg>
                    <p className="h1 text-primary mb-0 text-center"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
          <div className="align-items-center justify-content-between row">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="d-flex flex-column justify-content-start align-items-start mb-4 mb-lg-5">
                <p className="h2 text-primary">Breakdown</p>
                <h2 className="h1 text-gradient text-start position-relative z-3 d-inline mb-4">
                  Our Revenue Allocation
                </h2>
                <p className="mb-3 mb-lg-4">
                  Our Veil revenue is generated from the exchange processes
                  &amp;fees from the $Veil token. This is distributed to certain
                  allocations for the upkeep of the platform, and distributed
                  sharing. Here is the list of our allocations for each
                  category.
                </p>
                <div className="w-100 mt-3 mt-lg-4 card">
                  <div className="p-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom card-body">
                    <p className="mb-0 fs-5">Marketing:</p>
                    <p className="mb-0 fs-5 fw-bold text-danger">30%</p>
                  </div>
                </div>
                <div className="w-100 mt-2 mt-lg-2 card">
                  <div className="p-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom card-body">
                    <p className="mb-0 fs-5">Revenue Share:</p>
                    <p className="mb-0 fs-5 fw-bold text-success">20%</p>
                  </div>
                </div>
                <div className="w-100 mt-2 mt-lg-2 card">
                  <div className="p-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom card-body">
                    <p className="mb-0 fs-5">Team:</p>
                    <p className="mb-0 fs-5 fw-bold text-primary">20%</p>
                  </div>
                </div>
                <div className="w-100 mt-2 mt-lg-2 card">
                  <div className="p-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom card-body">
                    <p className="mb-0 fs-5">Development:</p>
                    <p className="mb-0 fs-5 fw-bold text-info">15%</p>
                  </div>
                </div>
                <div className="w-100 mt-2 mt-lg-2 card">
                  <div className="p-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center w-100 border-0 border-bottom card-body">
                    <p className="mb-0 fs-5">Treasury:</p>
                    <p className="mb-0 fs-5 fw-bold text-warning">15%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-12 col-12">
              <canvas role="img" height="150" width="300"></canvas>
            </div>
          </div>
        </section>
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
      </main>
    </div>
  );
}
