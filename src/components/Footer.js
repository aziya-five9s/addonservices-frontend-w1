import React from "react";
import "../styles/Footer.css";

const tenants = [
  {
    id: "6ca0b9c7-38ee-4969-b727-a2dcb3a541e2",
    tenantName: "kfc",
    address: "office G01,White House, Greenlands Rd, Block II ,Kundanbagh Colony, Begumpet, Hyderabad, Telangana 500016",
    contactUs: "+91-9023923900",
    policies: [
      { name: "Shipping Policy", link: "" },
      { name: "Privacy policy", link: "" },
      { name: "Refund Policy", link: "" },
      { name: "Terms & Conditions", link: "" },
    ],
    followUsOn: [
      { name: "Linkedin", imagepath: "/assets/linkedin.png" },
      { name: "Google", imagepath: "/assets/google.png" },
      { name: "Instagram", imagepath: "/assets/instagram.png" },
      { name: "Facebook", imagepath: "/assets/facebook.png" },
      { name: "Twitter", imagepath: "/assets/twitter.png" },
    ],
    logo: {
      docPath: "7422fe5a-88f7-4f77-91ff-1386a8dc2634.png",
    },
  }
];

const Footer1 = () => {
  return (
    <div className="footer-container">
      {tenants.map((tenant) => (
        <div className="footer-block" key={tenant.id}>
          <div className="footer-section">
            <h4>Policies</h4>
            <ul>
              {tenant.policies.map((policy, index) => (
                <li key={index}>{policy.name}</li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Address</h4>
            <p>{tenant.address}</p>
          </div>

          <div className="footer-section">
            <h4>Follow us on</h4>
            <div className="social-icons">
              {tenant.followUsOn.map((social, index) => (
                <img
                  key={index}
                  src={social.imagepath}
                  alt={social.name}
                  className="social-icon"
                />
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>{tenant.contactUs}</p>
          </div>

          <div className="footer-logo">
            <img
              src={`/assets/${tenant.logo.docPath}`}
              alt={tenant.tenantName}
              className="logo-img"
            />
          </div>
        </div>
      ))}
       <div className="footer-bottom">
        <p>
          © All Rights Reserved Desi Kitchens. Built with by Home Food
        </p>
      </div>
    </div>
  );
};

export default Footer1;
