import { useEffect, useState } from "react";

import PhoneCard from "../Phone/PhoneCard";


const Favourites = () => {

    const [favourites, setFavourites] = useState([]);
    const [noFound, setNoFound] =useState(false)
    const [isShow, setIsShow] = useState(false)

    useEffect(()=>{
        const favouriteItems = JSON.parse(localStorage.getItem('favourites'));
       if(favouriteItems){
        setFavourites(favouriteItems);
       }
       else{
        setNoFound('No Data Found !')
       }
    },[]);

    console.log(favourites);
    const handleRemove =() =>{
        localStorage.clear();
        setFavourites([]);
        setNoFound('No Data Found !')
    }

    return (
        <div>{ noFound ? <p className="h-[80vh flex items-center justify-center" >{noFound}</p> 
                : 
                <div>
                    {
                        favourites.length > 0 && <button onClick={handleRemove} className="px-5 bg-green-200 block mx-auto">Delete All favourites</button>
                    }
                        <div className="grid grid-cols-2 gap-2">
                            {
                                isShow ? 
                                favourites.map((phone => <PhoneCard
                                key ={phone.id} phone={phone}
                                ></PhoneCard>))
                                :
                                favourites.slice(0,4).map((phone => <PhoneCard
                                    key ={phone.id} phone={phone}
                                    ></PhoneCard>))
                            }
                        </div>
                        {
                        favourites.length > 4 && <button onClick={()=> setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">{isShow ? "See less" : "See more"}</button>
}
                </div>
            }
        </div>
    );
};

export default Favourites;