import React from "react";
function Countrycard({name,flag}){
    return(
        <div className="card">
            <div>
                <img src={flag} alt={name} className="flag"/>
                <h3>{name}</h3>
            </div>

        </div>
    )
}
export default Countrycard;