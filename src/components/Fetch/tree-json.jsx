[
    {
        name: "menu1", /*require*/
        id: 1, /*require*/
        isOpen: true, /*require*/
        customComponent: YOUR_OWN_COMPONENT_FOR_MENU,
        children: [
            {
                name: "submenu1",
                id: 1,
                isOpen: true,
                customComponent: YOUR_OWN_COMPONENT_FOR_SUB_MENU,
                children: [
                    {
                        name: "item1-1",
                        id: 1
                    },
                    {
                        name: "item1-2",
                        id: 2
                    }
                ]
            },
            {
                name: "submenu2",
                id: 2,
                isOpen: true,
                customComponent: YOUR_OWN_COMPONENT_FOR_SUB_MENU,
                children: [
                    {
                        name: "item2-1",
                        id: 1
                    }
                ]
            }
        ]
    },
    {
        name: "menu2", /*require*/
        id: 2, /*require*/
        isOpen: true, /*require*/
        customComponent: YOUR_OWN_COMPONENT_FOR_MENU,
        children: [
            {
                name: "item3-1",
                id: 1
            }
        ]
    }
];