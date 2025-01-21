import Header from "@/common/Header"
import LeftSideBar from "@/common/LeftSideBar"
import RightSideBar from "@/common/RightSideBar"
import Footer from "@/components/Footer"
import { Outlet } from "react-router-dom"



const Layout = () => {
  return (
    <div className="min-h-screen flex  ">
     <LeftSideBar/>
        <div className=" flex-1 flex flex-col">
            
            <Header/> 

            <div className="flex">

                <Outlet/>

              <div className="hidden lg:block">   
                <RightSideBar/>
              </div>
             

            </div>

           
            
        </div>

      
    </div>
  )
}

export default Layout
