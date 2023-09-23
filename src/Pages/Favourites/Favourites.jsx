import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard"


const Favourites = () => {

    const [favourites, setFavourites] = useState([]);
    const [noFound, setNoFound] =useState(false)

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

    return (
        <div>{ noFound ? <p className="h-[80vh flex items-center justify-center" >{noFound}</p> 
                : 
                <div>
                        <div>
                            {
                                favourites.map(phone => <PhoneCard
                                key ={phone.id} phone={phone}
                                ></PhoneCard>)
                            }
                        </div>
                </div>
            }
        </div>
    );
};

export default Favourites;