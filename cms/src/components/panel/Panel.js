import "./Panel.scss";
import Context from "./../../context/App.context";
import { useContext } from "react";

const Panel = () => {
  const contextSlider = useContext(Context);
  const {
    sliderState,
    setSliderState,
    sliderLanguageText,
    setSliderLanguageText,
    sliderSkillsText,
    setSliderSkillsText,
    sliderEducationText,
    setSliderEducationText,
    sliderExperienceText,
    setSliderExperienceText,
    phoneNumber,
    setPhoneNumber,
    emailAddress,
    setEmailAddress,
    sliderImg,
    setSliderImg,
    sliderEmployeeName,
    setSliderEmployeeName,
  } = contextSlider;

  const contextArticles = useContext(Context);
  const { articlesState, setArticlesState, articlesText, setArticlesText } =
    contextArticles;

  const contextFooter = useContext(Context);
  const {
    footerState,
    setFooterState,
    footerText,
    setFooterText,
    footerRoundingState,
    setFooterRoundState,
  } = contextFooter;

  // slider

  const setSliderStateHandler = () => {
    setSliderState(!sliderState);
  };

  const setSliderLanguageTextHandler = (e) => {
    const text = e.target.value;

    setSliderLanguageText(text);
  };

  const setSliderSkillsTextHandler = (e) => {
    const text = e.target.value;

    setSliderSkillsText(text);
  };

  const setSliderEducationTextHandler = (e) => {
    const text = e.target.value;

    setSliderEducationText(text);
  };

  const setSliderExperienceTextHandler = (e) => {
    const text = e.target.value;

    setSliderExperienceText(text);
  };

  const setPhoneNumberHandler = (e) => {
    const text = e.target.value;

    setPhoneNumber(text);
  };

  const setEmailAddressHandler = (e) => {
    const text = e.target.value;

    setEmailAddress(text);
  };

  const setSliderImgHandler = (e) => {
    const img = e.target.value;

    setSliderImg(img);
  };

  const setSliderEmployeeNameHandler = (e) => {
    const name = e.target.value;

    setSliderEmployeeName(name);
  };

  //   articles

  const setArticlesStateHandler = () => {
    setArticlesState(!articlesState);
  };

  const setArticlesTextHandler = (e) => {
    const text = e.target.value;

    setArticlesText(text);
  };

  //   footer

  const setFooterStateHandler = () => {
    setFooterState(!footerState);
  };

  const setFooterTextHandler = (e) => {
    const text = e.target.value;

    setFooterText(text);
  };

  //   footer style

  const setFooterRoundHandler = () => {
    setFooterRoundState(!footerRoundingState);
  };

  // validation GDZIE ZROBIC FUNKCJE WALIDUJĄCE?

  return (
    <div className="panel-container">
      <h2>Panel Kontrolny</h2>
      <ul>
        {/* Slider */}
        <li>
          <p>Your Name</p>
          <input
            type="text"
            defaultChecked={sliderEmployeeName}
            onChange={setSliderEmployeeNameHandler}
          />
        </li>
        <li>
          <p>Slider</p>
          <input
            type="checkbox"
            defaultChecked={sliderState}
            onChange={setSliderStateHandler}
          />
        </li>
        <li>
          <p>Languages</p>
          <input
            type="text"
            defaultValue={sliderLanguageText}
            onChange={(e) => setSliderLanguageTextHandler(e)}
            placeholder="Type text..."
          />
        </li>
        <li>
          <p>Skills</p>
          <input
            type="text"
            defaultValue={sliderSkillsText}
            onChange={(e) => setSliderSkillsTextHandler(e)}
            placeholder="Type text..."
          />
        </li>
        <li>
          <p>Education</p>
          <input
            type="text"
            defaultValue={sliderEducationText}
            onChange={(e) => setSliderEducationTextHandler(e)}
            placeholder="Type text..."
          />
        </li>
        <li>
          <p>Experience</p>
          <input
            type="text"
            defaultValue={sliderExperienceText}
            onChange={(e) => setSliderExperienceTextHandler(e)}
            placeholder="Type text..."
          />
        </li>
        <li>
          <p>PhoneNumber</p>
          <input
            type="text"
            defaultValue={phoneNumber}
            onChange={(e) => setPhoneNumberHandler(e)}
            placeholder="Type text..."
          />
        </li>
        <li>
          <p>Email Address</p>
          <input
            type="text"
            defaultValue={emailAddress}
            onChange={(e) => setEmailAddressHandler(e)}
            placeholder="Type text..."
          />
        </li>
        <li>
          <p>Slider img link</p>
          <input
            type="text"
            defaultValue={sliderImg}
            onChange={(e) => setSliderImgHandler(e)}
            placeholder="Type link to img..."
          />
        </li>
        {/* Articles */}
        <li>
          <p>Articles</p>
          <input
            type="checkbox"
            defaultChecked={articlesState}
            onChange={setArticlesStateHandler}
          />
        </li>
        <li>
          <p>Describe yourself</p>
          <input
            type="text"
            defaultValue={articlesText}
            onChange={(e) => setArticlesTextHandler(e)}
            placeholder="Type text..."
          />
        </li>
        {/* Footer */}
        <li>
          <p>Footer</p>
          <input
            type="checkbox"
            defaultChecked={footerState}
            onChange={setFooterStateHandler}
          />
        </li>
        <li>
          <p>Footer Round</p>
          <input
            type="checkbox"
            defaultChecked={footerRoundingState}
            onChange={setFooterRoundHandler}
          />
        </li>
        <li>
          <p>Footer text</p>
          <input
            type="text"
            defaultValue={footerText}
            onChange={(e) => setFooterTextHandler(e)}
            placeholder="Type text..."
          />
        </li>
      </ul>
    </div>
  );
};

export default Panel;
