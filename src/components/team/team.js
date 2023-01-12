
import { useSelector, useDispatch} from 'react-redux';
import { remove}  from '../../store/cartSlice';


export default function Team (){
    const dispatch = useDispatch();
    const INFOS = useSelector(state => state.cart);


    const handleRemove =(INFO)=>{
        dispatch(remove(INFO));

    }
    return(
        <>
         <h1 className="flex justify-center font-bold text-6xl py-16"> Team</h1>
         <div className=" grid grid-cols-4 px-32 py-8">
            { INFOS.map((INFO )=> (
                    <div className="flex  bg-gray-100 mx-2 my-4 pb-4" >
                        <img  style ={{height: 200 }}src={INFO.avatar}/>
                        <div className="pt-12 ">
                            <h1 className="font-bold">{INFO.id}</h1>
                            <h1 className="font-bold"><span>{INFO.first_name}</span><span> {INFO.last_name}</span></h1>
                            <h1 className="text-sm">{INFO.gender}</h1>
                            <h1 className="text-sm" >{INFO.email}</h1>
                            <h1 className="text-sm" >{INFO.domain}</h1>
                            <button onClick={()=> handleRemove(INFO.id)} className="bg-red-500 hover:bg-red-300 px-4 py-2 rounded-lg text-sm">Remove player</button>
                        </div>
                    </div>
                ))
            }



         </div>



        </>
    )
};




