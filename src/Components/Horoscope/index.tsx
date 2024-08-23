import React from "react";
import "./style.css"; // Ensure this file exists for styling

// Define a type for the zodiac sign
type ZodiacSign = {
  name: string;
  dateRange: string;
  image: string;
};

// Array of zodiac signs with their names, date ranges, and images
const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    dateRange: "March 21 - April 19",
    image:
      "https://static.displate.com/270x380/displate/2023-06-07/204c053c12c83b3154c22fcb7a4d0642_3c4e30095cea8cde68cb6160a287e94d.jpg",
  },
  {
    name: "Taurus",
    dateRange: "April 20 - May 20",
    image:
      "https://img.freepik.com/premium-photo/astrological-zodiac-signs-taurus-taurus-horoscope_597582-921.jpg",
  },
  {
    name: "Gemini",
    dateRange: "May 21 - June 20",
    image:
      "https://t3.ftcdn.net/jpg/05/67/13/22/360_F_567132273_mfAcrOWFm37aF7gbKtgqOQCEQpUQBo9v.jpg",
  },
  {
    name: "Cancer",
    dateRange: "June 21 - July 22",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxS7rsFsKhmxJ1VshXJFXXwfX-42xRCfIKMg&s",
  },
  {
    name: "Leo",
    dateRange: "July 23 - August 22",
    image: "https://www.greekmythology.com/images/mythology/leo_image_632.jpg",
  },
  {
    name: "Virgo",
    dateRange: "August 23 - September 22",
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-bd7e1a4063daadcc181aede622c27e5d",
  },
  {
    name: "Libra",
    dateRange: "September 23 - October 22",
    image:
      "https://t3.ftcdn.net/jpg/05/74/51/06/360_F_574510625_2NbLORLVflijGwFPskAJYcuKtF2GfzmJ.jpg",
  },
  {
    name: "Scorpio",
    dateRange: "October 23 - November 21",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/horoscope-signs-scorpio-bedros-awak.jpg",
  },
  {
    name: "Sagittarius",
    dateRange: "November 22 - December 21",
    image:
      "https://i.etsystatic.com/38131188/r/il/cfd40c/4426204471/il_570xN.4426204471_ko8k.jpg",
  },
  {
    name: "Capricorn",
    dateRange: "December 22 - January 19",
    image:
      "https://t4.ftcdn.net/jpg/05/70/62/47/360_F_570624724_1zoDuIWUfAl15ACUeQXD5nFTyKDpyZlj.jpg",
  },
  {
    name: "Aquarius",
    dateRange: "January 20 - February 18",
    image:
      "https://static.vecteezy.com/system/resources/previews/002/094/796/non_2x/aquarius-zodiac-sign-icons-vector.jpg",
  },
  {
    name: "Pisces",
    dateRange: "February 19 - March 20",
    image:
      "https://t3.ftcdn.net/jpg/05/65/96/02/360_F_565960204_TFuG2ZI6S4MDu9eAh8vGADQU0KvstXGe.jpg",
  },
];

const ZodiacSigns: React.FC = () => {
  return (
    <div className="zodiac-signs-container">
      {zodiacSigns.map((sign) => (
        <div key={sign.name} className="zodiac-card">
          <img src={sign.image} alt={sign.name} className="zodiac-image" />
          <h2>{sign.name}</h2>
          <p>{sign.dateRange}</p>
          <button className="view-button">View</button>
        </div>
      ))}
    </div>
  );
};

export default ZodiacSigns;
