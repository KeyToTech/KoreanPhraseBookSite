import React from "react";
import "./privacy.css";

const containers = [
  {
    title: "Collecting personal information",
    description: "We do not collect any personal information from our users."
  },
  {
    title: "Third-party disclosure",
    description:
      "We do not sell, trade, or otherwise transfer to outside parties any information of the user."
  },
  {
    title: "Third-party links",
    description:
      "We do not include third-party products or services in our application."
  },
  {
    title: "Changes to This Privacy Policy",
    description: "This policy may be updated from time to time."
  },
  {
    title: "Contact Us",
    description:
      "If there are any questions regarding this privacy policy, please send us an e-mail at info@keytotech.com"
  }
];

const container = () =>
  containers.map(({ title, description }) => {
    return (
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  });

const PrivacyPolicy = props => (
  <div className="privacy-content">
    <h1>Privacy Policy</h1>
    <div className="main-container">{container}</div>
  </div>
);

export default PrivacyPolicy;
