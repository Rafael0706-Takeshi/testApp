import * as React from "react";

import CustomCard1 from "../components/CustomCard1";
import CustomCard2 from "../components/CustomCard2";
import SupportedCrypto from "../components/SupportedCrypto";

export default function Homepage() {
  const cardData1 = [
    {
      pic: "",
      headText: "Privacy-Driven",
      bodyText: "Anonymized exchange with no sign-ups or limits.",
    },
    {
      pic: "",
      headText: "Seamless Exchange",
      bodyText:
        "Fast and effective exchange between wallets and cryptocurrencies.",
    },
    {
      pic: "",
      headText: "Zero Wallet Limits",
      bodyText: "No wallet or amount limitations on all exchanges through us!",
    },
  ];

  const cardData2 = [
    {
      pic: "",
      badgeText: "New Release",
      headLabel: "New Token Supported:",
      headText: "Goatseus Maximus(SOL)",
      bottomText: "Released: 07/01/25",
    },
    {
      pic: "",
      badgeText: "New Release",
      headLabel: "New Token Supported:",
      headText: "Goatseus Maximus(SOL)",
      bottomText: "Released: 07/01/2",
    },
    {
      pic: "",
      badgeText: "New Release",
      headLabel: "New Token Supported:",
      headText: "Goatseus Maximus(SOL)",
      bottomText: "Released: 07/01/25",
    },
  ];

  return (
    <div>
      <main>
        {/* We are all about privacy and security */}

        <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
          <div
            className="d-flex justify-content-center align-items-center mb-4 mb-lg-5"
            style={{
              opacity: 0.6,
              transform: "translateY(50px) scale(0.2) translateZ(0)",
            }}
          >
            <h2 className="h1 text-gradient text-center position-relative z-3 d-inline">
              We are all about privacy and security
            </h2>
          </div>

          {/* card1 */}

          <div className="row-cols-1 row-cols-md-1 row-cols-lg-3 gy-3 gy-lg-0 gx-0 gx-lg-4 position-relative z-3 row">
            {cardData1.map((row) => (
              <div className="col">
                <CustomCard1
                  pic={row.pic}
                  headText={row.headText}
                  bodyText={row.bodyText}
                />
              </div>
            ))}
          </div>
          <div className="c-glow position-absolute top-50 start-50 translate-middle z-1"></div>
        </section>

        {/* Exchange Crypto */}

        <section
          className="c-exchange__section my-4 my-lg-5 py-4 py-lg-5"
          id="exchange"
        >
          <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
            <h3 className="h1 text-gradient text-center position-relative z-3 d-inline">
              Exchange Crypto
            </h3>
          </div>
          <form
            id="exchangeForm"
            className="position-relative m-auto container-md mb-4 mb-lg-5"
          >
            <div className="row position-relative z-2 gy-4 mb-3 mb-md-4">
              <button
                className="c-exchange__swap position-absolute top-50 start-50 translate-middle bg-light rounded-circle z-3 d-flex align-items-center justify-content-center mt-3 mt-md-5"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g fill="currentColor">
                    <path d="M10.787,8.09A.5.5,0,0,0,10,8.5V11H3a1,1,0,0,0,0,2h7v2.5a.5.5,0,0,0,.787.41l5-3.5a.5.5,0,0,0,0-.82Z"></path>
                    <path d="M5.5,8A.5.5,0,0,0,6,7.5V5h7a1,1,0,0,0,0-2H6V.5A.5.5,0,0,0,5.213.09l-5,3.5a.5.5,0,0,0,0,.82l5,3.5A.5.5,0,0,0,5.5,8Z"></path>
                  </g>
                </svg>
              </button>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="d-flex flex-row align-items-center justify-content-between p-3 card-header">
                    <p className="h5 mb-0">You Send</p>
                  </div>
                  <div className="p-3 p-lg-4 card-body">
                    <button
                      type="button"
                      className="text-white bg-light border-1 border w-100 rounded-3 px-3 py-2 d-flex flex-row justify-content-between align-items-center mb-2 btn btn-light"
                    >
                      <div className="d-flex flex-row justify-content-start align-items-center">
                        <div className="c-exchange__icon">
                          <img
                            alt=""
                            loading="lazy"
                            width="50"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="/assets/tokens/btc.svg"
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                          <p className="mb-1 h5">Bitcoin</p>
                          <p className="mb-1 opacity-50">BTC</p>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <g fill="currentColor">
                          <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z"></path>
                        </g>
                      </svg>
                    </button>
                    <div
                      className="c-exchange__input bg-light rounded-3 p-3 w-100"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-title="Send Amount"
                    >
                      <div className="mb-0 flex-grow-1 w-100">
                        <input
                          name="send"
                          placeholder="0.0000"
                          required
                          type="text"
                          id="exchangeForm.SendAmount"
                          className="bg-transparent border-0 h4 fs-4 text-white mb-0 form-control"
                          value=""
                        />
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="d-flex flex-row align-items-center justify-content-between p-3 card-header">
                    <p className="h5 mb-0">You Receive</p>
                  </div>
                  <div className="p-3 p-lg-4 card-body">
                    <button
                      type="button"
                      className="text-white bg-light border-1 border w-100 rounded-3 px-3 py-2 d-flex flex-row justify-content-between align-items-center mb-2 btn btn-light"
                    >
                      <div className="d-flex flex-row justify-content-start align-items-center">
                        <div className="c-exchange__icon">
                          <img
                            alt=""
                            loading="lazy"
                            width="50"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="/assets/tokens/eth.svg"
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                          <p className="mb-1 h5">Ethereum</p>
                          <p className="mb-1 opacity-50">ETH</p>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <g fill="currentColor">
                          <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z"></path>
                        </g>
                      </svg>
                    </button>
                    <div
                      className="c-exchange__input border-1 border bg-light rounded-3 p-3 d-flex flex-row justify-content-start align-items-center"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-title="Approx. Receive Amount"
                    >
                      <div className="mb-0 flex-grow-1">
                        <input
                          name="receive"
                          placeholder="0.0000"
                          required
                          type="text"
                          readOnly
                          id="exchangeForm.ReceiveAmount"
                          className="bg-transparent border-0 h4 fs-4 text-white mb-0 form-control"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between p-3 card-header">
                  <p className="h5 mb-2 mb-sm-0">Receiving Wallet Address</p>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="c-exchange__input bg-light rounded-3 p-3">
                    <div className="gy-3 gy-sm-0 row">
                      <div className="col-sm-12">
                        <div className="mb-0 flex-grow-1">
                          <input
                            placeholder="Enter Wallet Address"
                            required
                            type="text"
                            id="exchangeForm.WalletAddress"
                            className="bg-transparent border-0 h4 fs-4 text-white mb-0 form-control"
                            value=""
                          />
                          <div className="invalid-feedback"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-flex flex-row align-items-center justify-content-start my-3 my-lg-4"
              style={{ transform: "translateX(100px) translateZ(0)" }}
            >
              <div className="mb-0">
                <div className="">
                  <input
                    required
                    type="checkbox"
                    className="form-check-input"
                  />
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <p className="opacity-75 mb-0 ms-2">
                By using the site and creating an exchange, you agree to our
                {/*  */}
                <a className="text-primary" href="/tos">
                  Terms of Services
                </a>
              </p>
            </div>
            <div tabIndex={0} style={{ transform: "scale(0) translateZ(0)" }}>
              <button
                type="submit"
                value="Submit"
                className="btn btn-primary w-100 py-3 fs-5 fw-bold btn btn-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="me-2"
                >
                  <g
                    stroke-linecap="square"
                    stroke-linejoin="miter"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  >
                    <polyline points="7.929 18.659 2.237 17.073 2.966 22.87"></polyline>
                    <path
                      d="M23,12A11,11,0,0,1,2.237,17.073"
                      stroke-linecap="butt"
                    ></path>
                    <polyline points="16.071 5.341 21.763 6.927 21.034 1.13"></polyline>
                    <path
                      d="M1,12A11,11,0,0,1,21.763,6.927"
                      stroke-linecap="butt"
                    ></path>
                  </g>
                </svg>
                Exchange
              </button>
            </div>
            <p className="opacity-75 text-center mt-3 mt-lg-4">
              Already have an order number?
              <a
                className="ms-2 text-muted text-decoration-underline"
                href="/#track"
              >
                Track your order
              </a>
            </p>
          </form>
        </section>

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
        {/* Latest Updates */}

        <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
          <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
            <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
              Latest Updates
            </h4>
          </div>
          <div className="gy-4 gy-md-0 row row-cols-md-3 row-cols-1">
            {cardData2.map((row) => (
              <div className="col">
                <CustomCard2
                  pic={row.pic}
                  headLabel={row.headLabel}
                  headText={row.headText}
                  bottomText={row.bottomText}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Track your Order */}

        <section
          id="track"
          className="container-md my-4 my-lg-5 py-4 py-lg-5 position-relative m-auto container"
        >
          <div className="d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-5">
            <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
              Track your Order
            </h4>
            <p className="text-center text-primary mb-0">
              Already have an order number? Check the status of your order
            </p>
          </div>
          <div className="m-auto container-sm">
            <div className="card">
              <div className="card-body">
                <form className="d-flex flex-column flex-sm-row align-items-start">
                  <div className="mb-0 flex-grow-1">
                    <input
                      placeholder="#6PCF012721"
                      required
                      type="text"
                      id="exchangeForm.WalletAddress"
                      className="bg-dark h4 fs-4 text-white mb-0 py-3 px-3 form-control"
                      value=""
                    />
                    <div className="invalid-feedback">
                      Error. Invalid order number.
                    </div>
                  </div>
                  <button
                    type="submit"
                    value="Submit"
                    className="mt-3 mt-sm-0 ms-0 ms-sm-3 py-3 px-4 px-md-5 fw-bold btn btn-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="me-2"
                    >
                      <g fill="currentColor">
                        <path d="M15.707,13.293L13,10.586c0.63-1.05,1-2.275,1-3.586c0-3.86-3.141-7-7-7S0,3.14,0,7s3.141,7,7,7 c1.312,0,2.536-0.369,3.586-1l2.707,2.707C13.488,15.902,13.744,16,14,16s0.512-0.098,0.707-0.293l1-1 C16.098,14.316,16.098,13.684,15.707,13.293z M7,12c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S9.761,12,7,12z"></path>
                      </g>
                    </svg>
                    Track Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
