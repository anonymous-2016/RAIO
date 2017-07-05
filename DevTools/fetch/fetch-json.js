const data = [
    {"id": "1", "name": "name_1", "parent_id": "0", "depth": "0"},
    {"id": "2", "name": "name_2", "parent_id": "0", "depth": "0"},
    {"id": "3", "name": "name_3", "parent_id": "1", "depth": "1"},
    {"id": "4", "name": "name_4", "parent_id": "3", "depth": "2"}
];

function getMenu(parentID){
    let style = `
        color: rgba(0,2555,0,0.7);
        font-size: 32px;
        border: 1px solid red;
        background: #000;
    `;
    return (
        data.filter(
            // filter parentID
            function(node){
                console.log(`%c nodes = `, `${style}`, node);
                return node.parent_id === parentID;
            }
        ).map(
            // map subMenu
            function(node){
                let exists = data.some(
                    // test childNode
                    function(childNode){
                        console.log(`%c childNode = `, `${style}`, node);
                        return childNode.parent_id === node.id;
                    }
                );
                // recursive
                let subMenu = exists ? `<ul>${getMenu(node.id).join('')}</ul>` : ``;
                return `<li>${node.name}&${subMenu}</li>`;
            }
        )
    );
}


// let initLevel = 0;

let endMenu =getMenu("0");

console.log(`<ul>${endMenu.join('<br/>')}</ul>`);


/*
<ul>
    <li> name_1
        <ul>
            <li> name_3
                <ul>
                    <li> name_4 </li>
                </ul>
            </li>
        </ul>
    </li>
    <li> name_2 </li>
</ul>
*/



/*
<ul>
    <li> name_1 
        <ul>
            <li> name_3 
                <ul> 
                    <li> name_4  </li>
                </ul>
            </li>
        </ul>
    </li>
    <br/>
    <li> name_2  </li>
</ul>
*/















