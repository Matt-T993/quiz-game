import React, { useEffect, useState } from "react";
import "./setting.scss";
import axios from "axios";

const Setting = () => {
  const [options, setOptions] = useState(null);
  const [questionCategory, setQuestionCategory] = useState("");
  const [questionDiffculty, setQuestionDiffculty] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [questionAmount, setQuestionAmount] = useState();

  useEffect(() => {
    const apiUrl = `https://opentdb.com/api_category.php`;

    axios.get(apiUrl).then((response) => {
      setOptions(response.trivia_categories);
      console.log(response);
    });
  }, [setOptions]);

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setQuestionCategory(e.target.value);
  };

  const handleDiffcultyChange = (e) => {
    e.preventDefault();
    setQuestionDiffculty(e.target.value);
  };
  const handleTypeChange = (e) => {
    e.preventDefault();
    setQuestionType(e.target.value);
  };
  const handleAmountChange = (e) => {
    e.preventDefault();
    setQuestionAmount(e.target.value);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <div>
        <h2>Select Category:</h2>
        <select value={questionCategory} onChange={handleCategoryChange}>
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
    </div>
  );
};

export default Setting;
