import React, { useState } from "react";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import styles from "./Styling.module.css";
import { useNavigate } from "react-router-dom";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();

  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      navigate("/publish");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    } else {
      navigate("/");
    }
  };

  const renderComponent = () => {
    switch (currentStep) {
      case 1:
        return <SecondPage />;
      case 2:
        return <ThirdPage />;
      case 3:
        return <FourthPage />;
      case 4:
        return <FifthPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <button
          style={{
            border: currentStep === 1 ? "1px solid #FED807" : "",
            color:
              currentStep === 1 ? "#FED807" : currentStep > 1 ? "black" : "",
            backgroundColor:
              currentStep === 1 ? "white" : currentStep > 1 ? "#FED807" : "",
          }}
          className={styles.numbers}
          onClick={() => setCurrentStep(1)}
        >
          1
        </button>

        <div
          style={{ border: currentStep > 1 ? "2px solid #FED807" : "" }}
          className={styles.borderStepper}
        ></div>

        <button
          style={{
            border: currentStep === 2 ? "1px solid #FED807" : "",
            color:
              currentStep === 2 ? "#FED807" : currentStep > 2 ? "black" : "",
            backgroundColor:
              currentStep === 2 ? "white" : currentStep > 2 ? "#FED807" : "",
          }}
          className={styles.numbers}
          onClick={() => setCurrentStep(2)}
        >
          2
        </button>

        <div
          style={{ border: currentStep > 2 ? "2px solid #FED807" : "" }}
          className={styles.borderStepper}
        ></div>

        <button
          style={{
            border: currentStep === 3 ? "1px solid #FED807" : "",
            color:
              currentStep === 3 ? "#FED807" : currentStep > 3 ? "black" : "",
            backgroundColor:
              currentStep === 3 ? "white" : currentStep > 3 ? "#FED807" : "",
          }}
          className={styles.numbers}
          onClick={() => setCurrentStep(3)}
        >
          3
        </button>

        <div
          style={{ border: currentStep > 3 ? "2px solid #FED807" : "" }}
          className={styles.borderStepper}
        ></div>

        <button
          style={{
            border: currentStep === 4 ? "1px solid #FED807" : "",
            color:
              currentStep === 4 ? "#FED807" : currentStep > 4 ? "black" : "",
            backgroundColor:
              currentStep === 4 ? "white" : currentStep > 4 ? "#FED807" : "",
          }}
          className={styles.numbers}
          onClick={() => setCurrentStep(4)}
        >
          4
        </button>
      </div>

      <div>{renderComponent()}</div>

      <div className={styles.btnSection} style={{ marginTop: "7vh" }}>
        <button className={styles.backBtn} onClick={handleBack}>
          BACK
        </button>
        <button className={styles.continueBtn} onClick={handleContinue}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Stepper;
