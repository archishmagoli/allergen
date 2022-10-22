import React from 'react'
import { faBriefcase, faCode, faPhone, faLaptopCode, faFile } from '@fortawesome/free-solid-svg-icons'
import "./mobilelinks.css"
import {faWindowClose} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function MobileLinks({show, setShow}) {
    return (
        <div className='mobile'>
            <div className='close' onClick={(() => setShow(!show))}>
                <FontAwesomeIcon icon={faWindowClose} onClick={()=>setShow(false)}/>
            </div>
            <div className='all-mobile-links'>
                <div className="mobile-links">
                    <a href="#about">
                        About
                    </a> 
                </div>
                <div className="mobile-links">
                    <a href="#upload">
                        Upload
                    </a> 
                </div>
                <div className="mobile-links">
                    <a href="#footer">
                        Contact
                    </a>   
                </div>
            </div>
        </div>
    )
}

export default MobileLinks
