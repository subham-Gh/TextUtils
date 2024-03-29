import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("Uppercase was clicked." + text);
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };
  const handelLowClick = () => {
    // console.log("Uppercase was clicked." + text);
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };
  const handelClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
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
    props.showAlert("Text copied", "success");
  };
  //Give extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
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
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
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
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
