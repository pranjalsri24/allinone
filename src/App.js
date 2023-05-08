import React from "react";
function App(){let curdate=new Date();
curdate=curdate.getHours();
let greeting='';
let cssStyle={
    background:'white',
    font:'italic',
    display:'flex'
};
if(curdate>=0 && curdate<12){
    greeting='Good morning';
    cssStyle.color='green';
}
else if(curdate>=12 && curdate<19){
    greeting='Good afternoon';
    cssStyle.color='orange';
}
else{
    greeting='Gud night';
    cssStyle.color='purple';
}
return ( <React.Fragment>
<div>

    <h1><span style={cssStyle}>{greeting}</span></h1>
    <h1 className="heading_style">all in one place:</h1>
    </div>
    </React.Fragment>
);

}
export default App;

