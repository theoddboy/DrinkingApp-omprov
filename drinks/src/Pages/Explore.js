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
        <p> inte klart: 
        <br/> du skall hamna på rätt drink när du klickar en bild i en filtrerad lista
        <br/> sidan skall uppdateras när man kommenterar en drink eller klickar på sök
        <br/> error när sökning gått fel
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