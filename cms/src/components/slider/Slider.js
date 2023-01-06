import "./Slider.scss";
import Context from "./../../context/App.context";
import { useContext } from "react";

const Slider = () => {
  const context = useContext(Context);
  const {
    sliderState,
    sliderLanguageText,
    sliderSkillsText,
    sliderEducationText,
    sliderExperienceText,
    phoneNumber,
    emailAddress,
    sliderImg,
    sliderEmployeeName,
  } = context;

  return (
    <div className="slider-container">
      {sliderState && (
        <div className="slider">
          {sliderImg && (
            <div className="slider-employee">
              <h1>
                {sliderEmployeeName ? sliderEmployeeName : "Imię i Nazwisko"}
              </h1>
              <img src={sliderImg} height="100px" width="100px" alt="zdjęcie" />
            </div>
          )}
          <div className="slider-text">
            <h2>Candidate Information</h2>
          </div>
          <div>
            <div>
              <p>Languages: {sliderLanguageText}</p>
            </div>
            <div>
              <p>Skills: {sliderSkillsText}</p>
            </div>
            <div>
              <p>Education: {sliderEducationText}</p>
            </div>
            <div>
              <p>Experience: {sliderExperienceText}</p>
            </div>
            <div className="slider-contact">
              <p>Phone: {phoneNumber}</p>
              <p>Email: {emailAddress}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
