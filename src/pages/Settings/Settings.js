import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Error from "../../components/Error/Error";
import SelectField from "../../components/SelectField/SelectField";
import Spinner from "../../components/Spinner/Spinner";
import TextField from "../../components/TextField/TextField";
import useAxios from "../../hooks/useAxios";
import { questionsActions } from "../../store/questionsSlice";
import "./Settings.css";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataFields, setDataFields] = useState({
    category: "",
    difficulty: "",
    type: "",
    amount: "",
  });
  const { response, error, loading } = useAxios({ url: "api_category.php" });
  if (loading) {
    return <Spinner />;
  }
  if (error !== "") {
    return <Error />;
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const changeHandler = (event) => {
    setDataFields((prev) => {
      return { ...prev, ...event };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const { id } = response.trivia_categories.find(
    //   (category) => category.name === dataFields.category
    // );
    dispatch(questionsActions.change({ dataFields }));
    // dispatch(questionsActions.changeCategory(id));
    navigate("/questions");
  };
  return (
    <div className="settings-container">
      <form onSubmit={submitHandler}>
        <SelectField
          options={response.trivia_categories}
          label="Category"
          name="category"
          value={dataFields.category}
          changeHandle={changeHandler}
        />
        <SelectField
          options={difficultyOptions}
          label="Difficulty"
          name="difficulty"
          value={dataFields.difficulty}
          changeHandle={changeHandler}
        />
        <SelectField
          options={typeOptions}
          label="Type"
          name="type"
          value={dataFields.type}
          changeHandle={changeHandler}
        />
        <TextField
          label="Number of questions"
          name="amount"
          changeHandle={changeHandler}
          value={dataFields.amount}
        />
        <button className="btn">Get Started</button>
      </form>
    </div>
  );
};

export default Settings;
