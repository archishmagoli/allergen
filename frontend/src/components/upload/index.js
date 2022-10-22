import React, {useState} from "react";
import "./upload.css";

function Upload() {
  const [allergy, setAllergy] = useState("");
  const [nutritionLabel, setNutritionLabel] = useState(null);
  const [isAllergic] = useState(false);
  return (
    <div class="form-container" id = "upload">
      <form class="upload-box">
      <h1 id="form-label">Is your food safe to eat?</h1>
        <input
          id="allergy"
          class="form-field"
          type="text"
          placeholder="Allergy"
          name="allergy"
          value={allergy}
          onChange={(e) => setAllergy(e.target.value)}
        />
        <input
          id="nutritional-label"
          class="form-field"
          type="file"
          placeholder="Nutritional Label"
          name="nutritionallabel"
          value={nutritionLabel}
          onChange={(e)=>setNutritionLabel(e.target.value)}
        />
        <button class="form-field" type="submit" id="submit-btn">
          Submit
        </button>
      </form>
      {isAllergic &&
        <h1>Unfortunately, this product contains {allergy}.</h1>
      }
      {!isAllergic &&
        <h1>YES! This food is safe to eat.</h1>
      }
    </div>
  );
}
export default Upload;