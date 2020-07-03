import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import HeaderLinks from "../Components/HeaderLinks";

import drinksArr from "../Data/drinks.json"

const Explore = () => {

    const [filteredArr, setFilteredArr] = useState(drinksArr.cocktails)

    const filterDrinks = (e) => {
        e.preventDefault();
        const searchWord = e.target.elements.input.value.trim().toLowerCase();
        setFilteredArr(drinksArr.cocktails.filter(elem => elem.name.toLowerCase().includes(searchWord)))
        }
    
    const showDrink = () => {
        if(filteredArr.length === 0){
            return <p>no drinks found with that name</p>
        }
        else return filteredArr.map((filtered, elem) => {
            return( 
                <div>
                    <p>{filtered.name}</p>
                    <NavLink key={elem} to={{
                        pathname:'/drinkinfo',
                        elem,
                        whichWay:0
                    }}>
    
            <img src={filtered.image} key={elem} alt={filtered.name} />       
            </NavLink>
            </div>
            )
        })
    }

    return(
        <div id="startpage"> 
        <HeaderLinks/>
        <br/>
        <p> inte klart: 
        <br/> du skall hamna på rätt drink när du klickar en bild i en filtrerad lista
        <br/> sidan skall uppdateras när man kommenterar en drink
        </p>

        <form onSubmit={filterDrinks}>
        <input name="input"
            placeholder="type here"
        />
            <button>
                search
            </button>
        </form>


            <div>
            {
                showDrink()
            }
            </div>

        </div>
    )
}


export default Explore;