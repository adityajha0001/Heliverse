import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Nav (){

    const items = useSelector((state)=>state.cart);

    return(
        <>
        <div>
            <div className="flex justify-between py-4 px-8">
               <Link  to="/"> <h1 className="FONT text-2xl  px-8 py-4 rounded-lg ">Heliverse</h1></Link>
               <div className=" flex gap-8 ">
               <Link to="/team"> <h1 className=" pt-4">Team</h1></Link>
               <p className=" pt-4"> Team member : {items.length}</p>
               <Link to="/teaminfo"><p className="pt-4">TeamINFO</p></Link>
               </div>
            </div>
        </div>
        </>
    )
};




