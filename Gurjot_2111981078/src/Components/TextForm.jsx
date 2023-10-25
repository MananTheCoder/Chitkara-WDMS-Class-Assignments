import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TextForm(props) {
  const [Text, setText] = useState("");
  const handleOnChange = (event) => {
    console.log("You have changed text in textarea");
    setText(event.target.value);
  };

  const toastobj = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const Uppercase = () => {
    console.log("you have clicked on convert to uppercase");
    let uptext = Text.toUpperCase();
    setText(uptext);
    toast.success(" Successfully converted to Uppercase", toastobj);
  };
  const Lowercase = () => {
    console.log("you have clicked on convert to lowercase");
    let lowtext = Text.toLowerCase();
    setText(lowtext);
    toast.success(" Successfully converted to Lowercase", toastobj);
  };
  const clearText = () => {
    let text = "";
    setText(text);
    toast.success("Text Area Cleared", toastobj);
  };

  const Titlecase = () => {
    Text &&
      setText(
        Text.split(" ")
          .map((word) =>
            word === ""
              ? ""
              : word[0].toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")
      );
    toast.success(" Successfully converted to Titlecase", toastobj);
  };

  const Camelcase = () => {
    Text &&
      setText(
        Text.split(" ")
          .map((word, index) =>
            index === 0
              ? word.toLowerCase()
              : word === ""
              ? ""
              : word[0].toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")
      );
    toast.success(" Successfully converted to Camelcase", toastobj);
  };

  const RemoveExtraSpaces = () => {
    setText(
      Text.split(" ")
        .filter((val) => val !== "")
        .join(" ")
    );
    toast.success(" Successfully Removed Extra Spaces", toastobj);
  };

  const RemoveAllSpaces = () => {
    setText(
      Text.split(" ")
        .filter((val) => val !== "")
        .join("")
    );
    toast.success(" Successfully Removed All Extra Spaces", toastobj);
  };

  const CopyClipboard = () => {
    navigator.clipboard.writeText(Text);
    toast.success(" Successfully Copied to Clipboard", toastobj);
  };

  const countWords = (Text) => {
    let x = Text.trim();
    if (x == "") return 0;
    else return x.split(" ").length;
  };
  return (
    <>
      <ToastContainer />
      <h1 className="my-3">{props.heading}</h1>
      <textarea
        value={Text}
        onChange={handleOnChange}
        className="form-control my-3"
        id="exampleFormControlTextarea1"
        rows="8"
        placeholder="Enter Your Text here"
      ></textarea>
      <button className="btn btn-primary m-3" onClick={clearText}>
        Clear Text
      </button>
      <button className="btn btn-primary m-3" onClick={Uppercase}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary m-3" onClick={Lowercase}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary m-3" onClick={Camelcase}>
        Convert to Camel Case
      </button>
      <button className="btn btn-primary m-3" onClick={Titlecase}>
        Convert to Title Case
      </button>
      <button className="btn btn-primary m-3" onClick={CopyClipboard}>
        Copy to ClipBoard
      </button>
      <button className="btn btn-primary m-3" onClick={RemoveExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary m-3" onClick={RemoveAllSpaces}>
        Remove All Spaces
      </button>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {countWords(Text)} words and {Text.length} Characters
        </p>
        <p>{0.008 * Text.split(" ").length} Minutes Read</p>

        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
