import React, { useState } from "react";
import styles from "./Styling.module.css";
import minus from "../images/minus.png";
import plus from "../images/plus.png";
import camera from "../images/camera.png";

function ThirdPage() {
  const apartmentTypes = [
    "Flat",
    "One-Bedroom Apartment",
    "Three-Bedroom Apartment",
    "Two-Bedroom Apartment",
  ];

  const [nonAttached, setNonAttached] = useState(0);
  const [attached, setAttached] = useState(0);

  const incrementAttached = () => {
    setAttached(attached + 1);
  };

  const decrementAttached = () => {
    if (attached !== 0) setAttached(attached - 1);
  };

  const incrementNonAttached = () => {
    setNonAttached(nonAttached + 1);
  };

  const decrementNonAttached = () => {
    if (nonAttached !== 0) setNonAttached(nonAttached - 1);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      localStorage.setItem("selectedFileURL", base64String);
    };
    reader.readAsDataURL(file);
  };

  const [click, setClick] = useState(false);

  const setClicked = () => {
    setClick(!click);
  };

  const [selectedApartment, setSelectedApartment] = useState("");

  const handleApartmentChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedApartment(selectedValue);
    localStorage.setItem("selectedApartment", selectedValue);
  };

  const [bhk, setBhk] = useState("");

  localStorage.setItem("bhk", bhk);

  const [furnished, setFurnished] = useState("");

  localStorage.setItem("furnished", furnished);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: "800" }} className={styles.field}>
          Location Details
        </p>
        <p className={styles.border}></p>
      </div>

      <div>
        <p className={styles.field}>Area (in sq.ft)</p>
        <p>
          <input
            type="text"
            placeholder="Enter"
            className={styles.inputBox}
          ></input>
        </p>
      </div>

      <div style={{ marginTop: "4vh" }}>
        <p className={styles.field}>Apartment Type</p>
        <p>
          <select
            style={{
              width: "81.5vw",
            }}
            className={styles.inputBox}
            onChange={handleApartmentChange}
            value={selectedApartment}
          >
            <option value="" disabled selected>
              Select Apartment Type
            </option>
            {apartmentTypes.map((apartment) => (
              <option key={apartment} value={apartment}>
                {apartment}
              </option>
            ))}
          </select>
        </p>
      </div>

      <div style={{ marginTop: "4vh" }}>
        <p className={styles.field}>BHK Type</p>
        <div className={styles.bhk}>
          <p
            style={{
              color: bhk === "1 RK" ? "white" : "#AAAFB2",
              backgroundColor: bhk === "1 RK" ? "#574B7B" : "",
            }}
            className={styles.bhkBox}
            onClick={() => setBhk("1 RK")}
          >
            1 RK
          </p>
          <p
            style={{
              color: bhk === "1 BHK" ? "white" : "#AAAFB2",
              backgroundColor: bhk === "1 BHK" ? "#574B7B" : "",
            }}
            className={styles.bhkBox}
            onClick={() => setBhk("1 BHK")}
          >
            1 BHK
          </p>
          <p
            style={{
              color: bhk === "2 BHK" ? "white" : "#AAAFB2",
              backgroundColor: bhk === "2 BHK" ? "#574B7B" : "",
            }}
            className={styles.bhkBox}
            onClick={() => setBhk("2 BHK")}
          >
            2 BHK
          </p>
          <p
            style={{
              color: bhk === "3 BHK" ? "white" : "#AAAFB2",
              backgroundColor: bhk === "3 BHK" ? "#574B7B" : "",
            }}
            className={styles.bhkBox}
            onClick={() => setBhk("3 BHK")}
          >
            3 BHK
          </p>
          <p
            style={{
              color: bhk === "Other" ? "white" : "#AAAFB2",
              backgroundColor: bhk === "Other" ? "#574B7B" : "",
            }}
            className={styles.bhkBox}
            onClick={() => setBhk("Other")}
          >
            Other
          </p>
        </div>
      </div>

      <div style={{ marginTop: "-1vh" }}>
        <p className={styles.field}>No. of Bathrooms</p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Non Attached</p>
          <p style={{ display: "flex", marginTop: "0.5vh" }}>
            <img
              onClick={decrementNonAttached}
              src={minus}
              alt="minus"
              style={{ width: "15vw" }}
            ></img>
            <p style={{ marginLeft: "5vw", marginRight: "5vw" }}>
              {nonAttached}
            </p>
            <img
              onClick={incrementNonAttached}
              src={plus}
              alt="plus"
              style={{ width: "15vw" }}
            ></img>
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Attached</p>
          <p style={{ display: "flex", marginTop: "0.5vh" }}>
            <img
              onClick={decrementAttached}
              src={minus}
              alt="minus"
              style={{ width: "15vw" }}
            ></img>
            <p style={{ marginLeft: "5vw", marginRight: "5vw" }}>{attached}</p>
            <img
              onClick={incrementAttached}
              src={plus}
              alt="plus"
              style={{ width: "15vw" }}
            ></img>
          </p>
        </div>
      </div>

      <div>
        <p className={styles.field}>Furnishing Type</p>
        <p className={styles.threeBoxes}>
          <p
            className={styles.inputBox3}
            style={{
              color: furnished === "Fully" ? "white" : "#AAAFB2",
              backgroundColor: furnished === "Fully" ? "#574B7B" : "",
            }}
            onClick={() => setFurnished("Fully")}
          >
            Fully
          </p>
          <p
            className={styles.inputBox3}
            style={{
              color: furnished === "Semi" ? "white" : "#AAAFB2",
              backgroundColor: furnished === "Semi" ? "#574B7B" : "",
            }}
            onClick={() => setFurnished("Semi")}
          >
            Semi
          </p>
          <p
            className={styles.inputBox3}
            style={{
              color: furnished === "None" ? "white" : "#AAAFB2",
              backgroundColor: furnished === "None" ? "#574B7B" : "",
            }}
            onClick={() => setFurnished("None")}
          >
            None
          </p>
        </p>
      </div>

      <div>
        <p className={styles.field}>Property Images/Videos</p>

        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded"
            className={styles.uploadedImage}
          />
        ) : (
          <div className={styles.box} onClick={setClicked}>
            <img
              src={camera}
              alt="camera"
              style={{ height: "3vh", width: "7vw", marginTop: "4vh" }}
            ></img>
            <p className={styles.addText}>Add media to get 5x more response</p>
            <p className={styles.addText} style={{ fontSize: "12px" }}>
              90% buyers contact on properties with media
            </p>
          </div>
        )}

        <input
          style={{ display: click ? "" : "none" }}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default ThirdPage;
