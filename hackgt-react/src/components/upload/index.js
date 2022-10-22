import React from "react";
import "./upload.css";

function Upload() {
  return (
    <div class="form-container">
      <form class="upload-box">
      <h1>Is your food safe to eat?</h1>
        <input
          id="allergy"
          class="form-field"
          type="text"
          placeholder="Allergy"
          name="allergy"
        />
        <input
          id="nutritional-label"
          class="form-field"
          type="file"
          placeholder="Nutritional Label"
          name="nutritionallabel"
        />
        <button class="form-field" type="submit" id="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Upload;
// import React, {useState} from 'react'
// import './upload.css'
// function Upload() {
//     const [allergy, setAllergy] = useState("");
//     const [nutritionLabel, setNutritionLabel] = useState(null);
//     return (
//         <div className="upload">
//             <div className='upload-container'>
//                 <div className='upload-box'>
//                     <form className='upload-form'>
//                         Allergy
//                         <input type="text" name = "allergy" value={allergy}
//                             onChange={(e) => setAllergy(e.target.value)}/>
//                         <br/>
//                         Nutritional Label
//                         <input type="file" name = "nutrition" value={nutritionLabel}
//                 onChange={(e) => setNutritionLabel(e.target.value)}/>
//                         <br/>
//                         <input type="submit" />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Upload;