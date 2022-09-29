import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import "./components.scss";
import FetchButton from "./FetchButton";

const FinalScreen = () => {
  const score = useSelector((state) => state.score);

  const dispatch = useDispatch();

  const replay = () => {
    dispatch({
      type: "SET_INDEX",
      index: 0,
    });

    dispatch({
      type: "SET_SCORE",
      score: 0,
    });
  };

  const settings = () => {
    dispatch({
      type: "SET_QUESTIONS",
      questions: [],
    });

    dispatch({
      type: "SET_SCORE",
      score: 0,
    });
  };

  return (
    <div className="screen-wrapper">
      <h3 className="title">Final Score:</h3>
      <h1>{score}</h1>
      <div className="btn-wrapper">
        <Button handleClick={replay} label="Try again" />

        <FetchButton text="Fetch new questions" />
        <Button handleClick={settings} label="Back to settings" />
      </div>
    </div>
  );
};
export default FinalScreen;
