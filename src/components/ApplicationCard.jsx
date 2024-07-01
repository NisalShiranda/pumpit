import "./ApplicationCard.css"
import PropTypes from "prop-types"


export const ApplicationCard = ({
    imgSrc,
    heading,
    desc,
}) => {
  return (
    <div className="card-container flex flex-col justify-center items-center mx-6">
        <div className="card-image relative">
            <img className="cardImage" src={imgSrc} alt="placeholder"></img>
        </div>
        <div className="card-text flex flex-col px-4 pt-8 pb-3 bg-[#EEF7FF] rounded-xl ">
            <p className="text-center font-semibold">{heading}</p>
            <p className="text-center font-light">{desc}</p>
        </div>
    </div>
  )
}

export default ApplicationCard

ApplicationCard.propTypes = {

    imgSrc: PropTypes.string,
    heading: PropTypes.string,
    desc: PropTypes.string,
   
 
   };


