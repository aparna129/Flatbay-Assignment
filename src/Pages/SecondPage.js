import React from "react";
import styles from "./Styling.module.css";

function SecondPage() {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const cities = [
    "Ahmedabad",
    "Bengaluru",
    "Chandigarh",
    "Chennai",
    "Coimbatore",
    "Delhi",
    "Gurgaon",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Kanpur",
    "Kochi",
    "Kolkata",
    "Lucknow",
    "Mumbai",
    "Nagpur",
    "Noida",
    "Patna",
    "Pune",
    "Surat",
    "Thiruvananthapuram",
    "Vadodara",
    "Vijayawada",
    "Visakhapatnam",
  ];

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
        <p className={styles.field}>
          Address Line 1<span style={{ color: "red" }}>*</span>
        </p>
        <p>
          <input
            type="text"
            placeholder="Enter"
            className={styles.inputBox}
          ></input>
        </p>
      </div>

      <div>
        <p className={styles.field}>Address Line 2</p>
        <p>
          <input
            type="text"
            placeholder="Enter"
            className={styles.inputBox}
          ></input>
        </p>
      </div>

      <div>
        <p className={styles.field}>State</p>
        <p>
          <select
            style={{
              width: "81.5vw",
            }}
            className={styles.inputBox}
          >
            <option value="" disabled selected>
              Select state
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </p>
      </div>

      <div>
        <p className={styles.field}>City</p>
        <p>
          <select
            style={{
              width: "81.5vw",
            }}
            className={styles.inputBox}
          >
            <option value="" disabled selected>
              Select city
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </p>
      </div>

      <div>
        <p className={styles.field}>Locality</p>
        <p>
          <input
            type="text"
            placeholder="Enter"
            className={styles.inputBox}
          ></input>
        </p>
      </div>

      <div>
        <p className={styles.field}>Pincode</p>
        <p>
          <input
            type="text"
            placeholder="Enter"
            className={styles.inputBox}
          ></input>
        </p>
      </div>

    
    </div>
  );
}

export default SecondPage;
