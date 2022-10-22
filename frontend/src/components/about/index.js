import "./about.css";
import ReactPlayer from 'react-player/youtube'
const About = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-intro">About</h1>
          <p className="i-desc">
          AllerGEN is web based app that allows people with allergies to scan their food nutrition labels and find out if the product contains the specific thing their allergic to within seconds. 
          </p>
          <p className="i-desc">
          All you need to do is take a picture of your nutrition label and upload it onto our upload page. Our website will ask you what to look out for specific to your allergies. Type those in and you are good to go.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        
      </div>
    </div>
  );
};

export default About;