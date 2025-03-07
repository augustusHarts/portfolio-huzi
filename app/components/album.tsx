"use client"; // Required for Next.js App Router

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Album() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <main
      id="body-font"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example3"
      data-bs-smooth-scroll="true"
      className="scrollspy-example-2"
    >
      <section className="py-5 text-center container" id="home">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Album example</h1>
            <p className="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2">
                Main call to action
              </a>
              <a href="#" className="btn btn-secondary my-2 mx-2">
                Secondary action
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-dark">
        <div className="container" id="projects">
          {/**Center "Projects" Text*/}
          <div className="d-flex align-items-center justify-content-center pb-4 ps-2">
            <hr className="text-light flex-grow-1 me-3" />
            <h2 className="text-light text-center m-0" id="header-font-title">
              Projects
            </h2>
            <hr className="text-light flex-grow-1 ms-3" />
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                  </svg>

                  <div className="card-body bg-dark text-light">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
