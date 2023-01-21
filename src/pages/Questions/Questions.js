import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Spinner from "../../components/Spinner/Spinner";
import useAxios from "../../hooks/useAxios";
import { questionsActions } from "../../store/questionsSlice";
import "./Questions.css";

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const Questions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category, difficulty, type, amount, score } = useSelector(
    (state) => state.questions
  );
  let apiUrl = `api.php?amount=${amount || 10}`;

  if (category !== "") {
    apiUrl = apiUrl.concat(`&category=${category}`);
  }
  if (difficulty !== "") {
    apiUrl = apiUrl.concat(`&difficulty=${difficulty}`);
  }
  if (type !== "") {
    apiUrl = apiUrl.concat(`&type=${type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomNumber(response?.results.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  const clickHandler = (event) => {
    const question = response.results[questionIndex];
    if (event.target.innerText === question.correct_answer) {
      dispatch(questionsActions.changeScore());
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/finalScore");
    }
  };

  if (loading || !response) {
    return <Spinner />;
  }

  return (
    <div className="questions_container">
      <h4>Question {questionIndex + 1}</h4>
      <p>{decode(response.results[questionIndex].question)}</p>
      <div className="btn-group">
        {options.map((option, id) => (
          <button onClick={clickHandler} className="ans-btn" key={id}>
            {decode(option)}
          </button>
        ))}
      </div>
      <div className="score">
        Score: {score} / {response?.results.length}
      </div>
    </div>
  );
};

export default Questions;
