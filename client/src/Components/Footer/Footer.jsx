// import React from "react";
// import logo from "../../assets/logo.jpg"
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// function Footer() {
//   return (
//     <div className="bg text-white bg-primary">
//       <div className=" d-flex justify-between">
//         <div className="">
//           <div>
//             <img color="white" src={logo} />
//           </div>
//           <div>
//             <FacebookIcon />
//             <InstagramIcon />
//             <YouTubeIcon />
//           </div>
//         </div>
//         <dvi>
//           <h2>Useful Link</h2>
//           <p className=" text-xs font-light my-2">How it works</p>
//           <p className=" text-xs font-light my-2">Terms and Service</p>
//           <p className=" text-xs font-light my-2">Privacy and Policy</p>
//         </dvi>
//         <dvi>
//           <h2>Contact Info</h2>
//           <p className=" text-xs font-light my-2">Evangadi Networks</p>
//           <p className=" text-xs font-light my-2">support@gmail.com</p>
//           <p className=" text-xs font-light my-2">+1-202-386-2702</p>
//         </dvi>
//       </div>
//     </div>
//   );
// }

// export default Footer;
// import React from "react";
// import Logo from "../../assets/img/footerlogo.png";
import { AiFillFacebook } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import logo from "../../assets/footer-logo-logo.jpg";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer-top mt-1">
      <div className="container">
        <div className="footer-bottom-content clearfix">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="logo-footer">
                <a className="navbar-brand" href="/">
                  <img src={logo} alt="evangadi footer logo" />
                </a>
              </div>

              <ul className="footer-social-list list-social list-inline">
                <li>
                  <a href="https://www.facebook.com/EthiopiansNetwork">
                    <AiFillFacebook />
                    <i className="social_facebook "></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/evangaditech/">
                    <TiSocialInstagram />
                    <i className="social_instagram "></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/weareethiopians">
                    <AiFillYoutube />
                    <i className="social_youtube "></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 ">
              <ul className="list-menu">
                <h5>Useful Link</h5>
                <li>
                  <a className="text-decoration-none" href="/explained">
                    How it works{" "}
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="/legal/terms/">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="/legal/privacy/">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <ul className="list-menu contact-list">
                <h5 className="">Contact Info</h5>
                <li>Evangadi Networks</li>
                <li>support@evangadi.com</li>
                <li>+1-202-386-2702</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
