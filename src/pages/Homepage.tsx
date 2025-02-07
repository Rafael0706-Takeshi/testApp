import * as React from "react";

export default function Homepage() {
  return (
    <div>
      <main>
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
          <div className="row-cols-1 row-cols-md-1 row-cols-lg-3 gy-3 gy-lg-0 gx-0 gx-lg-4 position-relative z-3 row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div style={{ transform: "none" }}>
                    <img
                      alt="Privacy Driven"
                      loading="lazy"
                      width="184"
                      height="276"
                      decoding="async"
                      data-nimg="1"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      style={{ color: "transparent" }}
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprivacy-driven.898bc50b.webp&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprivacy-driven.898bc50b.webp&amp;w=384&amp;q=75 2x"
                      src={
                        "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprivacy-driven.898bc50b.webp&amp;w=384&amp;q=75"
                      }
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <h3>Privacy-Driven</h3>
                  <p className="text-muted mb-0">
                    Anonymized exchange with no sign-ups or limits.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div style={{ transform: "none" }}>
                    <img
                      alt="Seamless Process"
                      loading="lazy"
                      width="260"
                      height="287"
                      decoding="async"
                      data-nimg="1"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      style={{ color: "transparent" }}
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseamless-process.dffc4254.webp&amp;w=384&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseamless-process.dffc4254.webp&amp;w=640&amp;q=75 2x"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseamless-process.dffc4254.webp&amp;w=640&amp;q=75"
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <h3>Seamless Exchange</h3>
                  <p className="text-muted mb-0">
                    Fast and effective exchange between wallets and
                    cryptocurrencies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div style={{ transform: "none" }}>
                    <img
                      alt="No Limits Wallet"
                      loading="lazy"
                      width="272"
                      height="222"
                      decoding="async"
                      data-nimg="1"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      style={{ color: "transparent" }}
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fno-limits-wallet.206efe59.webp&amp;w=384&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fno-limits-wallet.206efe59.webp&amp;w=640&amp;q=75 2x"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fno-limits-wallet.206efe59.webp&amp;w=640&amp;q=75"
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <h3>Zero Wallet Limits</h3>
                  <p className="text-muted mb-0">
                    No wallet or amount limitations on all exchanges through us!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="c-glow position-absolute top-50 start-50 translate-middle z-1"></div>
        </section>
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
        <section className="container-md my-4 my-lg-5 py-4 py-lg-5 position-relative m-auto container">
          <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
            <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
              Recent Transaction
            </h4>
          </div>
          <div className="list-group"></div>
        </section>
        <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
          <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
            <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
              Supported Crypto
            </h4>
          </div>
          <div className="c-supportedLogos d-flex align-items-center overflow-hidden position-relative">
            <div className="c-supportedLogos__logos d-flex">
              <img
                alt="Bitcoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/btc.svg"
              />
              <img
                alt="Ethereum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/eth.svg"
              />
              <img
                alt="BNB Smart Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bnb.svg"
              />
              <img
                alt="Solana"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/sol.svg"
              />
              <img
                alt="Uniswap"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/uni.svg"
              />
              <img
                alt="Cardano"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ada.svg"
              />
              <img
                alt="BinanceUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/busd.svg"
              />
              <img
                alt="Dai(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/dai.svg"
              />
              <img
                alt="Dogecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/doge.svg"
              />
              <img
                alt="Chainlink"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/link.svg"
              />
              <img
                alt="Litecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ltc.svg"
              />
              <img
                alt="Tron"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/trx.svg"
              />
              <img
                alt="USD Coin(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/usdc.svg"
              />
              <img
                alt="Tether USD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/usdt.svg"
              />
              <img
                alt="PancakeSwap(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/cake.svg"
              />
              <img
                alt="Polygon(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/matic.svg"
              />
              <img
                alt="1inch(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/1inch.svg"
              />
              <img
                alt="Fantom(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ftm.svg"
              />
              <img
                alt="Monero"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/xmr.svg"
              />
              <img
                alt="SHIBA INU(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/shib.svg"
              />
              <img
                alt="Pepe(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/pepe.svg"
              />
              <img
                alt="Floki Inu(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/floki.svg"
              />
              <img
                alt="Arbitrum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/arb.svg"
              />
              <img
                alt="Aave(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/aave.svg"
              />
              <img
                alt="AVAX C-Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/avax.svg"
              />
              <img
                alt="ApeCoin(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ape.svg"
              />
              <img
                alt="SushiSwap(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/sushi.svg"
              />
              <img
                alt="Polkadot"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/dot.svg"
              />
              <img
                alt="Render Token(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/rndr.svg"
              />
              <img
                alt="Toncoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ton.svg"
              />
              <img
                alt="UNUS SED LEO(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/leo.svg"
              />
              <img
                alt="Radiant Capital(ARB)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/rdnt.svg"
              />
              <img
                alt="VeChain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/vet.svg"
              />
              <img
                alt="Verasity"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/vra.svg"
              />
              <img
                alt="Aptos"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/apt.svg"
              />
              <img
                alt="Algorand"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/algo.svg"
              />
              <img
                alt="Alchemy Pay(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ach.svg"
              />
              <img
                alt="WOO Network(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/woo.svg"
              />
              <img
                alt="THORChain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/rune.svg"
              />
              <img
                alt="Synapse(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/syn.svg"
              />
              <img
                alt="Enjin(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/enj.svg"
              />
              <img
                alt="Lido DAO(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ldo.svg"
              />
              <img
                alt="Compound(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/comp.svg"
              />
              <img
                alt="NEAR Protocol(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/near.svg"
              />
              <img
                alt="Dogelon Mars(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/elon.svg"
              />
              <img
                alt="VeThor Token"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/vtho.svg"
              />
              <img
                alt="Ethereum Name Service(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ens.svg"
              />
              <img
                alt="Curve DAO Token(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/crv.svg"
              />
              <img
                alt="Biswap(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bsw.svg"
              />
              <img
                alt="Celo"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/celo.svg"
              />
              <img
                alt="DeFiChain(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/1inch.svg"
              />
              <img
                alt="Lido Staked ETH"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/steth.svg"
              />
              <img
                alt="Harmony"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/one.svg"
              />
              <img
                alt="Trust Wallet Token"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/twt.svg"
              />
              <img
                alt="Balancer"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bal.svg"
              />
              <img
                alt="Bitcoin Cash"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bch.svg"
              />
              <img
                alt="TrueUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/tusd.svg"
              />
              <img
                alt="Dash"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/dash.svg"
              />
              <img
                alt="Ethereum classNameic"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/etc.svg"
              />
              <img
                alt="Huobi token(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ht.svg"
              />
              <img
                alt="Bitcoin SV"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bsv.svg"
              />
              <img
                alt="Sui"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/sui.svg"
              />
              <img
                alt="Unibot(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/unibot.svg"
              />
              <img
                alt="Wrapped Bitcoin(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/wbtc.svg"
              />
              <img
                alt="EthereumPoW"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ethw.svg"
              />
              <img
                alt="PayPal USD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/pyusd.svg"
              />
              <img
                alt="The Sandbox(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/sand.svg"
              />
              <img
                alt="Decentraland(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/mana.svg"
              />
              <img
                alt="Tether EURt(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/usdt.svg"
              />
              <img
                alt="Optimism"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/op.svg"
              />
              <img
                alt="dYdX(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/dydx.svg"
              />
              <img
                alt="Axie Infinity(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/axs.svg"
              />
              <img
                alt="Ocean Protocol(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ocean.svg"
              />
              <img
                alt="Bittorent(TRC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/btt.svg"
              />
              <img
                alt="Maker(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/mkr.svg"
              />
              <img
                alt="Ravencoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/rvn.svg"
              />
              <img
                alt="IoTeX"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/iotex.svg"
              />
              <img
                alt="Celsius(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/cel.svg"
              />
              <img
                alt="IDEX(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/idex.svg"
              />
              <img
                alt="Cartesi(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ctsi.svg"
              />
              <img
                alt="Open Campus(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/edu.svg"
              />
              <img
                alt="Flux(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/flux.svg"
              />
              <img
                alt="Kyber Network(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/knc.svg"
              />
              <img
                alt="Ergo"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/erg.svg"
              />
              <img
                alt="BakeryToken(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bake.svg"
              />
              <img
                alt="NULS(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/nuls.svg"
              />
              <img
                alt="XRP"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/xrp.svg"
              />
              <img
                alt="Injective Protocol"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/inj.svg"
              />
              <img
                alt="EOS"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/eos.svg"
              />
              <img
                alt="Cosmos"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/atom.svg"
              />
              <img
                alt="Pirate Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/arrr.svg"
              />
              <img
                alt="ArbDoge AI"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/aidoge.svg"
              />
              <img
                alt="Filecoin(FIL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/fil.svg"
              />
              <img
                alt="Stellar(XLM)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/xlm.svg"
              />
              <img
                alt="Cronos(CRO)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/cro.svg"
              />
              <img
                alt="Tezos"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/xtz.svg"
              />
              <img
                alt="Hedera Hashgraph"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/hbar.svg"
              />
              <img
                alt="Bonk(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbonk.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbonk.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbonk.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Saber(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fsbr.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fsbr.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fsbr.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Raydium(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fray.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fray.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fray.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Bitcoin Vault"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbtcv.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbtcv.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbtcv.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Bitcoin Gold"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/btg.svg"
              />
              <img
                alt="Quant(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fqnt.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fqnt.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fqnt.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Tether Gold(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/xaut.svg"
              />
              <img
                alt="KuCoin Token(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/kcs.svg"
              />
              <img
                alt="BNB (BeaconChain)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bnb.svg"
              />
              <img
                alt="The Graph(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/grt.svg"
              />
              <img
                alt="Internet Computer"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/icp.svg"
              />
              <img
                alt="Core DAO"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fcore.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fcore.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fcore.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Maple(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fmpl.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fmpl.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fmpl.png&amp;w=256&amp;q=75"
              />
              <img
                alt="DappRadar(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fradar.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fradar.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fradar.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Basic Attention Token(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bat.svg"
              />
              <img
                alt="Biconomy(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bico.svg"
              />
              <img
                alt="Bone ShibaSwap(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bone.svg"
              />
              <img
                alt="Jupiter(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fjup.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fjup.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fjup.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Marinade(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fmnde.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fmnde.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fmnde.png&amp;w=256&amp;q=75"
              />
              <img
                alt="JITO(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fjto.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fjto.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fjto.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Coin98(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/c98.svg"
              />
              <img
                alt="Hifi Finance(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fhifi.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fhifi.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fhifi.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Harvest Finance(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Ffarm.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Ffarm.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Ffarm.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Gods Unchained(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fgods.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fgods.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fgods.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Ultra(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/uos.svg"
              />
              <img
                alt="Zcash"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/zec.svg"
              />
              <img
                alt="BEAM(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbeamx.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbeamx.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbeamx.png&amp;w=256&amp;q=75"
              />
              <img
                alt="ChainGPT(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fcgpt.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fcgpt.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fcgpt.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Sei"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/sei.svg"
              />
              <img
                alt="Serum(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fsrmsol.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fsrmsol.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fsrmsol.png&amp;w=256&amp;q=75"
              />
              <img
                alt="analoS(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fanalos.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fanalos.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fanalos.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Kaspa"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/kas.svg"
              />
              <img
                alt="dogwifhat(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fwif.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fwif.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fwif.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Memecoin(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fmeme.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fmeme.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fmeme.png&amp;w=256&amp;q=75"
              />
              <img
                alt="AVAX"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/avax.svg"
              />
              <img
                alt="NEXO(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/nexo.svg"
              />
              <img
                alt="DigiByte"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/dgb.svg"
              />
              <img
                alt="Golem(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/glm.svg"
              />
              <img
                alt="Ankr(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fankr.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fankr.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fankr.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Pundu(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fpundu.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fpundu.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fpundu.png&amp;w=256&amp;q=75"
              />
              <img
                alt="BOOK OF MEME(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbome.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbome.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbome.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Turbo(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fturbo.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fturbo.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fturbo.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Brett(BASE)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbrett.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbrett.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbrett.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Degen(BASE)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fdegen.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fdegen.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fdegen.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Notcoin(TON)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fnot.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fnot.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fnot.png&amp;w=256&amp;q=75"
              />
              <img
                alt="ZetaChain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fzeta.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fzeta.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fzeta.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Omni Network(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fomni.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fomni.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fomni.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Myro(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fmyro.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fmyro.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fmyro.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Ben the Dog(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbendog.webp&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbendog.webp&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbendog.webp&amp;w=256&amp;q=75"
              />
              <img
                alt="cat in a dogs world(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fmew.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fmew.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fmew.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Orca(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Forca.webp&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Forca.webp&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Forca.webp&amp;w=256&amp;q=75"
              />
              <img
                alt="Wen(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fwen.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fwen.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fwen.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Zeus Network(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fzeus.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fzeus.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fzeus.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Popcat(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fpopcat.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fpopcat.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fpopcat.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Mantra(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fom.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fom.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fom.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Quickswap(MATIC)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/quick.svg"
              />
              <img
                alt="Neiro(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fneiro.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fneiro.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fneiro.png&amp;w=256&amp;q=75"
              />
              <img
                alt="FIGHT TO MAGA(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Ffight.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Ffight.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Ffight.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Banana Gun(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbanana.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbanana.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbanana.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Blast"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fblast.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fblast.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fblast.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Neiro Ethereum(ETH)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fneiroeth.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fneiroeth.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fneiroeth.png&amp;w=256&amp;q=75"
              />
              <img
                alt="DOGS(TON)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/dogs.svg"
              />
              <img
                alt="BEERCOIN(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbeer.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbeer.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbeer.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Daddy Tate(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fdaddy.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fdaddy.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fdaddy.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Catizen(TON)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fcati.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fcati.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fcati.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Goatseus Maximus(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/goat.svg"
              />
              <img
                alt="Peanut the Squirrel(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fpnut.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fpnut.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fpnut.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Bitcoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/btc.svg"
              />
              <img
                alt="Ethereum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/eth.svg"
              />
              <img
                alt="BNB Smart Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bnb.svg"
              />
              <img
                alt="Solana"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/sol.svg"
              />
              <img
                alt="Uniswap"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/uni.svg"
              />
              <img
                alt="Cardano"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ada.svg"
              />
              <img
                alt="BinanceUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/busd.svg"
              />
              <img
                alt="Dai(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/dai.svg"
              />
              <img
                alt="Dogecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/doge.svg"
              />
              <img
                alt="Chainlink"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/link.svg"
              />
              <img
                alt="Litecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ltc.svg"
              />
              <img
                alt="Tron"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/trx.svg"
              />
              <img
                alt="USD Coin(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/usdc.svg"
              />
              <img
                alt="Tether USD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/usdt.svg"
              />
              <img
                alt="PancakeSwap(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/cake.svg"
              />
              <img
                alt="Polygon(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/matic.svg"
              />
              <img
                alt="1inch(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/1inch.svg"
              />
              <img
                alt="Fantom(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ftm.svg"
              />
              <img
                alt="Monero"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/xmr.svg"
              />
              <img
                alt="SHIBA INU(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/shib.svg"
              />
              <img
                alt="Pepe(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/pepe.svg"
              />
              <img
                alt="Floki Inu(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/floki.svg"
              />
              <img
                alt="Arbitrum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/arb.svg"
              />
              <img
                alt="Aave(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/aave.svg"
              />
              <img
                alt="AVAX C-Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/avax.svg"
              />
              <img
                alt="ApeCoin(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ape.svg"
              />
              <img
                alt="SushiSwap(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/sushi.svg"
              />
              <img
                alt="Polkadot"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/dot.svg"
              />
              <img
                alt="Render Token(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/rndr.svg"
              />
              <img
                alt="Toncoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ton.svg"
              />
              <img
                alt="UNUS SED LEO(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/leo.svg"
              />
              <img
                alt="Radiant Capital(ARB)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/rdnt.svg"
              />
              <img
                alt="VeChain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/vet.svg"
              />
              <img
                alt="Verasity"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/vra.svg"
              />
              <img
                alt="Aptos"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/apt.svg"
              />
              <img
                alt="Algorand"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/algo.svg"
              />
              <img
                alt="Alchemy Pay(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ach.svg"
              />
              <img
                alt="WOO Network(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/woo.svg"
              />
              <img
                alt="THORChain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/rune.svg"
              />
              <img
                alt="Synapse(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/syn.svg"
              />
              <img
                alt="Enjin(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/enj.svg"
              />
              <img
                alt="Lido DAO(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ldo.svg"
              />
              <img
                alt="Compound(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/comp.svg"
              />
              <img
                alt="NEAR Protocol(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/near.svg"
              />
              <img
                alt="Dogelon Mars(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/elon.svg"
              />
              <img
                alt="VeThor Token"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/vtho.svg"
              />
              <img
                alt="Ethereum Name Service(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ens.svg"
              />
              <img
                alt="Curve DAO Token(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/crv.svg"
              />
              <img
                alt="Biswap(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bsw.svg"
              />
              <img
                alt="Celo"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/celo.svg"
              />
              <img
                alt="DeFiChain(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/1inch.svg"
              />
              <img
                alt="Lido Staked ETH"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/steth.svg"
              />
              <img
                alt="Harmony"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/one.svg"
              />
              <img
                alt="Trust Wallet Token"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/twt.svg"
              />
              <img
                alt="Balancer"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bal.svg"
              />
              <img
                alt="Bitcoin Cash"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bch.svg"
              />
              <img
                alt="TrueUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/tusd.svg"
              />
              <img
                alt="Dash"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/dash.svg"
              />
              <img
                alt="Ethereum classNameic"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/etc.svg"
              />
              <img
                alt="Huobi token(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ht.svg"
              />
              <img
                alt="Bitcoin SV"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bsv.svg"
              />
              <img
                alt="Sui"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/sui.svg"
              />
              <img
                alt="Unibot(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/unibot.svg"
              />
              <img
                alt="Wrapped Bitcoin(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/wbtc.svg"
              />
              <img
                alt="EthereumPoW"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ethw.svg"
              />
              <img
                alt="PayPal USD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/pyusd.svg"
              />
              <img
                alt="The Sandbox(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/sand.svg"
              />
              <img
                alt="Decentraland(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/mana.svg"
              />
              <img
                alt="Tether EURt(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/usdt.svg"
              />
              <img
                alt="Optimism"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/op.svg"
              />
              <img
                alt="dYdX(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/dydx.svg"
              />
              <img
                alt="Axie Infinity(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/axs.svg"
              />
              <img
                alt="Ocean Protocol(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ocean.svg"
              />
              <img
                alt="Bittorent(TRC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/btt.svg"
              />
              <img
                alt="Maker(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/mkr.svg"
              />
              <img
                alt="Ravencoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/rvn.svg"
              />
              <img
                alt="IoTeX"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/iotex.svg"
              />
              <img
                alt="Celsius(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/cel.svg"
              />
              <img
                alt="IDEX(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/idex.svg"
              />
              <img
                alt="Cartesi(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/ctsi.svg"
              />
              <img
                alt="Open Campus(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/edu.svg"
              />
              <img
                alt="Flux(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/flux.svg"
              />
              <img
                alt="Kyber Network(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/knc.svg"
              />
              <img
                alt="Ergo"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/erg.svg"
              />
              <img
                alt="BakeryToken(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bake.svg"
              />
              <img
                alt="NULS(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/nuls.svg"
              />
              <img
                alt="XRP"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/xrp.svg"
              />
              <img
                alt="Injective Protocol"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/inj.svg"
              />
              <img
                alt="EOS"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/eos.svg"
              />
              <img
                alt="Cosmos"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/atom.svg"
              />
              <img
                alt="Pirate Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/arrr.svg"
              />
              <img
                alt="ArbDoge AI"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/aidoge.svg"
              />
              <img
                alt="Filecoin(FIL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/fil.svg"
              />
              <img
                alt="Stellar(XLM)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/xlm.svg"
              />
              <img
                alt="Cronos(CRO)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/cro.svg"
              />
              <img
                alt="Tezos"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/xtz.svg"
              />
              <img
                alt="Hedera Hashgraph"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/hbar.svg"
              />
              <img
                alt="Bonk(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbonk.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbonk.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbonk.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Saber(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fsbr.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fsbr.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fsbr.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Raydium(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fray.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fray.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fray.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Bitcoin Vault"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbtcv.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbtcv.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbtcv.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Bitcoin Gold"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/btg.svg"
              />
              <img
                alt="Quant(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fqnt.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fqnt.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fqnt.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Tether Gold(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/xaut.svg"
              />
              <img
                alt="KuCoin Token(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/kcs.svg"
              />
              <img
                alt="BNB (BeaconChain)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bnb.svg"
              />
              <img
                alt="The Graph(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/grt.svg"
              />
              <img
                alt="Internet Computer"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/icp.svg"
              />
              <img
                alt="Core DAO"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fcore.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fcore.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fcore.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Maple(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fmpl.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fmpl.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fmpl.png&amp;w=256&amp;q=75"
              />
              <img
                alt="DappRadar(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fradar.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fradar.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fradar.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Basic Attention Token(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bat.svg"
              />
              <img
                alt="Biconomy(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bico.svg"
              />
              <img
                alt="Bone ShibaSwap(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/bone.svg"
              />
              <img
                alt="Jupiter(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fjup.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fjup.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fjup.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Marinade(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fmnde.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fmnde.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fmnde.png&amp;w=256&amp;q=75"
              />
              <img
                alt="JITO(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fjto.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fjto.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fjto.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Coin98(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/c98.svg"
              />
              <img
                alt="Hifi Finance(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fhifi.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fhifi.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fhifi.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Harvest Finance(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Ffarm.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Ffarm.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Ffarm.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Gods Unchained(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fgods.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fgods.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fgods.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Ultra(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/uos.svg"
              />
              <img
                alt="Zcash"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/zec.svg"
              />
              <img
                alt="BEAM(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbeamx.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbeamx.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbeamx.png&amp;w=256&amp;q=75"
              />
              <img
                alt="ChainGPT(BEP20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fcgpt.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fcgpt.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fcgpt.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Sei"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/sei.svg"
              />
              <img
                alt="Serum(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fsrmsol.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fsrmsol.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fsrmsol.png&amp;w=256&amp;q=75"
              />
              <img
                alt="analoS(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fanalos.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fanalos.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fanalos.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Kaspa"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/kas.svg"
              />
              <img
                alt="dogwifhat(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fwif.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fwif.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fwif.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Memecoin(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fmeme.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fmeme.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fmeme.png&amp;w=256&amp;q=75"
              />
              <img
                alt="AVAX"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/avax.svg"
              />
              <img
                alt="NEXO(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/nexo.svg"
              />
              <img
                alt="DigiByte"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/dgb.svg"
              />
              <img
                alt="Golem(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/glm.svg"
              />
              <img
                alt="Ankr(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fankr.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fankr.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fankr.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Pundu(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fpundu.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fpundu.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fpundu.png&amp;w=256&amp;q=75"
              />
              <img
                alt="BOOK OF MEME(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbome.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbome.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbome.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Turbo(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fturbo.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fturbo.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fturbo.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Brett(BASE)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbrett.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbrett.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbrett.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Degen(BASE)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fdegen.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fdegen.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fdegen.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Notcoin(TON)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fnot.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fnot.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fnot.png&amp;w=256&amp;q=75"
              />
              <img
                alt="ZetaChain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fzeta.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fzeta.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fzeta.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Omni Network(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fomni.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fomni.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fomni.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Myro(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fmyro.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fmyro.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fmyro.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Ben the Dog(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbendog.webp&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbendog.webp&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbendog.webp&amp;w=256&amp;q=75"
              />
              <img
                alt="cat in a dogs world(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fmew.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fmew.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fmew.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Orca(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Forca.webp&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Forca.webp&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Forca.webp&amp;w=256&amp;q=75"
              />
              <img
                alt="Wen(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fwen.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fwen.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fwen.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Zeus Network(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fzeus.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fzeus.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fzeus.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Popcat(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fpopcat.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fpopcat.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fpopcat.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Mantra(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fom.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fom.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fom.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Quickswap(MATIC)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/quick.svg"
              />
              <img
                alt="Neiro(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fneiro.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fneiro.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fneiro.png&amp;w=256&amp;q=75"
              />
              <img
                alt="FIGHT TO MAGA(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Ffight.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Ffight.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Ffight.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Banana Gun(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbanana.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbanana.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbanana.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Blast"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fblast.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fblast.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fblast.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Neiro Ethereum(ETH)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fneiroeth.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fneiroeth.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fneiroeth.png&amp;w=256&amp;q=75"
              />
              <img
                alt="DOGS(TON)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/dogs.svg"
              />
              <img
                alt="BEERCOIN(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fbeer.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fbeer.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fbeer.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Daddy Tate(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fdaddy.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fdaddy.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fdaddy.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Catizen(TON)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fcati.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fcati.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fcati.png&amp;w=256&amp;q=75"
              />
              <img
                alt="Goatseus Maximus(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/assets/tokens/goat.svg"
              />
              <img
                alt="Peanut the Squirrel(SOL)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fpnut.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fpnut.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2Fassets%2Ftokens%2Fpnut.png&amp;w=256&amp;q=75"
              />
            </div>
          </div>
        </section>
        <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
          <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
            <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
              Latest Updates
            </h4>
          </div>
          <div className="gy-4 gy-md-0 row row-cols-md-3 row-cols-1">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div style={{ color: "transparent" }}>
                    <img
                      alt="Pepe"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      style={{ color: "transparent" }}
                      src="/assets/tokens/goat.svg"
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="d-flex flex-column align-items-center justify-content-start gap-3 mb-0 card-title h5">
                    <span className="text-uppercase badge bg-primary">
                      New Release
                    </span>
                    <p className="h3 mb-0 text-center">New Token Supported:</p>
                    <p className="text-primary text-center h3">
                      Goatseus Maximus(SOL)
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <p className="text-white-50 text-center mb-0">
                    Released:
                    {/* <!-- --> */}
                    07/01/25
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div style={{ color: "transparent" }}>
                    <img
                      alt="Pepe"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      style={{ color: "transparent" }}
                      srcSet="/_next/image?url=%2Fassets%2Ftokens%2Fpnut.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fassets%2Ftokens%2Fpnut.png&amp;w=256&amp;q=75 2x"
                      src="/_next/image?url=%2Fassets%2Ftokens%2Fpnut.png&amp;w=256&amp;q=75"
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="d-flex flex-column align-items-center justify-content-start gap-3 mb-0 card-title h5">
                    <span className="text-uppercase badge bg-primary">
                      New Release
                    </span>
                    <p className="h3 mb-0 text-center">New Token Supported:</p>
                    <p className="text-primary text-center h3">
                      Peanut the Squirrel(SOL)
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <p className="text-white-50 text-center mb-0">
                    Released:
                    {/* <!-- --> */}
                    07/01/25
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div style={{ transform: "none" }}>
                    <img
                      alt="Pepe"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      style={{ color: "transparent" }}
                      src="/assets/tokens/dai.svg"
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="d-flex flex-column align-items-center justify-content-start gap-3 mb-0 card-title h5">
                    <span className="text-uppercase badge bg-primary">
                      New Release
                    </span>
                    <p className="h3 mb-0 text-center">New Token Supported:</p>
                    <p className="text-primary text-center h3">Dai(MATIC)</p>
                  </div>
                </div>
                <div className="card-footer">
                  <p className="text-white-50 text-center mb-0">
                    Released:
                    {/* <!-- --> */}
                    07/01/25
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
