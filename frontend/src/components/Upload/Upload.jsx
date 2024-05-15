import React, {useState} from "react";
import "./Upload.css";
import axios from 'axios';

const Upload = () => {
    const [allergy, setAllergy] = useState("");
    const [nutritionLabel, setNutritionLabel] = useState(null);
    const [output, setOutput] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = async(event) => {
        event.preventDefault();
        let form = new FormData();

        form.append('allergies', allergy);
        form.append('nutritionLabel', nutritionLabel);

        try {
            const response = await axios.post('http://localhost:5000/process', form);
            setOutput(response.data);
            setShowResults(true);
        } catch (error) {
            console.error(error);
        }
    }
    
    const Results = () => (
        <div className={`output ${output.length > 0 ? 'red' : 'green'}`}>
            {
                output && output.length > 0 ?
                <div> 
                    <p><b>DO NOT EAT! You are allergic to the following ingredients: </b></p>
                    <p>{output}</p>
                </div> : 
                
                <div>
                    <p><b>This product is safe to eat!</b></p>
                </div>
            }
            
        </div>
    )
    
    return (
        <>
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

                { showResults ? <Results /> : null }
            </div>
        </>
        
  );
}

export default Upload;