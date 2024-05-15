import React, {useState} from "react";
import "./Upload.css";
import axios from 'axios';

const Upload = () => {
  const [allergy, setAllergy] = useState("");
  const [nutritionLabel, setNutritionLabel] = useState(null);
  const [output, setOutput] = useState('');
  const [showResults, setShowResults] = useState(false);

//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("nutritionLabel", nutritionLabel);
//     formData.append("allergies", allergy);
//     axios({
//         method: "post",
//         url: "/process",
//         data: formData,
//         headers: { "Content-Type": "multipart/form-data" },
//     })
//     .then(response => setOutput(response), setShowResults(true))
//     .catch(error => console.log(error))
//   }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Yay!');
        console.log(allergy);
        console.log(nutritionLabel);
    }


  const Results = () => (
    <div id="output">
        <h2>Results!</h2>
      {/* <h2>{output['data']}</h2> */}
    </div>
  )

  return (
    <div className="form-container" id ="upload">
      <form className="upload-box" encType="multipart/form-data" onSubmit={handleSubmit}>
      <h1 id="form-label">Is your food safe to eat?</h1>
      <p className="text"><b>Input your list of allergies as comma-separated values.</b></p>
      <p className="text">Example: "eggs,canola oil,cheese"</p>
        <input
          id="allergy"
          className="form-field"
          type="text"
          placeholder="List of allergies..."
          name="allergy"
          value={allergy}
          onChange={(e) => setAllergy(e.target.value)}
        />

        <p className='text' id='upload'><b>Upload a picture of your nutritional label!</b></p>
        <input
            id="nutritional-label"
            type="file"
            name="nutritionallabel"
            onChange={(e) => setNutritionLabel(e.target.files[0])}
        />

        <button className="form-field" type="submit" id="submit-btn">
          Submit
        </button>
      </form>
      <div>
        { showResults ? <Results /> : null }
      </div>
    </div>
  );
}

export default Upload;