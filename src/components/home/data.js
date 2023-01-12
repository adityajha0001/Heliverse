import INFOS from "../../data/heliverse_mock_data.json";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";



export default function Data (){

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] =useState("");



    const handleAdd =(INFO) =>{
        dispatch(add(INFO));

    }; 

    return(
        <>
        <div>
            <div className="pt-12 px-12">
                <input className=" h-12 bg-gray-100  border-4  border-sky-500" type="text" placeholder="  Search..." onChange={(event)=>{setSearchTerm(event.target.value)}}/>
            </div>

        
            <div className=" grid grid-cols-4 px-8 py-8 ">
                 {INFOS.filter((INFO)=>{
                    if(searchTerm==""){
                        return INFO
                    }else if (INFO.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return INFO
                    }else if (INFO.domain.toLowerCase().includes(searchTerm.toLowerCase())){
                        return INFO
                    }else if (INFO.gender.toLocaleUpperCase().includes(searchTerm.toLocaleUpperCase())){
                        return INFO
                    }
                 }).map(INFO =>{
                    return(
                        <>
                        <div className="">
                            <div className="flex  bg-gray-100 mx-2 my-4 pb-4">
                                <img  style ={{height: 200 }}src={INFO.avatar}/>
                                <div className="pt-12 ">
                                    <h1 className="font-bold">{INFO.id}</h1>
                                    <h1 className="font-bold"><span>{INFO.first_name}</span><span> {INFO.last_name}</span></h1>
                                    <h1 className="text-sm">{INFO.gender}</h1>
                                    <h1 className="text-sm" >{INFO.email}</h1>
                                    <h1 className="text-sm" >{INFO.domain}</h1>
                                    <h1 className="text-sm">{INFO.available}</h1>
                                    <button onClick={()=>handleAdd(INFO )} className="font-bold hover:bg-blue-400 text-sm bg-blue-600 rounded-lg px-4 py-2 text-white">Add to team</button>
                                </div>
                           
                            </div>
                           
                        </div>
                        </>
    
                    );


                })}

            </div>
        </div>
        </>
    )
};




