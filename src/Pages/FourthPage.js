import React, { useState } from "react";
import styles from "./Styling.module.css";
import security from "../images/security.png";
import gym from "../images/gym.png";
import ac from "../images/ac.png";
import playground from "../images/playground.png";
import club from "../images/club.png";
import gas from "../images/gas.png";

function FourthPage() {
  const [rent, setRent] = useState(null);
  const [downpayment, setDownpayment] = useState(null);

  localStorage.setItem("rent", rent);
  localStorage.setItem("downpayment", downpayment);

  const [ava, setava] = useState(null);

  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const handleAmenityClick = (amenity) => {
    setSelectedAmenity(amenity);
  };

  const getAmenityStyle = (amenity) => {
    if (selectedAmenity === amenity) {
      return {
        border: "1px solid #FED807",
        backgroundColor: "#FFFDF0",
      };
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: "800" }} className={styles.field}>
          Pricing
        </p>
        <p className={styles.border}></p>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className={styles.field}>Deposit</p>
          <p>
            <input
              type="text"
              placeholder="0"
              className={styles.amountBox}
              value={downpayment}
              onChange={(e) => setDownpayment(e.target.value)}
            ></input>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className={styles.field}>Rent Per Month</p>
          <p>
            <input
              type="text"
              placeholder="0"
              className={styles.amountBox}
              value={rent}
              onChange={(e) => setRent(e.target.value)}
            ></input>
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: "800" }} className={styles.field}>
          Schedule
        </p>
        <p className={styles.border}></p>
      </div>

      <div>
        <p className={styles.field}>Availability</p>
        <p className={styles.availability}>
          <p
            style={{
              color: ava === "everyday" ? "white" : "",
              backgroundColor: ava === "everyday" ? "#574B7B" : "",
            }}
            className={styles.availabilityBox}
            onClick={() => setava("everyday")}
          >
            <p>Everyday</p>
            <p
              style={{
                color: ava === "everyday" ? "white" : "",
              }}
              className={styles.day}
            >
              Mon-Sun
            </p>
          </p>
          <p
            style={{
              color: ava === "weekday" ? "white" : "",
              backgroundColor: ava === "weekday" ? "#574B7B" : "",
            }}
            className={styles.availabilityBox}
            onClick={() => setava("weekday")}
          >
            <p>Weekday</p>
            <p
              style={{
                color: ava === "weekday" ? "white" : "",
              }}
              className={styles.day}
            >
              Mon-Fri
            </p>
          </p>

          <p
            style={{
              color: ava === "weekend" ? "white" : "",
              backgroundColor: ava === "weekend" ? "#574B7B" : "",
            }}
            className={styles.availabilityBox}
            onClick={() => setava("weekend")}
          >
            <p>Weekend </p>
            <p
              style={{
                color: ava === "weekend" ? "white" : "",
              }}
              className={styles.day}
            >
              Sat-Sun
            </p>
          </p>
        </p>

        <p className={styles.field}>Schedule Time</p>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-2vh",
          }}
        >
          <p>
            <input
              type="text"
              placeholder="From"
              className={styles.fromTo}
            ></input>
          </p>
          <p>
            <input
              type="text"
              placeholder="To"
              className={styles.fromTo}
            ></input>
          </p>
        </p>

        <p style={{ marginLeft: "-1vw" }}>
          <input type="checkbox"></input>{" "}
          <span className={styles.available}>Available All Day</span>
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: "800" }} className={styles.field}>
          Amenities
        </p>
        <p className={styles.border}></p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2vh",
        }}
      >
        <div
          className={styles.amenitiesBox}
          style={getAmenityStyle("security")}
          onClick={() => handleAmenityClick("security")}
        >
          <img src={security} alt="security"></img>
          <p
            style={{ color: selectedAmenity === "security" ? "#FED807" : "" }}
            className={styles.amenitiesText}
          >
            Security
          </p>
        </div>

        <div
          className={styles.amenitiesBox}
          style={getAmenityStyle("gym")}
          onClick={() => handleAmenityClick("gym")}
        >
          <img src={gym} alt="gym"></img>
          <p
            style={{ color: selectedAmenity === "gym" ? "#FED807" : "" }}
            className={styles.amenitiesText}
          >
            Gym
          </p>
        </div>

        <div
          className={styles.amenitiesBox}
          style={getAmenityStyle("ac")}
          onClick={() => handleAmenityClick("ac")}
        >
          <img src={ac} alt="ac"></img>
          <p
            style={{ color: selectedAmenity === "ac" ? "#FED807" : "" }}
            className={styles.amenitiesText}
          >
            AC
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2.5vh",
        }}
      >
        <div
          className={styles.amenitiesBox}
          style={getAmenityStyle("playground")}
          onClick={() => handleAmenityClick("playground")}
        >
          <img src={playground} alt="playground"></img>
          <p
            style={{ color: selectedAmenity === "playground" ? "#FED807" : "" }}
            className={styles.amenitiesText}
          >
            Playground
          </p>
        </div>

        <div
          className={styles.amenitiesBox}
          style={getAmenityStyle("club")}
          onClick={() => handleAmenityClick("club")}
        >
          <img src={club} alt="club"></img>
          <p
            style={{ color: selectedAmenity === "club" ? "#FED807" : "" }}
            className={styles.amenitiesText}
          >
            Club
          </p>
        </div>

        <div
          className={styles.amenitiesBox}
          style={getAmenityStyle("gas")}
          onClick={() => handleAmenityClick("gas")}
        >
          <img src={gas} alt="gas"></img>
          <p
            style={{ color: selectedAmenity === "gas" ? "#FED807" : "" }}
            className={styles.amenitiesText}
          >
            Gas
          </p>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
