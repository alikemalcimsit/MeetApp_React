import React, { useContext } from 'react'
import { MdChat } from "react-icons/md";
import {AiFillInstagram} from "react-icons/ai";
import { GlobalContext } from '../context/GlobalState';
function HomePage() {
    const {kızlar}=useContext(GlobalContext)
    return (
     <div className="HomePage">
        <div class="container">
        <div class="row">
{kızlar.map((kız)=>{
    return(  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="image-flip" >
        <div class="mainflip flip-0">
            <div class="frontside">
                <div class="card">
                    <div class="card-body text-center">
                        <p><img class=" img-fluid" src={kız.img} alt="card image" /></p>
                        <h4 class="card-title">{kız.name}</h4>
                        <p class="card-text">This is basic card with image on top, title, description and button.</p>

                    </div>
                </div>
            </div>
            <div class="backside">
                <div class="card">
                    <div class="card-body text-center mt-2">
                        <h4 class="card-title">{kız.name}</h4>
                        <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                        <br/>
                        <div className="row">
                        <div className="col-md-6"><button className='btn btn-success'><MdChat size={20}/>Chat Now</button></div>
                        <div className="col-md-6"><a href={kız.link}><AiFillInstagram size="30px"></AiFillInstagram>Instagram</a></div>
                    </div>

                </div>
            </div>
            </div>
        </div>
    </div>
</div>)
})}
      
        </div>
        </div>
        </div>
    
    )
}

export default HomePage;