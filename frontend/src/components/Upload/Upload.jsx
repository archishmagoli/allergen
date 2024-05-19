import React, { useState } from "react";
import "./Upload.css";
import axios from 'axios';
import Loading from '../../assets/loading.gif';

const Upload = () => {
    const [allergy, setAllergy] = useState("");
    const [nutritionLabel, setNutritionLabel] = useState(null);
    const [output, setOutput] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false); // Add loading state
    const url = import.meta.env.VITE_BACKEND_URL;

    const handleSubmit = async (event) => {
        if (allergy === "" || nutritionLabel === null) {
            alert("Please fill out all fields!");
            return;
        }
        
        event.preventDefault();
        let form = new FormData();

        form.append('allergies', allergy);
        form.append('nutritionLabel', nutritionLabel);

        setLoading(true); // Set loading to true when submitting

        console.log(url);

        try {
            const response = await axios.post(`url`, form);
            setOutput(response.data);
            setShowResults(true);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // Set loading to false when request is complete
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
            <div className="form-container" id="upload">
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

                {loading && 
                    <div className='loading'>
                        <img className='loading-image' src={Loading} alt="Loading..." />
                    </div>} {/* Render loading indicator if loading is true */}
                {showResults && !loading && <Results />} {/* Render results if not loading */}
            </div>
        </>

    );
}

export default Upload;