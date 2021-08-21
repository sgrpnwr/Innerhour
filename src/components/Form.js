import React, { useState } from "react";
import style from "./css/Form.module.css";
import Result from "./Result";

function Form() {
  const [list1, setList1] = useState("");
  const [list2, setList2] = useState("");
  const [V1, setV1] = useState([]);
  const [V2, setV2] = useState([]);
  const [V3, setV3] = useState([]);
  const [V4, setV4] = useState([]);
  const [isSubmitted, setSubmitted] = useState(false);

  const List1Changehandler = (e) => {
    console.log(e.target.value);
    setList1(e.target.value);
  };
  const List2Changehandler = (e) => {
    console.log(e.target.value);
    setList2(e.target.value);
  };
  const onlyinList = (A, B) => {
    return A.split(",")
      .map((item) => item.trim())
      .concat(B.split(",").map((item) => item.trim()))
      .filter((item) => {
        return !B.split(",")
          .map((item) => item.trim())
          .includes(item);
      });
  };
  const commoninlist = (A, B) => {
    return A.split(",")
      .map((item) => item.trim())
      .filter((item) => {
        return B.split(",")
          .map((item) => item.trim())
          .includes(item);
      });
  };
  console.log([...new Set(commoninlist(list1, list2))]);

  const submitHandler = (e) => {
    e.preventDefault();

    setV2([...new Set(onlyinList(list2, list1))]);
    setV1([...new Set(onlyinList(list1, list2))]);
    setV3(
      [
        ...new Set(
          list1
            .split(",")
            .map((item) => item.trim())
            .concat(list2.split(",").map((item) => item.trim()))
        ),
      ].map((item) => item.trim())
    );
    setSubmitted(true);
    setV4([...new Set(commoninlist(list1, list2))]);
  };

  return (
    <div className={style.myform}>
      <form onSubmit={submitHandler}>
        <div class="form-group">
          <label for="formGroupExampleInput">
            Enter List 1 items( separated by commas )
          </label>
          <input
            required
            onChange={List1Changehandler}
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">
            Enter List 2 items( separated by commas )
          </label>
          <input
            required
            onChange={List2Changehandler}
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
          />
        </div>
        <button className={style.formbtn} type="submit">
          Compute
        </button>
        <span className={style.note}>
          Note: All white spaces will be eliminated
        </span>
      </form>
      <hr></hr>
      <Result V1={V1} V2={V2} V3={V3} V4={V4} isSubmitted={isSubmitted}/>
    </div>
  );
}

export default Form;
// {(V2.split(",").length)<=1?<span>Nothing here!</span>: <span>{V2}</span> }
// {V4.join()}
