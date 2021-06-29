import React from 'react'
import CharacterItem from "./CharacterItem"
import Pagination from 'rc-pagination';

const CharacterGrid = (props) => {
    console.log(props.items);
    
    return props.isloading ? (<h1>Loading...</h1>) :  (<section className="cards">

        {props.items.map((item) =>(

            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        )

        )}

    </section>
    )
}

export default CharacterGrid
