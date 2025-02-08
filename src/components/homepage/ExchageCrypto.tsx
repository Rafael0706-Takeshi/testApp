import * as React from "react";
import SendCard from "../SendCard";
import ReceiveCard from "../ReceiveCard";

export default function ExchageCrypto(props: any) {
  return (
    <div>
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
              <SendCard />
            </div>
            <div className="col-12 col-md-6">
              <ReceiveCard />
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
                <input required type="checkbox" className="form-check-input" />
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
    </div>
  );
}
