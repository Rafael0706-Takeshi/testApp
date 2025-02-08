import * as React from "react";

export default function CustomCard1(props: any) {
  return (
    <div>
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
              src={props.pic}
            />
          </div>
        </div>
        <div className="p-3 p-lg-4 card-body">
          <div className="d-flex flex-column align-items-center justify-content-start gap-3 mb-0 card-title h5">
            <span className="text-uppercase badge bg-primary">
              {props.badgeText}
            </span>
            <p className="h3 mb-0 text-center">{props.headLabel}</p>
            <p className="text-primary text-center h3">{props.headText}</p>
          </div>
        </div>
        <div className="card-footer">
          <p className="text-white-50 text-center mb-0">{props.bottomText}</p>
        </div>
      </div>
    </div>
  );
}
