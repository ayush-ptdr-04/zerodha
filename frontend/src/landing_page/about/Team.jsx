import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">Aayush</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Aayush Patidar</h4>
          <h6>MERN Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            This is Aayush Patidar. I am from Khargone. I am currently pursuing
            my final year of B.Tech from Chameli Devi Group of Institutions,
            Indore, in the CSIT branch.
          </p>
          <p>
            I have completed the MERN stack and I am currently working on a
            video conferencing web application to enhance my MERN skills. Along
            with this, I am also learning Java and Data Structures & Algorithms.
          </p>
          <p>Playing chess is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
