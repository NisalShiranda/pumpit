import "./Footer.css"

function Footer() {
  return (
    <>
        <div className="bg-cyan-950 py-[50px] md: mt-10">
            <div className="footer-container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold text-md text-white text-center ">Phone</p>
                        <p className=" text-md text-white pt-5 text-center ">+94 711543730</p>
                        <p className=" text-md text-white text-center ">+94 711543730</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold text-md text-white text-center ">Email</p>
                        <p className=" text-md text-white pt-5 text-center ">pumpit@gmail.com</p>
                       
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold text-md text-white text-center ">Fax</p>
                        <p className=" text-md text-white pt-5 text-center ">+94 711543730</p>
                        <p className=" text-md text-white text-center ">+94 711543730</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold text-md text-white text-center ">Address</p>
                        <p className=" text-md text-white pt-5 text-center ">No: 152/4, Main Street, Colombo 7</p>
                    
                    </div>
                    
                </div>
            </div>

        </div>
    </>
  )
}

export default Footer