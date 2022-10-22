import "./about.css";
import ReactPlayer from 'react-player/youtube'
const About = () => {
  return (
    <div className="i" id = "about">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-intro">About AllerGEN</h1>
          <p className="i-desc">
          AllerGEN is web based app that allows people with allergies to scan food nutrition labels to find out if the product contains a specific allergen.          All you need to do is take a picture of your nutrition label and upload it onto our upload page. Our website will ask you what to look out for specific to your allergies.
          </p>
          <p className="i-desc">

          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src="https://icons.veryicon.com/png/o/food--drinks/vegetable-icon/tomato-14.png" alt="" className="i-img" /> */}
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=ODGiU01yTAM&ab_channel=Flamingo' className="i-img" /> */}
      </div>
    </div>
  );
};

export default About;