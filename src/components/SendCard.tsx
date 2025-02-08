import * as React from "react";

export default function SendCard(props: any) {
  return (
    <div>
      <div>
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
                    src="/assets/images/image (8).webp"
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
    </div>
  );
}
