import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="footer">
      <div className="container mr-auto ml-auto">
        <div className="footer__top">
          <div className="about">
            <h1>ABOUT</h1>
            <ul>
              <li>How Travelly works</li>
              <li>Newsroom</li>
              <li>Investors</li>
              <li>Careers</li>
              <li>Founders' Letter</li>
            </ul>
          </div>

          <div className="community">
            <h1>Community</h1>
            <ul>
              <li>Diversity & Belonging</li>
              <li>Accessibility</li>
              <li>Travelly Associates</li>
              <li>Guest Referrals</li>
              <li>Gift cards</li>
            </ul>
          </div>

          <div className="host">
            <h1>Host</h1>
            <ul>
              <li>Host an Online Experience</li>
              <li>Resource Center</li>
              <li>Community Center</li>
            </ul>
          </div>

          <div className="support">
            <h1>Support</h1>
            <ul>
              <li>Our COVID-19 Response</li>
              <li>Help Center</li>
              <li>Cancilation options</li>
              <li>Trust & Safety</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="copyright">
            &copy; 2021 Travelly, Inc. All rights reserved
          </div>

          <div className="privacy">
            <a>Privacy</a>
            <a>Terms</a>
            <a>Sitemap</a>
          </div>

          <div className="social">
            <div className="facebook">
              <Image width="17" height="17" src="/images/facebook.svg" />
            </div>

            <div className="twitter">
              <Image width="17" height="17" src="/images/twitter.svg" />
            </div>

            <div className="instagram">
              <Image width="17" height="17" src="/images/instagram.svg" />
            </div>
          </div>

          <div className="copyright1 copyright">
            &copy; 2021 Travelly, Inc. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
