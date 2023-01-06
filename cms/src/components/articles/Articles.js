import "./Articles.scss";
import Context from "./../../context/App.context";
import { useContext } from "react";

const Articles = () => {
  const context = useContext(Context);
  const { articlesState, articlesText } = context;

  return (
    <div className="articles-container">
      {articlesState && (
        <div className="articles">
          <h3>Pare słów o mnie: </h3>
          <p className="fewWordsAboutU">
            {articlesText ? articlesText : "Tu będzie opis ciebie!"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Articles;
