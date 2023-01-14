
import { useSelector, useDispatch} from 'react-redux';
import { add}  from '../../store/cartSlice';



export default function TeamInfo (){

    const dispatch = useDispatch();
    const INFOS = useSelector(state => state.cart);


    return(
        <>
        <div>
            <div className="py-64 px-32">
                <div className='flex justify-center gap-8 py-8'>
                <h1 className="text-3xl gap-4 mx-8">ID {INFOS.map((INFO)=>(<h1 className="">{INFO.id}</h1>) )}</h1>
                    <h1 className="text-3xl gap-4 mx-8">TEAM-MEMBERS {INFOS.map((INFO)=>(<h1 className="">{INFO.first_name}</h1>) )}</h1>
                    <h1 className="text-3xl gap-4 mx-8">DOMAIN {INFOS.map((INFO)=>(<h1 className="">{INFO.domain}</h1>) )}</h1>
                    <h1 className="text-3xl gap-4 mx-8">E-mail {INFOS.map((INFO)=>(<h1 className="">{INFO.email}</h1>) )}</h1>
                    <h1 className="text-3xl gap-4 mx-8"> GENDER{INFOS.map((INFO)=>(<h1 className="">{INFO.gender}</h1>) )}</h1>
                    
                </div>
            

    

            </div>
        </div>
        
        </>
    )
};




