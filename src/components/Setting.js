import React, { useEffect, useState } from "react";
import "./components.scss";
import { useSelector, useDispatch } from "react-redux";
import FetchButton from "./FetchButton";
import axios from "axios";

const Settings = () => {
  const [options, setOptions] = useState(null);

  const loading = useSelector((state) => state.options.loading);

  const questionCategory = useSelector(
    (state) => state.options.question_category
  );
  const questionDifficulty = useSelector(
    (state) => state.options.question_difficulty
  );
  const questionType = useSelector((state) => state.options.question_type);
  const questionAmount = useSelector(
    (state) => state.options.amount_of_questions
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const apiUrl = `https://opentdb.com/api_category.php`;

    const handleLoadingChange = (value) => {
      dispatch({
        type: "CHANGE_LOADING",
        loading: value,
      });
    };
    handleLoadingChange(true);
    axios.get(apiUrl).then((response) => {
      handleLoadingChange(false);
      setOptions(response.data.trivia_categories);
      console.log(response);
    });
  }, [setOptions, dispatch]);

  const handleCategoryChange = (event) => {
    dispatch({
      type: "CHANGE_CATEGORY",
      question_category: event.target.value,
    });
  };

  const handleDifficultyChange = (event) => {
    dispatch({
      type: "CHANGE_DIFFICULTY",
      question_difficulty: event.target.value,
    });
  };

  const handleTypeChange = (event) => {
    dispatch({
      type: "CHANGE_TYPE",
      question_type: event.target.value,
    });
  };

  const handleAmountChange = (event) => {
    dispatch({
      type: "CHANGE_AMOUNT",
      amount_of_questions: event.target.value,
    });
  };

  if (!loading) {
    return (
      <div className="setting-wrapper">
        <h1 className="header">Quiz App</h1>
        <div className="options">
          <h2 className="sub-header">Category:</h2>
          <select
            className="selection"
            value={questionCategory}
            onChange={handleCategoryChange}
          >
            <option>All</option>
            {options &&
              options.length &&
              options.map((option) => (
                <option value={option.id} key={option.id}>
                  {option.name}
                </option>
              ))}
          </select>
        </div>

        <div className="options">
          <h2 className="sub-header">Difficulty:</h2>
          <select
            className="selection"
            value={questionDifficulty}
            onChange={handleDifficultyChange}
          >
            <option value="" key="difficulty-0">
              All
            </option>
            <option value="easy" key="difficulty-1">
              Easy
            </option>
            <option value="medium" key="difficulty-2">
              Medium
            </option>
            <option value="hard" key="difficulty-3">
              Hard
            </option>
          </select>
        </div>

        <div className="options">
          <h2 className="sub-header">Question Type:</h2>
          <select
            className="selection"
            value={questionType}
            onChange={handleTypeChange}
          >
            <option value="" key="type-0">
              All
            </option>
            <option value="multiple" key="type-1">
              Multiple Choice
            </option>
            <option value="boolean" key="type-2">
              True/False
            </option>
          </select>
        </div>

        <div className="options">
          <h2 className="sub-header">Amount of Questions:</h2>
          <input
            className="selection"
            value={questionAmount}
            onChange={handleAmountChange}
          />
        </div>

        <FetchButton text="Get started!" />
      </div>
    );
  }

  return <p>LOADING...</p>;
};
export default Settings;
