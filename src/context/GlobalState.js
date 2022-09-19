import React,{createContext} from "react";
import ramo from '../assets/ramo.png';
import ali from '../assets/ali.png';
import alson from '../assets/alson.png';
import ayaz from '../assets/ayaz.png';
import dogukan from '../assets/dogukan.png';
import sefa from '../assets/sefa.png';
export const GlobalContext=createContext();


export const GlobalProvider=(props)=>{
    return <GlobalContext.Provider  value={{kızlar:[
        {id:1,
        name:"Ali Kemal Cimşit",
    link:"https://www.instagram.com/alikemalcmst/",
description1:"",
description2:"",
img:ali,
},   {id:2,
    name:"Ramazan Ayaz",
link:"https://www.instagram.com/ayazz_ramazan/",
description1:"",
description2:"",
img:ramo,
},   {id:3,
    name:"Doğukan Özgür Yılmaz",
link:"https://www.instagram.com/dogukanozgurylmz/",
description1:"",
description2:"",
img:dogukan,
},   {id:4,
    name:"Sefa Özay",
link:"https://www.instagram.com/sefa_ozay_/",
description1:"",
description2:"",
img:sefa,
},   {id:5,
    name:"Ali Kemal",
link:"https://www.instagram.com/alikemalcmst/",
description1:"",
description2:"",
img:ali,
},   {id:6,
    name:"Ali Kemal Cimşit",
link:"https://www.instagram.com/alikemalcmst/",
description1:"",
description2:"",
img:ali,

}
    ]}}>

        {props.children}
    </GlobalContext.Provider>
}
