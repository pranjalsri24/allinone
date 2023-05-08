
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import Data from "./Data";
import  App from "./App";
import "./index.css";

// console.log(Sdata[0])
const currtime=new Date().toLocaleTimeString();
const currdate=new Date().toLocaleDateString();
const cardComponents = Data.map((i)=>(
    <Card
     imgsrc={i.imgsrc}
     description={i.description}
     title={i.title}
     link={i.link}
     />));

ReactDOM.render(
<>
<App/>
<p className="time_date">{currtime}</p>
<p className="time_date">{currdate}</p>
{cardComponents}
</>,document.getElementById("root")

);
