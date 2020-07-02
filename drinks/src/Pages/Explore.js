import React from "react";
import {NavLink} from "react-router-dom";
import HeaderLinks from "../Components/HeaderLinks";

import drinksArr from "../Data/drinks.json"

let searchword = "pizza";

const Explore = () => {

    return(
        <div id="startpage"> 
        <HeaderLinks/>
        <br/>
        <p> TODO: 
        <br/> man får söka genom att klicka på explore igen istället för knappen
        <br/> du hamnar numret din drink har i hela listan istället för din filterarde lista 
        <br/> kommentarer fältet uppdateras bara om du lämnar å kommer tillbaka till sidan  
        </p>
        <input
            onChange={(e) => searchword=(e.target.value)}
            placeholder="type here"
        />
            <button onClick={ShowDrinks}>
                search
            </button>

            {ShowDrinks()}

        </div>
    )
}

const ShowDrinks = () => {
        return(
        <div>
            {drinksArr.cocktails.filter(elem => elem.name.toLowerCase().includes(searchword)).map((filtered, elem) => (
                <div key={elem}>
                    <p>{filtered.name}</p>
                    <NavLink key={elem} to={{
                        pathname:'/drinkinfo',
                        elem,
                        whichWay:0
                        }}>

                        <img src={filtered.image} key={elem} alt={filtered.name} />       
                    </NavLink>
            </div>
        ))}
      </div>
        )
    }


export default Explore;