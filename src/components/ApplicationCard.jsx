import "./ApplicationCard.css"
import C1 from "../../public/c1.png"

function ApplicationCard () {
  return (
    <div className="card-container flex flex-col justify-center items-center mx-6">
        <div className="card-image relative">
            <img className="cardImage" src={C1} alt="placeholder"></img>
        </div>
        <div className="card-text flex flex-col px-4 pt-8 pb-3 bg-white rounded ">
            <p className="text-center font-semibold">Automation and optimization of operational activities</p>
            <p className="text-center font-light">Working staff, HR, Top management</p>
        </div>
    </div>
  )
}



export default ApplicationCard
