// List of group

import { useState } from "react";

//  { imtes: [], heading:string }
interface Props {
    items : string[];
    heading : string;
    //  (itmes: string) => void
    onSelectItem: (item : string) => void;
}

function ListGroup({ items, heading, onSelectItem} : Props) {

    //  Hook
    const [ selectedIndex, setSelectedIndex ] = useState(-1);

    // message if there are no items
    const message = items.length === 0 && <p>No Itmes found</p>

    return (
        <>
            <h1>{ heading }</h1>
            { message }
            <ul className="list-group">
                {items.map((item, index) => ( 
                    <li 
                        className= { 
                            selectedIndex === index 
                                ? 'list-group-item active' 
                                : 'list-group-item' 
                        } 
                        key={item} 
                        onClick={() => { 
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
