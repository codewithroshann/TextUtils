import React, { useState } from 'react'

export default function InputForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value)

  }
  const toUpperCase = () => {
    if (text === "") {
      alert("Write Somthing !")
    } else {
      const newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Text Capitalize ","success")

    }

  }
  const toLowerCase = () => {
    if (text === "") {
      alert("Write Somthing !")
    } else {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Smallize ","success")
  }
  }

  const removeExtraSpaces=()=>{
    if(text===""){
      alert("Write Somthing !")
    }else{

      const newText = text.trim().replace(/\s+/g,' ');
      setText(newText)
      props.showAlert("Removed Extra Spaces ","success")
    }

  }
  const copy = () => {
    if (text === "") {
      alert("Write Somthing !")
    } else {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied ","success")
    }

  }
  const clear = () => {
    if (text === "") {
      alert("Write Somthing !")
    } else {
      setText("");
      props.showAlert("cleared","success")
    }

  }



  return (

    <>
      <h1 className="my-3">Convert Text</h1>
      <div className="mb-3">

        <textarea value={text} onChange={handleOnChange} placeholder={"Type Here !"} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button type="button" onClick={toUpperCase} className=" mx-2 btn btn-primary">Upper Case</button>
      <button type="button" onClick={toLowerCase} className=" mx-2 btn btn-primary">Lower Case</button>
      <button type="button" onClick={removeExtraSpaces} className=" mx-2 btn btn-primary">Remove Extra Spaces</button>
      <button type="button" onClick={copy} className=" mx-2 btn btn-success">Copy</button>
      <button type="button" onClick={clear} className=" mx-2 btn btn-secondary">Clear</button>
      <div className="container my-2">
        <h3>Word & Characters Count :</h3>
        <p>Word :{text=>text.length>0} Characters : {text.length}</p>
        <h3>Preview :</h3>
        <p>{text}</p>
      </div>
    </>
  )
}
