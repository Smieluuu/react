import "./Footer.scss";
import Context from "./../../context/App.context";
import { useContext } from "react";

const Footer = () => {
  const context = useContext(Context);
  const { footerState, footerText, footerRoundingState } = context;

  return (
    <div className={footerRoundingState ? "footer-rounding" : ""}>
      {footerState && (
        <div
          className={
            "footer-container " + (footerRoundingState ? "footer-rounding" : "")
          }
        >
          <p>
            <b>{footerText ? footerText : "Nazwa Firmy"}</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default Footer;
