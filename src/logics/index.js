import React from "react";
import * as Contexts from "src/reactctxts";

export function useAppLogic()
{
    const server = React.useContext(Contexts.Server);

    const [title, setTitle] = React.useState("Loading!");
    const [items, setItems] = React.useState([]);
    function onAddItemClick()
    {
        console.log("Add item!");
    }

    React.useEffect(()=>{
        async function impl()
        {
            const itemsData = await server.itemsData();

            setTitle("Loaded!");
            setItems(itemsData.map(
                itemData=>({
                    ...itemData,
                    onDeleteClick(){console.log(itemData.id)},
                })
            ));
        }
        impl();
    }, []);

    return {
        title,
        onAddItemClick,
        items,
    };
}
