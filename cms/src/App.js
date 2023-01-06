import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./views/website";
import Admin from "./views/admin";
import "./App.scss";
import Context from "./context/App.context";

const App = () => {
  const { Provider } = Context;
  const [sliderState, setSliderState] = useState(true);
  const [sliderLanguageText, setSliderLanguageText] = useState("");
  const [sliderSkillsText, setSliderSkillsText] = useState("");
  const [sliderEducationText, setSliderEducationText] = useState("");
  const [sliderExperienceText, setSliderExperienceText] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [sliderImg, setSliderImg] = useState(
    "https://www.w3schools.com/howto/img_avatar.png"
  );
  const [sliderEmployeeName, setSliderEmployeeName] = useState("");
  const [footerState, setFooterState] = useState(true);
  const [footerText, setFooterText] = useState("");
  const [articlesState, setArticlesState] = useState(false);
  const [articlesText, setArticlesText] = useState("");
  const [footerRoundingState, setFooterRoundState] = useState(false);

  return (
    <div className="App">
      <Provider
        value={{
          // Slider
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
          // Articles
          articlesState,
          setArticlesState,
          articlesText,
          setArticlesText,
          // Footer
          footerState,
          setFooterState,
          footerText,
          setFooterText,
          footerRoundingState,
          setFooterRoundState,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Website />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
