import preloader from "../../../Assets/Images/preloader.gif";
import React from "react";

let Preloader = (props) => {
    return <div style ={ { backgroundColor: 'white'} }>
        <img src={preloader} />
    </div>

}

export default Preloader;