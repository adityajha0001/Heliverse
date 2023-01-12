import INFOS from "../../data/heliverse_mock_data.json";
import { useState } from "react";



export default function Data (){
    const [searchTerm, setSearchTerm] =useState("");
    return(
        <>
        <div>
            <div className="py-4 px-64">
                <input className="w-full h-16" type="text" placeholder="  Search..." onChange={(event)=>{setSearchTerm(event.target.value)}}/>
            </div>

        
            <div className=" grid grid-cols-4 px-32 py-8 ">
                 {INFOS.filter((INFO)=>{
                    if(searchTerm==""){
                        return INFO
                    }else if (INFO.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return INFO
                    }else if (INFO.domain.toLowerCase().includes(searchTerm.toLowerCase())){
                        return INFO
                    }else if (INFO.gender.toLowerCase().includes(searchTerm.toLowerCase())){
                        return INFO
                    }
                 }).map(INFO =>{
                    return(
                        <>
                        <div className="">
                            <div className="flex gap-2">
                                <img  style ={{height: 200 }}src={INFO.avatar}/>
                                <div className="pt-12 ">
                                    <h1 className="font-bold">{INFO.id}</h1>
                                    <h1 className="font-bold"><span>{INFO.first_name}</span><span> {INFO.last_name}</span></h1>
                                    <h1 className="text-sm">{INFO.gender}</h1>
                                    <h1 className="text-sm" >{INFO.email}</h1>
                                    <h1 className="text-sm" >{INFO.domain}</h1>
                                    <h1 className="text-sm">{INFO.available}</h1>
                                    <h1 className="pt-2"><button className="font-bold text-sm bg-blue-400 rounded-lg px-4 py-2 text-white">Add</button></h1>
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




