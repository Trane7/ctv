import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Contact</h4>
              <ul className="list-unstyled">
                <li>Minnesota</li>
                <li>Twin Cities</li>
                <li>ctvradiomn@gmail.com </li>
              </ul>
            </div> 
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Navigation</h4>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>Catalog</li>
                <li>Submit A Song</li>
              </ul>
            </div> 
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Support</h4>
              <ul className="list-unstyled">
                <li>TikTok</li>
                <li>Telegram</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>YouTube</li>
                <li>Twitch</li>
                <li>Cash App</li>
              </ul>
            </div> 
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Policies</h4>
              <ul className="list-unstyled">
                <li>Return Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </div> 
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} CTV Radio Website - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FiFacebook, FiInstagram, FiTwitter, FiTwitch, FiYoutube } from 'react-icons/fi'
// import "../footer/footer.scss";

// const Footer = () => {

//     return (
//         <div className='footer-container'>
//             <div className='footer-links'>
//                 <div className='footer-link-wrapper'>
//                     <div className='footer-link-items'>
//                         <h3>Navigation</h3>
//                         <Link to="/">Home</Link>
//                         <Link to="/catalog">Catalog</Link>
//                         <Link to="/">Submit A Song</Link>
//                     </div>
//                     <div className='footer-link-wrapper'>
//                         <div className='footer-link-items'>
//                             <h3>Support Us</h3>
//                             <a href="https://google.com" target="_blank" rel="noreferrer">
//                                 Google.com
//                             </a>
//                             <Link to="/">TikTok</Link>
//                             <Link to="/">Telegram</Link>
//                             <Link to="/">Instagram</Link>
//                             <Link to="/">Twitter</Link>
//                             <Link to="/">YouTube</Link>
//                             <Link to="/">Twitch</Link>
//                             <Link to="/">Cash App</Link>
//                         </div>
//                         <div className='footer-link-wrapper'>
//                             <div className='footer-link-items'>
//                                 <h3>Policies</h3>
//                                 <Link to="/">Return & Exchange Policy</Link>
//                                 <Link to="/">Privacy Policy</Link>
//                                 <Link to="/">Refund Policy</Link>
//                             </div>
//                         </div>
//                     </div>

//                     <section className='footer-subscription'>
//                         <p className='footer-subscription-heading'>
//                             Join the Family
//                         </p>
//                         <div className='input-areas'> {/* Button Path needs to be fixed!!!!! */}
//                             <a href='https://beacons.ai/bestllc?fbclid=IwAR14xZXSDflVzS6z-65QLScEMg_-z2Zi8FS-XoOg5g4ySY3sJrCj7542Pxo'>
//                                 <button className="footer-button" >Subscribe</button>
//                             </a>
//                             <div className="social-group">
//                                 <FiInstagram className='social-icon' />
//                                 <FiFacebook className='social-icon' />
//                                 <FiTwitter className='social-icon' />
//                                 <FiTwitch className='social-icon' />
//                                 <FiYoutube className='social-icon' />
//                                 {/* <FiCashApp className='social-icon' />
//                             <FiTicTok className='social-icon' />
//                             <FiTelegram className='social-icon' /> */}
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer;
