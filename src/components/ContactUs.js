
// import React from 'react';
// import '../styles/ContactUs.css';

// import image from '../images/image.png';
// import image3 from '../images/image3.png';
// import image2 from '../images/image2.png';
// import image4 from '../images/image4.png';

// const ContactUs = () => {
//   return (
//     <div className="contact-us-container">
//       <h2 className="contact-title">Contact Us</h2>
//       <div className="contact-content">
//         <div className="contact-left">
//           <h3 className="contact-highlight">Feel Free to Contact Us</h3>
//           <p className="contact-paragraph">
//             Flick is here to help you;<br />
//             Our experts are available to answer any questions you<br />
//             might have. We've got the answers.
//           </p>

//           <div className="contact-section">
//             <h4 className="section-heading">VISIT US</h4>
//             <p>G10, White House, Block II, Kundhan Bagh Colony.</p>
//           </div>

//           <p>Feel free to get in touch with us through our channels:</p>

//           <div className="contact-section">
//             <h4 className="section-heading">EMAIL US</h4>
//             <p>https://five9s-solutions.co.uk</p>
//           </div>

//           <div className="contact-section">
//             <h4 className="section-heading">CALL US</h4>
//             <p>
//               +971-4-576-6770<br />
//               +971-55-983-7007
//             </p>
//           </div>
//         </div>

//         <div className="contact-right">
//         <div className='' style={{display:"flex"}}> 
//         <div >   <img src={image} alt="Orange dish" className='img1'/></div>
//         <div> <img src={image3} alt="Candle & salad" className='img3' /></div>
//         </div>
//         <div className='' style={{display:"flex"}}> 
//         <div > <img src={image2} alt="Sizzler" className='img2'/></div>
//         <div><img src={image4} alt="Juice & cereal" className='img4' /></div>
//         </div>
       
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



import React from 'react';
import '../styles/ContactUs.css';
import image from '../images/image.png';
import image3 from '../images/image3.png';
import image2 from '../images/image2.png';
import image4 from '../images/image4.png';

const contactData = {
  id: "6e6b8efc-449a-49e5-9b32-42aac4a3ae55",
  tenantId: "tenant-001",
  description: "Flick is here to help you;Our experts are available to answer any questions you might have. We’ve got the answers.",
  address: "G10, White House, Block II, Kundhan Bagh Colony,",
  email: "https://five9s-solutions.co.uk",
  contact: ["+971-4-576-6770", "+971-55-983-7007"],
  images: [
    {
      imgId: "1d63601f-7240-4cf0-9731-5f91f9a02655",
      imagePath: image,
    },
    {
      imgId: "9d300d26-31fc-46a0-acd6-aa26bb4628dd",
      imagePath:image3,
    },
    {
      imgId: "8e70b816-94f7-48e8-b996-0765c738d494",
      imagePath: image2,
    },
    {
      imgId: "330ae189-4456-49a9-b7d3-0b73df6f279a",
      imagePath: image4,
    }
  ]
};

const ContactUs = () => {
  const { description, address, email, contact, images } = contactData;

  // Split description by ';' to format it with line breaks
  const descLines = description.split(';');

  // Assuming images are hosted at `/uploads/` or wherever your static folder is served from
  // const getImageUrl = (path) => `/uploads/${path}`;

  return (
    <div className="contact-us-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-content">
        <div className="contact-left">
          <h3 className="contact-highlight">Feel Free to Contact Us</h3>
          <p className="contact-paragraph">
            {descLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>

          <div className="contact-section">
            <h4 className="section-heading">VISIT US</h4>
            <p>{address}</p>
          </div>

          <p>Feel free to get in touch with us through our channels:</p>

          <div className="contact-section">
            <h4 className="section-heading">EMAIL US</h4>
            <p>{email}</p>
          </div>

          <div className="contact-section">
            <h4 className="section-heading">CALL US</h4>
            {contact.map((num, i) => (
              <p key={i}>{num}</p>
            ))}
          </div>
        </div>

        <div className="contact-right">
          <div style={{ display: "flex" }}>
            {/* <div><img src={getImageUrl(images[0].imagePath)} alt="img1" className="img1" /></div> */}
            <div><img src={images[0].imagePath} alt="img1" className="img1" /></div>
            <div><img src={images[1].imagePath} alt="img3" className="img3" /></div>
          </div>
          <div style={{ display: "flex" }}>
            <div><img src={images[2].imagePath} alt="img2" className="img2" /></div>
            <div><img src={images[3].imagePath} alt="img4" className="img4" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
