import React from "react";
function card(props){
    return(
        <>
        <div className="cards">
        <div className="card">
        <img src={props.imgsrc} alt="randomImage" className="card_img"/>
        <div className="card_info">
        <h2 className="card_category">{props.description}</h2>
        <h3 className="card_title">{props.title}</h3>
        <a href={props.link} target="blank">
            <button>see more info</button>
        </a>
        </div>
        </div>
        </div>
        </>
    )
}
export default card;