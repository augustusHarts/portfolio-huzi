"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Collapsible Content */}
      <div
        className="collapse"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
        <div className="bg-dark p-4">
          <div className="container">
            <div className="row">
              <div className="col-8 w-60 " id="body-font">
                <h5 className="text-body-emphasis h4">About</h5>
                <span className="text-body-secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolor minus, voluptate necessitatibus beatae iure adipisci
                  quas placeat alias assumenda illum quibusdam fugit cupiditate,
                  quia velit quam nulla natus expedita laborum? Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Dolor minus,
                  voluptate necessitatibus beatae iure adipisci.
                </span>
              </div>
              <div className="col-4 w-25 ps-4" id="body-font">
                <h5 className="text-body-emphasis h4">Contact</h5>
                <div>
                  <Link className="text-body-secondary d-block" href="/">
                    Follow on Instagram
                  </Link>
                </div>
                <div>
                  <Link className="text-body-secondary d-block" href="/">
                    Follow on Twitter
                  </Link>
                </div>
                <div>
                  <Link className="text-body-secondary d-block" href="/">
                    Email me
                  </Link>
                </div>
                <div>
                  <Link className="text-body-secondary d-block" href="#footer">
                    More...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={"navbar navbar-dark bg-dark"}>
        <div className="container">
          <span id="header-font-title" className="navbar-brand pb-2">
            Huzaifa Roomaney
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}
