import { Link } from "react-router-dom"

export default function Nav (){
    return(
        <>
        <div>
            <div className="flex justify-between py-4 px-8">
               <Link  to="/"> <h1 className="FONT text-7xl bg-gray-400 px-8 py-8  rounded-lg ">Heliverse</h1></Link>
               <div className="pt-4 ">
               <Link to="/team"> <h1 className="text-xl FONT pt-4">Team</h1></Link>
               <p className="text-xl FONT pt-4"> Team member : 0</p>
               </div>
            </div>
        </div>
        </>
    )
};




