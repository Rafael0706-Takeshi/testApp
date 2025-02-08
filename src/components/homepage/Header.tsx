import * as React from "react";

import CustomCard1 from "../CustomCard1";

export default function Header(props: any) {
  const cardData1 = [
    {
      pic: "./assets/images/privacy-driven.webp",
      headText: "Privacy-Driven",
      bodyText: "Anonymized exchange with no sign-ups or limits.",
    },
    {
      pic: "./assets/images/security.webp",
      headText: "Seamless Exchange",
      bodyText:
        "Fast and effective exchange between wallets and cryptocurrencies.",
    },
    {
      pic: "./assets/images/wallet.webp",
      headText: "Zero Wallet Limits",
      bodyText: "No wallet or amount limitations on all exchanges through us!",
    },
  ];
  return (
    <div>
      <header className="c-hero px-4 px-lg-5 mb-4 mb-md-5 d-flex flex-column justify-content-center align-items-center position-relative z-3 overflow-hidden">
        <div className="c-hero__container d-flex flex-column justify-content-center align-items-center position-relative z-3 container">
          <h1 className="c-hero__title fw-bold text-center mb-3 mb-lg-4">
            <span className="text-primary">Privacy Driven</span>
            <br />
            <span className="text-gradient">Crypto Exchange</span>
          </h1>
          <p className="fs-5 text-muted text-center lh-lg mb-0">
            Trade BTC, ETH, MATIC, and 100+ other cryptocurrencies with seamless
            security and privacy. No sign-up or limits.
          </p>
          <a className="fs-5 text-muted text-center lh-lg mb-0" href="/token">
            Powered by our Veil utility token.
          </a>
          <a className="h5 mt-3 mt-lg-4 text-white" href="/#exchange">
            <span className="text-decoration-underline link-offset-3">
              Try the Exchange Now
              {/* <!-- --> */}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linecap="square"
                stroke-linejoin="miter"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
              >
                <line x1="2" y1="12" x2="15" y2="12"></line>
                <polygon points="15 17 15 7 22 12 15 17"></polygon>
              </g>
            </svg>
          </a>
          <div className="g-3 w-100 mt-4 mt-lg-5 row row-cols-sm-2 row-cols-1">
            <div className="col">
              <div className="border rounded-3 bg-medium p-3 text-center">
                <p className="mb-2 text-uppercase small">
                  Lifetime Volume Swapped
                </p>
                <p className="mb-0 h4 fw-bolder text-primary">
                  ${/* <!-- --> */}
                  1,000,000
                </p>
              </div>
            </div>
            <div className="col">
              <div className="border rounded-3 bg-medium p-3 text-center">
                <p className="mb-2 text-uppercase small">Past 24-Hour Volume</p>
                <p className="mb-0 h4 fw-bolder text-primary">
                  ${/* <!-- --> */}
                  100,000
                </p>
              </div>
            </div>
          </div>
        </div>
        <video
          className="videoTag position-absolute w-100 top-0 start-0 end-0 bottom-0 z-n1 object-fit-cover h-100"
          autoPlay
          loop
          muted
          poster="/herobackground.webp"
        >
          <source src="./herobackground.webm" type="video/webm" />
        </video>
      </header>
      {/* We are all about privacy and security */}

      <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
        <div
          className="d-flex justify-content-center align-items-center mb-4 mb-lg-5"
          style={{
            opacity: 0.6,
            transform: "translateY(50px) scale(0.2) translateZ(0)",
          }}
        >
          <h1
            className="h1 text-gradient text-center position-relative z-3 d-inline"
            // style={{ fontSize: "100px" }}
          >
            We are all about privacy and security
          </h1>
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
    </div>
  );
}
