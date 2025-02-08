import * as React from "react";

export default function CustomCard1(props: any) {
  return (
    <div>
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
              src={props.pic}
            />
          </div>
        </div>
        <div className="p-3 p-lg-4 card-body">
          <h3>{props.headText}</h3>
          <p className="text-muted mb-0">{props.bodyText}</p>
        </div>
      </div>
    </div>
  );
}
