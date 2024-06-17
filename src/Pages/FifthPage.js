import React, { useState } from "react";
import styles from "./Styling.module.css";
import femaleicon from "../images/femaleIcon.png";
import maleicon from "../images/maleIcon.png";
import othericon from "../images/otherIcon.png";

function FifthPage() {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState("");
  const [selectedOccupation, setSelectedOccupation] = useState("");
  const [selectedFoodPreference, setSelectedFoodPreference] = useState("");
  const [selectedPets, setSelectedPets] = useState("");
  const [selectedSmoking, setSelectedSmoking] = useState("");
  const [selectedDrinking, setSelectedDrinking] = useState("");
  const [selectedPartying, setSelectedPartying] = useState("");

  const getOptionStyle = (selected, current) => {
    return selected === current
      ? { backgroundColor: "#574B7B", color: "white" }
      : { backgroundColor: "", color: "#AAAFB2" };
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
          Your roommate preferences
        </p>
        <p className={styles.border}></p>
      </div>

      <div>
        <p className={styles.field}>Who are you looking for?</p>
        <div className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{ ...getOptionStyle(selectedGender, "Female"), fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedGender("Female")}
          >
            <img src={femaleicon} alt="femaleicon" className={styles.icons}></img>
            Female
          </p>

          <p
            style={{ ...getOptionStyle(selectedGender, "Male"), fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedGender("Male")}
          >
            <img src={maleicon} alt="maleicon" className={styles.icons}></img>
            Male
          </p>

          <p
            style={{ ...getOptionStyle(selectedGender, "Other"), fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedGender("Other")}
          >
            <img src={othericon} alt="othericon" className={styles.icons}></img>
            Other
          </p>
        </div>
      </div>

      <div style={{ marginTop: "-2.7vh" }}>
        <p className={styles.field}>Your roommate should be?</p>
        <div className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{ ...getOptionStyle(selectedMaritalStatus, "Married"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedMaritalStatus("Married")}
          >
            Married
          </p>

          <p
            style={{ ...getOptionStyle(selectedMaritalStatus, "Unmarried"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedMaritalStatus("Unmarried")}
          >
            Unmarried
          </p>

          <p
            style={{ ...getOptionStyle(selectedMaritalStatus, "Any"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedMaritalStatus("Any")}
          >
            Any
          </p>
        </div>
      </div>

      <div style={{ marginTop: "-2.7vh" }}>
        <p className={styles.field}>Your roommate’s occupation should be?</p>
        <div className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{ ...getOptionStyle(selectedOccupation, "Student"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedOccupation("Student")}
          >
            Student
          </p>

          <p
            style={{ ...getOptionStyle(selectedOccupation, "Working"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedOccupation("Working")}
          >
            Working
          </p>

          <p
            style={{ ...getOptionStyle(selectedOccupation, "AnyOccupation"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedOccupation("AnyOccupation")}
          >
            Any
          </p>
        </div>
      </div>

      <div style={{ marginTop: "-2.7vh" }}>
        <p className={styles.field}>What is your food preferences?</p>
        <div className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{ ...getOptionStyle(selectedFoodPreference, "Veg"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedFoodPreference("Veg")}
          >
            Veg
          </p>

          <p
            style={{ ...getOptionStyle(selectedFoodPreference, "NonVeg"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedFoodPreference("NonVeg")}
          >
            Non Veg
          </p>

          <p
            style={{ ...getOptionStyle(selectedFoodPreference, "AnyFood"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedFoodPreference("AnyFood")}
          >
            Any
          </p>
        </div>
      </div>

      <div style={{ marginTop: "-2.7vh" }}>
        <p className={styles.field}>Are you okay with pets?</p>
        <div className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{ ...getOptionStyle(selectedPets, "YesPets"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedPets("YesPets")}
          >
            Yes
          </p>

          <p
            style={{ ...getOptionStyle(selectedPets, "NoPets"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedPets("NoPets")}
          >
            No
          </p>

          <p
            style={{ ...getOptionStyle(selectedPets, "DontMindPets"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedPets("DontMindPets")}
          >
            Don’t mind
          </p>
        </div>
      </div>

      <div style={{ marginTop: "-2.7vh" }}>
        <p className={styles.field}>Are you okay with smoking?</p>
        <div className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{ ...getOptionStyle(selectedSmoking, "YesSmoking"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedSmoking("YesSmoking")}
          >
            Yes
          </p>

          <p
            style={{ ...getOptionStyle(selectedSmoking, "NoSmoking"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedSmoking("NoSmoking")}
          >
            No
          </p>

          <p
            style={{ ...getOptionStyle(selectedSmoking, "DontMindSmoking"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedSmoking("DontMindSmoking")}
          >
            Don’t mind
          </p>
        </div>
      </div>

      <div style={{ marginTop: "-2.7vh" }}>
        <p className={styles.field}>Are you okay with drinking?</p>
        <div className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{ ...getOptionStyle(selectedDrinking, "YesDrinking"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedDrinking("YesDrinking")}
          >
            Yes
          </p>

          <p
            style={{ ...getOptionStyle(selectedDrinking, "NoDrinking"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedDrinking("NoDrinking")}
          >
            No
          </p>

          <p
            style={{ ...getOptionStyle(selectedDrinking, "DontMindDrinking"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedDrinking("DontMindDrinking")}
          >
            Don’t mind
          </p>
        </div>
      </div>

      <div style={{ marginTop: "-2.7vh" }}>
        <p className={styles.field}>Are you okay with partying?</p>
        <div className={styles.threeBoxes} style={{ marginTop: "-2.7vh" }}>
          <p
            style={{ ...getOptionStyle(selectedPartying, "YesPartying"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedPartying("YesPartying")}
          >
            Yes
          </p>

          <p
            style={{ ...getOptionStyle(selectedPartying, "NoPartying"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedPartying("NoPartying")}
          >
            No
          </p>

          <p
            style={{ ...getOptionStyle(selectedPartying, "DontMindPartying"), textAlign: "center", fontSize: "15px" }}
            className={styles.gender}
            onClick={() => setSelectedPartying("DontMindPartying")}
          >
            Don’t mind
          </p>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
