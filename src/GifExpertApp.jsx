import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch-Man']);
    
    const onAddCategory = (onNewCategory) => {

        if( categories.includes(onNewCategory) ) return;

        // setCategories( cat => [...categories, 'Damon Slayer'] );
        setCategories( [onNewCategory, ...categories] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {
                categories.map( category => (
                    <GifGrid key={ category } category={ category } />
                ))
            }
        </>
    )
}
