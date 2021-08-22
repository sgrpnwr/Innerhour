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
    setList1(e.target.value);
  };
  const List2Changehandler = (e) => {
    setList2(e.target.value);
  };
  const onlyinList = (A, B) => {
    if (A[0] === ",") {
      A = A.substring(1);
    }

    if (A[A.length - 1] === ",") {
      A = A.substring(0, A.length - 1);
    }
    if (B[0] === ",") {
      B = B.substring(1);
    }

    if (B[B.length - 1] === ",") {
      B = B.substring(0, B.length - 1);
    }
    return A.split(",")
      .map((item) => item.trim())
      .map((item) => item.toLowerCase())
      .concat(B.split(",").map((item) => item.trim()))
      .map((item) => item.toLowerCase())
      .filter((item) => {
        return !B.split(",")
          .map((item) => item.trim())
          .map((item) => item.toLowerCase())
          .includes(item);
      });
  };
  const commoninlist = (A, B) => {
    return A.split(",")
      .map((item) => item.trim())
      .map((item) => item.toLowerCase())
      .filter((item) => {
        return B.split(",")
          .map((item) => item.trim())
          .map((item) => item.toLowerCase())
          .includes(item);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setV1([...new Set(onlyinList(list1, list2))].filter((item) => item !== ""));
    setV2([...new Set(onlyinList(list2, list1))].filter((item) => item !== ""));

    setV3(
      [
        ...new Set(
          list1
            .split(",")
            .map((item) => item.trim())
            .map((item) => item.toLowerCase())
            .concat(list2.split(",").map((item) => item.trim()))
            .map((item) => item.toLowerCase())
        ),
      ].filter((item) => item !== "")
    );
    setSubmitted(true);
    setV4(
      [...new Set(commoninlist(list1, list2))].filter((item) => item !== "")
    );
  };
  console.log(V1, V2, V3, V4);
  console.log(V1.map((item) => item.toLowerCase()));
  return (
    <div className={style.myform}>
      <form onSubmit={submitHandler}>
        <div class="form-group">
          <label for="formGroupExampleInput">
            Enter List 1 items( separated by commas )
          </label>
          <input
          autoComplete="off"
            required
            onChange={List1Changehandler}
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="eg. 1, 2, 3, 4, string1,string2"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">
            Enter List 2 items( separated by commas )
          </label>
          <input
          autoComplete="off"
            required
            onChange={List2Changehandler}
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="eg. 1, 2, 3, 4, string1,string2"
          />
        </div>
        <button className={style.formbtn} type="submit">
          Compute
        </button>
        
      </form>
      <hr></hr>
      <Result V1={V1} V2={V2} V3={V3} V4={V4} isSubmitted={isSubmitted} />
    </div>
  );
}

export default Form;
// {(V2.split(",").length)<=1?<span>Nothing here!</span>: <span>{V2}</span> }
// {V4.join()}
