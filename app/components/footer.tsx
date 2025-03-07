import React from "react";
import Huzi from "../../public/huzi.png";
import Image from "next/image";
import Link from "next/link";

function footer() {
  return (
    <main
      className="scrollspy-example-2 bg-dark"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example3"
      data-bs-smooth-scroll="true"
    >
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-center pb-4 ps-2"
          id="footer"
        >
          <hr className="text-light flex-grow-1 me-3" />
          <h2 className="text-light text-center m-0" id="header-font-title">
            Contact
          </h2>
          <hr className="text-light flex-grow-1 ms-3" />
        </div>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <Image
              src={Huzi}
              alt="ALTERNATE"
              className="p-5 img-fluid rounded"
              width={600}
              height={500}
            />
          </div>
          <div className="col-md-6" id="body-font">
            <div className="h-100 p-5 ">
              <div>
                <Link className="text-secondary d-block" href="/">
                  Follow on Instagram
                </Link>
              </div>
              <div>
                <Link className="text-secondary d-block" href="/">
                  Follow on Twitter
                </Link>
              </div>
              <div>
                <Link className="text-secondary d-block" href="/">
                  Email me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default footer;
