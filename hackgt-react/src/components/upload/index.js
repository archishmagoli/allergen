import React, {useState} from 'react'
import './upload.css'
function Upload() {
    const [allergy, setAllergy] = useState("");
    const [nutritionLabel, setNutritionLabel] = useState(null);
    return (
        <div className="upload">
            <form>
                Allergy
                <input type="text" name = "allergy" value={allergy}
                    onChange={(e) => setAllergy(e.target.value)}/>
                <br/>
                Nutritional Label
                <input type="file" name = "allergy" value={nutritionLabel}
          onChange={(e) => setNutritionLabel(e.target.value)}/>
            </form>
        </div>
    );
}

export default Upload;