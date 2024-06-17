import React from "react";
import styles from "./Styling.module.css";
import maleicon from "../images/maleIcon.png";
import femaleicon from "../images/femaleIcon.png";
import othericon from "../images/otherIcon.png";
import areaicon from "../images/areaicon.png";
import flat from "../images/flat.png";

function PublishPage() {
  const name = localStorage.getItem("name");

  const apartment = localStorage.getItem("selectedApartment");

  const bhk = localStorage.getItem("bhk");

  const furnish = localStorage.getItem("furnished");

  const rent = localStorage.getItem("rent");

  const downpayment = localStorage.getItem("downpayment");

  const gender = localStorage.getItem("gender");

  return (
    <div>
      <div>
        <p className={styles.text} style={{ marginTop: "7vh" }}>
          You’re almost there!
        </p>
      </div>

      <div className={styles.publishedBox}>
        <img
          src={flat}
          alt="uploadedimage"
          className={styles.publishedImage}
        ></img>

        <p style={{ marginLeft: "4vw", display: "flex" }}>
          <span
            style={{
              fontSize: "25px",
              fontWeight: "400",
            }}
          >
            {name}
          </span>
          <img
            src={
              gender === "Male"
                ? maleicon
                : gender === "Female"
                ? femaleicon
                : othericon
            }
            alt="gender"
            style={{ marginLeft: "2vw" }}
          ></img>
        </p>

        <p style={{ marginLeft: "4vw", display: "flex" }}>
          <img
            src={areaicon}
            alt="areaicon"
            style={{ height: "4vh", width: "6vw", marginTop: "1.5vh" }}
          ></img>
          <p className={styles.details1}>
            {apartment} | {bhk} | {furnish} Furnished
          </p>
        </p>

        <p style={{ marginLeft: "5vw", fontSize: "17px", fontWeight: "500" }}>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginRight: "2vw",
            }}
          >
            ₹{rent}/ Month
          </span>
          ₹{downpayment} downpayment
        </p>
      </div>
    </div>
  );
}

export default PublishPage;
