import "./FinalScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { questionsActions } from "../../store/questionsSlice";
import { useNavigate } from "react-router";

const FinalScreen = () => {
  const { score } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(questionsActions.reset());
    navigate("/");
  };

  return (
    <div className="final_container">
      <h3>Final Score : {score}</h3>
      <button className="ans-btn" onClick={clickHandler}>
        Play Again
      </button>
    </div>
  );
};

export default FinalScreen;
