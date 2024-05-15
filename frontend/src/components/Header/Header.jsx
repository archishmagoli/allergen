import React, {useState} from 'react'
import WebLinks from './WebLinks.jsx';
import MobileLinks from './MobileLinks.jsx';
import Icon from '../../../public/green-leaf-icon.svg';
import './Header.css';

const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="header">
            <img src={Icon} style={{width: '3%', margin: '1vw'}}/>
            <div className="name">AllerGEN</div>
            <div className="links">
               <div className='weblinks'>
                    <WebLinks/>
                </div> 
                <div className='mobilelinks'>
                    {show && <MobileLinks show={show} setShow={setShow}/>}
                </div> 
            </div>
        </div>
    )
}

export default Header