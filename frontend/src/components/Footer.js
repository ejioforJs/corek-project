import React from "react";
import '../Styles/Footer.css'
import corek from '../assets/corek.png'
import {FiPhone,FiClock} from 'react-icons/fi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {FaFacebookF,FaTwitter,FaYoutube,FaInstagram} from 'react-icons/fa'
import {MdOutlineCopyright} from 'react-icons/md'

function Footer() {
  return <>
    <div className="footer-div">
        <div className="footer-child">
        <div className="footer-img">
            <img src={corek} alt="" classname='corek'/>
            <div className="contact-div">
                <div><FiPhone className="fi"/> +234 757-216-44</div>
                <div><HiOutlineLocationMarker className="fi"/> Nas Lodge,Odim,Nsukka</div>
                <div><MdOutlineMarkEmailRead className="fi"/>js4428900@gmail.com</div>
                <div><FiClock className="fi"/>Daily: 10:00 Am - 5:00 Pm Monday-Sunday</div>
            </div>
        </div>
        <div className="courses-div">
            <h1>Courses</h1>
            <div className="course-child">
            <div className="child">- Forex Trading Courses</div>
            <div className="child">- Cryptocurrency Trading Courses</div>
            <div className="child">- Stock Trading Courses</div>
            <div className="child">- Digital Marketing Courses</div>
            </div>
        </div>
        <div className="newsletter">
            <h1>Subscribe to our newsletter!</h1>
            <div className="newsletter-child">
            <p>You will never miss our podcasts,latest news etc.Our newsletter is once a week,every wednesday.
            </p>
            <div className="email-div">
                <input type='email' placeholder="email@example.com"/>
                <button>Sign Up</button>
            </div>
            </div>
        </div>
        </div>
        <div className="copyright-parent">
            <div className="copyright-icon"><MdOutlineCopyright /> 2022 CoreK.All Rights Reserved.</div>
            <div className="privacy"><span>Privacy.</span> <span>Terms.</span></div>
            <div className="social-icon">
                <FaFacebookF className="facebook"/>
               <FaInstagram className="instagram"/>
               <FaTwitter className="twitter"/>
               <FaYoutube className="youtube"/>
            </div>
        </div>
    </div>
  </>;
}

export default Footer;
