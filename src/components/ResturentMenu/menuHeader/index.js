import "../../../../index.css";
import "./style.css";
import { IMG_CDN_URL } from "../../../config.js";
//
const MenuHeader = ({
  name,
  cousins,
  address,
  averageRating,
  costforTwo,
  imageId,
  delivaryTime,
}) => {
  return (
    <section className="menu-container padding grid grid--3cols">
      <div>
        <img className="menuheader-image" src={`${IMG_CDN_URL}${imageId}`} alt={`restoimage ${imageId}`} />   
      </div>
      <div className="primary-description">
        <h1>{name}</h1>
        <div>{cousins?.join(",")}</div>
        <div>{address}</div>
        <div className="tertiary-description">
          <div>{averageRating}</div>
          <div>{delivaryTime}min</div>
          <div>{costforTwo}</div>
        </div>
      </div>
    </section>
  );
};
export default MenuHeader;
