import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("Uppercase was clicked." + text);
    setText(text.toUpperCase());
  };
  const handelLowClick = () => {
    // console.log("Uppercase was clicked." + text);
    setText(text.toLowerCase());
  };
  const handelClearClick = () => {
    // console.log("Uppercase was clicked." + text);
    setText("");
  };
  const handelOnChange = (event) => {
    // console.log("Uppercase was clicked.");
    setText(event.target.value);
  };

  //Copy text
  const handleCopy = () => {
    console.log("I am copy");
    let text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
  };
  //Give extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            id="myBox"
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handelLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handelClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          <b>{text.length === 0 ? 0 : text.split(" ").length} </b>
          words and <b>{text.length} </b>
          characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
