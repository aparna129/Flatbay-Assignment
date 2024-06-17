import React, { useState } from "react";
import backarrow from "../images/backArrow.png";
import femaleicon from "../images/femaleIcon.png";
import maleicon from "../images/maleIcon.png";
import othericon from "../images/otherIcon.png";
import styles from "./Styling.module.css";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/steps");
  };

  const [name, setName] = useState(null);

  localStorage.setItem("name", name);

  const [gender, setGender] = useState(null);

  localStorage.setItem("gender", gender);

  const [food, setfood] = useState(null);
  const [pets, setpets] = useState(null);
  const [smoke, setsmoke] = useState(null);
  const [drink, setdrink] = useState(null);
  const [party, setparty] = useState(null);

  return (
    <div>
      <div className={styles.page1Section1}>
        <img className={styles.backarrow} src={backarrow} alt="backarrow" />
        <p className={styles.text}>Tell us about yourself!</p>
      </div>

      {/* Personal Details Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "-2vh",
        }}
      >
        <p style={{ fontWeight: "800" }} className={styles.field}>
          Personal Information
        </p>
        <p className={styles.border}></p>
      </div>

      <div>
        <p className={styles.field}>Full Name</p>
        <p>
          <input
            type="text"
            placeholder="Enter Full Name"
            className={styles.inputBox}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </p>
      </div>

      <div>
        <p className={styles.field}>Profession</p>
        <p>
          <input
            type="text"
            placeholder="Enter Profession"
            className={styles.inputBox}
          ></input>
        </p>
      </div>

      <div>
        <p className={styles.field}>Date Of Birth</p>
        <p className={styles.threeBoxes}>
          <input
            type="text"
            placeholder="DD"
            className={styles.inputBox3}
          ></input>

          <input
            type="text"
            placeholder="MM"
            className={styles.inputBox3}
          ></input>

          <input
            type="text"
            placeholder="YYYY"
            className={styles.inputBox3}
          ></input>
        </p>
      </div>

      <div>
        <p className={styles.field}>Gender</p>
        <p className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{
              color: gender === "Female" ? "white" : "#AAAFB2",
              backgroundColor: gender === "Female" ? "#574B7B" : "",
            }}
            className={styles.gender}
            onClick={() => setGender("Female")}
          >
            <img
              src={femaleicon}
              alt="femaleicon"
              className={styles.icons}
            ></img>
            Female
          </p>

          <p
            style={{
              color: gender === "Male" ? "white" : "#AAAFB2",
              backgroundColor: gender === "Male" ? "#574B7B" : "",
            }}
            className={styles.gender}
            onClick={() => setGender("Male")}
          >
            <img src={maleicon} alt="maleicon" className={styles.icons}></img>
            Male
          </p>

          <p
            style={{
              color: gender === "Other" ? "white" : "#AAAFB2",
              backgroundColor: gender === "Other" ? "#574B7B" : "",
            }}
            className={styles.gender}
            onClick={() => setGender("Other")}
          >
            <img src={othericon} alt="othericon" className={styles.icons}></img>{" "}
            Other
          </p>
        </p>
      </div>

      <div style={{ marginTop: "-2.7vh" }}>
        <p className={styles.field}>Let other’s know about you</p>
        <p>
          <input
            type="text"
            placeholder="Add Bio"
            className={styles.inputBox}
            style={{ paddingBottom: "10vh" }}
          ></input>
        </p>
      </div>

      <div style={{ display: "flex", marginTop: "-2vh" }}>
        <p style={{ fontWeight: "800" }} className={styles.field}>
          Your Interest
        </p>
        <p className={styles.border} style={{ width: "55%" }}></p>
      </div>

      <div>
        <p className={styles.field}>Food preferences</p>
        <p className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{
              color: food === "veg" ? "white" : "#AAAFB2",
              backgroundColor: food === "veg" ? "#574B7B" : "",
              paddingLeft: "0.8vw",
              paddingRight: "0.8vw",
            }}
            className={styles.inputBox3}
            onClick={() => setfood("veg")}
          >
            Veg
          </p>

          <p
            style={{
              color: food === "nonveg" ? "white" : "#AAAFB2",
              backgroundColor: food === "nonveg" ? "#574B7B" : "",
              paddingLeft: "0.8vw",
              paddingRight: "0.8vw",
            }}
            className={styles.inputBox3}
            onClick={() => setfood("nonveg")}
          >
            Non Veg
          </p>

          <p
            style={{
              color: food === "any" ? "white" : "#AAAFB2",
              backgroundColor: food === "any" ? "#574B7B" : "",
              paddingLeft: "0.8vw",
              paddingRight: "0.8vw",
            }}
            className={styles.inputBox3}
            onClick={() => setfood("any")}
          >
            Any
          </p>
        </p>
      </div>

      <div style={{ marginTop: "-2.7vh" }}>
        <p className={styles.field}>Pets</p>
        <p className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{
              color: pets === "yes" ? "white" : "#AAAFB2",
              backgroundColor: pets === "yes" ? "#574B7B" : "",
              paddingLeft: "0.8vw",
              paddingRight: "0.8vw",
            }}
            className={styles.inputBox3}
            onClick={() => setpets("yes")}
          >
            Yes
          </p>

          <p
            style={{
              color: pets === "no" ? "white" : "#AAAFB2",
              backgroundColor: pets === "no" ? "#574B7B" : "",
              paddingLeft: "0.8vw",
              paddingRight: "0.8vw",
            }}
            className={styles.inputBox3}
            onClick={() => setpets("no")}
          >
            No
          </p>

          <p
            style={{
              color: pets === "any" ? "white" : "#AAAFB2",
              backgroundColor: pets === "any" ? "#574B7B" : "",
              fontSize: "13px",
              height: "3.1vh",
              marginTop: "2.7vh",
              lineHeight: "3.1vh",
              paddingLeft: "0.8vw",
              paddingRight: "0.8vw",
            }}
            className={styles.inputBox3}
            onClick={() => setpets("any")}
          >
            Don’t mind
          </p>
        </p>
      </div>

      <div style={{ marginTop: "-2.7vh" }}>
        <p className={styles.field}>Smoking</p>
        <p className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{
              color: smoke === "yes" ? "white" : "#AAAFB2",
              backgroundColor: smoke === "yes" ? "#574B7B" : "",
              paddingLeft: "0.8vw",
              paddingRight: "0.8vw",
              fontSize: "14px",
              height: "3.2vh",
              lineHeight: "3.2vh",
              marginTop: "2.8vh",
            }}
            className={styles.inputBox3}
            onClick={() => setsmoke("yes")}
          >
            Regularly
          </p>

          <p
            style={{
              color: smoke === "no" ? "white" : "#AAAFB2",
              backgroundColor: smoke === "no" ? "#574B7B" : "",
              paddingLeft: "0.8vw",
              paddingRight: "0.8vw",
              fontSize: "14px",
              height: "3.2vh",
              lineHeight: "3.2vh",
              marginTop: "2.8vh",
            }}
            className={styles.inputBox3}
            onClick={() => setsmoke("no")}
          >
            Occasionally
          </p>

          <p
            style={{
              color: smoke === "any" ? "white" : "#AAAFB2",
              backgroundColor: smoke === "any" ? "#574B7B" : "",
            }}
            className={styles.inputBox3}
            onClick={() => setsmoke("any")}
          >
            Never
          </p>
        </p>
      </div>

      <div style={{ marginTop: "-2.7vh" }}>
        <p className={styles.field}>Drinking</p>
        <p className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{
              color: drink === "reg" ? "white" : "#AAAFB2",
              backgroundColor: drink === "reg" ? "#574B7B" : "",
              paddingLeft: "0.8vw",
              paddingRight: "0.8vw",
              fontSize: "14px",
              height: "3.2vh",
              lineHeight: "3.2vh",
              marginTop: "2.8vh",
            }}
            className={styles.inputBox3}
            onClick={() => setdrink("reg")}
          >
            Regularly
          </p>

          <p
            style={{
              color: drink === "occ" ? "white" : "#AAAFB2",
              backgroundColor: drink === "occ" ? "#574B7B" : "",
              paddingLeft: "0.8vw",
              paddingRight: "0.8vw",
              fontSize: "14px",
              height: "3.2vh",
              lineHeight: "3.2vh",
              marginTop: "2.8vh",
            }}
            className={styles.inputBox3}
            onClick={() => setdrink("occ")}
          >
            Occasionally
          </p>

          <p
            style={{
              color: drink === "nev" ? "white" : "#AAAFB2",
              backgroundColor: drink === "nev" ? "#574B7B" : "",
            }}
            className={styles.inputBox3}
            onClick={() => setdrink("nev")}
          >
            Never
          </p>
        </p>
      </div>

      <div style={{ marginTop: "-2.7vh" }}>
        <p className={styles.field}>Partying</p>
        <p className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{
              color: party === "reg" ? "white" : "#AAAFB2",
              backgroundColor: party === "reg" ? "#574B7B" : "",
              paddingLeft: "0.8vw",
              paddingRight: "0.8vw",
              fontSize: "14px",
              height: "3.2vh",
              lineHeight: "3.2vh",
              marginTop: "2.8vh",
            }}
            className={styles.inputBox3}
            onClick={() => setparty("reg")}
          >
            Regularly
          </p>

          <p
            style={{
              color: party === "occ" ? "white" : "#AAAFB2",
              backgroundColor: party === "occ" ? "#574B7B" : "",
              paddingLeft: "0.8vw",
              paddingRight: "0.8vw",
              fontSize: "14px",
              height: "3.2vh",
              lineHeight: "3.2vh",
              marginTop: "2.8vh",
            }}
            className={styles.inputBox3}
            onClick={() => setparty("occ")}
          >
            Occasionally
          </p>

          <p
            style={{
              color: party === "nev" ? "white" : "#AAAFB2",
              backgroundColor: party === "nev" ? "#574B7B" : "",
            }}
            className={styles.inputBox3}
            onClick={() => setparty("nev")}
          >
            Never
          </p>
        </p>
      </div>

      <div className={styles.btnSection}>
        <button className={styles.backBtn}>BACK</button>
        <button onClick={handleContinue} className={styles.continueBtn}>
          CONTINUE
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
