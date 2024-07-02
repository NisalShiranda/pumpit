import "./Application.css"
import Card from "../../components/ApplicationCard"
import C1 from "../../../public/c1.png"
import C2 from "../../../public/c2.png"
import C3 from "../../../public/c3.png"
import C4 from "../../../public/c4.png"
import C5 from "../../../public/c5.png"
import C6 from "../../../public/c6.png"


function Application() {
  return (
    <>
        <div className="application-container  pb-16" id="aboutus">
            <p className="mx-6 xl:mx-0 font-bold sm:text-2xl">Application areas </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-3">
                
                <div className="flex justify-center items-center">
                <Card
                    imgSrc={C1}
                    heading="Automation and optimization of operational activities"
                    desc="Working staff, HR, Top management"
                 />

                 </div>

                 <div className="flex justify-center items-center">
                <Card
                    imgSrc={C2}
                    heading="Marketing tool"
                    desc="Point of contact. Brand extension. Increased customer loyalty."
                 />

                 </div>
                 <div className="flex justify-center items-center">
                <Card
                    imgSrc={C3}
                    heading="Professional tool"
                    desc="A tool for use in professional activities and be half of IT"
                 />

                 </div>
                 
                 <div className="flex justify-center items-center">
                <Card
                    imgSrc={C4}
                    heading="Sales"
                    desc="One-click sales. Sales funnel expansion. Loyalty program. NFC. QR, Bar codes"
                 />

                 </div>
                 <div className="flex justify-center items-center">
                <Card
                    imgSrc={C5}
                    heading="Social networks. Games"
                    desc="Formation of a client base, communities, fans. bases, etc."
                 />

                 </div>
                 <div className="flex justify-center items-center">
                <Card
                    imgSrc={C6}
                    heading="IoT"
                    desc="Remote control of devices and complex systems. Wi-Fi, Bluetooth"
                 />

                 </div>
            </div>
            </div>
        
       
    </>
  )
}

export default Application