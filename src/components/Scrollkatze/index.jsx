import "./Atest.css";
import React, { useState } from "react";

import hund from "../../static/grand.webp";
import Katze from "../../static/mcis.png";
import Musiker from "../../static/study2020.svg";

const Application = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = (direction) => {
    let far = ($(".image-container").width() / 2) * direction;
    let pos = $(".image-container").scrollLeft() + far;
    $(".image-container").animate({ scrollLeft: pos }, 1000);
  };

  return (
    <div className="main">
      <div className="wrapper">
        <div className="image-container">
          <div className="image">
            <img
              src={Katze}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="image">
            <img
              src={hund}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="image">
            <img
              src={Musiker}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>{" "}
          {/* <div className="image">
            <img
              src={Katze}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="image">
            <img
              src={hund}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="image">
            <img
              src={Musiker}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>{" "}
          <div className="image">
            <img
              src={Katze}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="image">
            <img
              src={hund}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="image">
            <img
              src={Musiker}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>{" "}
          <div className="image">
            <img
              src={Katze}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="image">
            <img
              src={hund}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="image">
            <img
              src={Musiker}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>{" "}
          <div className="image">
            <img
              src={Katze}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="image">
            <img
              src={hund}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="image">
            <img
              src={Musiker}
              alt="توضیحات تصویر"
              style={{ width: "100%", height: "auto" }}
            />
          </div>{" "} */}
        </div>
      </div>
    </div>
  );
};

export default Application;
