import { useState } from "react"

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
    props.showAlert("success", "Converted to UPPER CASE!");
  }

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert("success", "Converted to lower case!");
  }

  const handleTitlecaseClick = () => {
    text
      && setText(text.split(" ").map(word => word === "" ? "" : word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
        .split("\n").map(word => word === "" ? "" : word[0].toUpperCase() + word.slice(1)).join("\n"));
    props.showAlert("success", "Converted to Title Case!");
  }

  const handleCamelcaseClick = () => {
    text && setText(text.split(" ").map((word, index) => index === 0 ? word.toLowerCase() : word === "" ? "" : word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" "));
    props.showAlert("success", "Converted to camel Case!");
  }

  const handleRemoveExtraSpacesClick = () => {
    setText(text.split(" ").filter(val => val !== "").join(" "));
  }

  const handleRemoveAllSpacesClick = () => {
    setText(text.split(" ").filter(val => val !== "").join(""));
    props.showAlert("success", "Removed spaces!");
  }

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("success", "Copied to Clipboard!");
  }

  const getTextWordCount = () => {
    return text.split(" ").map(val => val.split("\n")).reduce((final, curr) => [...final, ...curr], []).filter(val => val !== "").length;
  }

  const getTextCharCount = () => {
    return Array.from(text).filter(char => char !== " " && char !== "\n").length;
  }

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea className="form-control" placeholder="Enter text here" id="myBox" rows="8" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <button disabled={!text.trim().length} className="btn btn-primary mb-3 me-3" onClick={handleUppercaseClick}>Convert to UPPER CASE</button>
        <button disabled={!text.trim().length} className="btn btn-primary mb-3 me-3" onClick={handleLowercaseClick}>Convert to lower case</button>
        <button disabled={!text.trim().length} className="btn btn-primary mb-3 me-3" onClick={handleTitlecaseClick}>Convert to Title Case</button>
        <button disabled={!text.trim().length} className="btn btn-primary mb-3 me-3" onClick={handleCamelcaseClick}>Convert to camel Case</button>
        <button disabled={!text.trim().length} className="btn btn-primary mb-3 me-3" onClick={handleRemoveExtraSpacesClick}>Remove Extra Spaces</button>
        <button disabled={!text.trim().length} className="btn btn-primary mb-3 me-3" onClick={handleRemoveAllSpacesClick}>RemoveAllSpaces</button>
        <button disabled={!text.trim().length} className="btn btn-primary mb-3 me-3" onClick={handleCopyClipboard}>Copy to Clipboard</button>
      </div>
      <div className="container">
        <h2 className="mt-3">Your Text Summary</h2>
        <p>{getTextWordCount()} words, {getTextCharCount()} characters.</p>
        <p>{Math.round(getTextWordCount() * 0.008)} minutes read.</p>
        <h2>Preview</h2>
        <p style={{ "white-space": "pre-line"}}>{text.trim() || "Nothing to preview"}</p>
    </div >
    </>
  )
}

export default TextForm