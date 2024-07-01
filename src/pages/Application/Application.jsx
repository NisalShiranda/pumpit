import "./Application.css"
import Card from "../../components/ApplicationCard"

function Application() {
  return (
    <>
        <div className="application-container">
            <p className="mx-6 xl:mx-0 font-bold">Application areas </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                <div className="flex justify-center items-center"><Card /></div>
                <div className="flex justify-center items-center" ><Card /></div>
                <div className="flex justify-center items-center"><Card /></div>
            </div>
        </div>
    </>
  )
}

export default Application