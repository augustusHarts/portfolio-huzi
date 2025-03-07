import React from "react";
import Huzi from "../../public/huzi.png";
import Image from "next/image";

function about() {
  return (
    <main className="bg-dark">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center pb-4 ps-2">
          <hr className="text-light flex-grow-1 me-3" />
          <h2 className="text-light text-center m-0" id="header-font-title">
            About Me
          </h2>
          <hr className="text-light flex-grow-1 ms-3" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="h-100 p-5 bg-dark text-light" id="body-font">
              <h2>HI.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate nam expedita, quis atque voluptas ducimus voluptates
                blanditiis provident, sit quisquam eaque labore? Quam, molestiae
                fugiat necessitatibus commodi minima sapiente laudantium.
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique tenetur, reiciendis repellendus, beatae, earum culpa
                cum et consectetur rem rerum excepturi eum quasi omnis eligendi
                veritatis cumque iure harum. Recusandae?
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <Image
              src={Huzi}
              alt="ALTERNATE"
              className="p-5 img-fluid rounded"
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default about;
