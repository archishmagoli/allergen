import "./About.css";
import salad from './salad.png';

const About = () => {
  return (
    <div className="i" id = "about">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-intro"><strong>About AllerGEN</strong></h1>
          <p className="i-desc">
          <strong>AllerGEN is web based app that allows people with allergies to scan food nutrition labels to find out if the product contains a specific allergen.          All you need to do is take a picture of your nutrition label and upload it onto our upload page. Our website will ask you what to look out for specific to your allergies.</strong>
          </p>
          <p className="i-desc">
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
          <img className='i-img' src={salad} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default About;