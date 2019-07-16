import React from "react";
import "./privacy.css";

const PrivacyPolicy = () => (
  <div className="privacy-content">
    <h1>Privacy Policy</h1>
    <div className="main-container">
      <div className="container">
        <h2>Collecting personal information</h2>
        <p>We do not collect any personal information from our users.</p>
      </div>

      <div className="container">
        <h2>Third-party disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties any
          information of the user.
        </p>
      </div>

      <div className="container">
        <h2>Third-party links</h2>
        <p>
          We do not include third-party products or services in our application.
        </p>
      </div>

      <div className="container">
        <h2>Changes to This Privacy Policy</h2>
        <p>This policy may be updated from time to time.</p>
      </div>

      <div className="container">
        <h2>Contact Us</h2>
        <p>
          If there are any questions regarding this privacy policy, please send
          us an e-mail at info@keytotech.com
        </p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
