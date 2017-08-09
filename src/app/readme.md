# Component Template


```jsx
/* 

login router redirection

uid
pwd

https://codepen.io/gildata/pen/breOBz?editors=0111

/login  => /api/search


Search
RequestName / 关键字 Select

Menu Trees


jquery & event listener & params


基金->F9

    {
        path: '/api/search',
        sidebar: () => <div>IMLM</div>,
        main: () => <div><SearchResult /></div>
    },
    SearchResult > Input/Output/Test (Tabs) , 此报表开发者 disable input (<input refs id="search_developer" type="text" disabled="">)
    Input > Table 字段名 类型 注释
    Output > 编号 类型 注释 (multi tables)
    Test > 必填项 table, 开始测试 btn 查看命令 Modal, 可选项 form (show ? 点此展开“可选项” : 收起“可选项” ), 测试结果 Table

    // pass gradeparent functions to childs
*/


```



```js


var JSON = {
    menu: [
        {
            name: 'Croatia',
            link: '0',
            sub: null
        },
        {
            name: 'England',
            link: '1',
            sub: [
                {name: 'Arsenal',link: '0-0', sub: null},
                {name: 'Liverpool',link: '0-1', sub: null},
                {name: 'Manchester United',link: '0-2', sub: null}
            ]
        },
        {
            name: 'Spain',
            link: '2',
            sub: [
                {name: 'Barcelona',link: '2-0', sub: null},
                {name: 'Real Madrid',link: '2-1', sub: null}
            ]
        },
        {
            name: 'Germany',
            link: '3',
            sub: [
                {name: 'Bayern Munich',link: '3-1', sub: null},
                {name: 'Borrusia Dortmund',link: '3-2', sub: null}
            ]
        }
    ]
};


var getMenuItem = function (itemData) {
    var item = $("<li>").append(
        $("<a>", {
            href: '#' + itemData.link,
            html: itemData.name
        })
    );
    if (itemData.sub) {
        var subList = $("<ul>");
        $.each(itemData.sub, function () {
            // 递归调用
            subList.append(getMenuItem(this));
        });
        item.append(subList);
    }
    return item;
};


var $menu = $("#menu");
$.each(data.menu, function () {
    $menu.append(
        getMenuItem(this)
    );
});
$menu.menu();


```

https://stackoverflow.com/questions/19003285/creating-a-menu-from-json

# 多层 data

> 递归解析

```jsx

<SubMenu 
        key="sub0"
        title={
            <span>
                <Icon type="area-chart" style={{fontSize: 18, color: '#f0f'}} className=""/>
                <span
                    style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.7)'}}
                    className=""
                    >
                    just for test
                </span>
            </span>
        }
    >
    <Menu.Item key="1">
        <Link to="/test">
            <Icon type="area-chart" style={{fontSize: 12, color: '#fff'}}/>
            test
        </Link>
    </Menu.Item>
</SubMenu>

```


# 单层 data

> 反递归， 递归解析 ???


## 最好的解决方案是首先将你的数据结构转换成一个树，一个父/子关系


https://stackoverflow.com/questions/7133657/create-a-nested-ul-menu-based-on-the-url-path-structure-of-menu-items

```js


var menuItems = [  
    {  
        name : "Store",  
        url : "/store"  
    },  
    {  
        name : "Travel",  
        url : "/store/travel"  
    },  
    {  
        name : "Gardening",  
        url : "/store/gardening"  
    },  
    {  
        name : "Healthy Eating",  
        url : "/store/healthy-eating"  
    },  
    {  
        name : "Cook Books",  
        url : "/store/healthy-eating/cook-books"  
    },  
    {  
        name : "Single Meal Gifts",  
        url : "/store/healthy-eating/single-meal-gifts"  
    },  
    {  
        name : "Outdoor Recreation",  
        url : "/store/outdoor-recreation"  
    },  
    {  
        name : "Hiking",  
        url : "/store/outdoor-recreation/hiking"  
    },  
    {  
        name : "Snowshoeing",  
        url : "/store/outdoor-recreation/hiking/snowshoeing"  
    },  
    {  
        name : "Skiing",  
        url : "/store/outdoor-recreation/skiing"  
    },  
    {  
        name : "Physical Fitness",  
        url : "/store/physical-fitness"  
    },  
    {  
        name : "Provident Living",  
        url : "/store/provident-living"  
    }  
];



// Add an item node in the tree, at the right position
function addToTree( node, treeNodes ) {
    // Check if the item node should inserted in a subnode
    for ( var i=0; i<treeNodes.length; i++ ) {
        var treeNode = treeNodes[i];
        // "/store/travel".indexOf( '/store/' )
        if ( node.url.indexOf( treeNode.url + '/' ) == 0 ) {
            addToTree( node, treeNode.children );
            // Item node was added, we can quit
            return;
        }
    }
    // Item node was not added to a subnode, so it's a sibling of these treeNodes
    treeNodes.push({
        name: node.name,
        url: node.url,
        children: []
    });
}

//Create the item tree starting from menuItems
function createTree( nodes ) {
    var tree = [];
    for ( var i=0; i<nodes.length; i++ ) {
        var node = nodes[i];
        addToTree( node, tree );
    }
    return tree;
}
var menuItemsTree = createTree(menuItems);
console.log(menuItemsTree);


```






```js


{
  "Success" : true,
  "Info" : [ 
    {
        "name" : "fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail",
        "description" : "基金--> 基金专题统计--> 业绩评价--> 分级基金业绩表现--> 分级基金子基金（A份额）投资价值分析明细",
        "dependtables" : [ "SecuMain", "MF_NetValue" ]
    },
    {
        "name" : "fund.topic.performance_evaluation.fund_rating.TianXiang.Filter",
        "description" : "基金 -> 专题统计 -> 业绩评价 -> 基金评级 -> 天相基金评级(筛选条件)",
        "dependtables" : [ "MF_TXSECFundRating" ]
    },
    {
        "name" : "JYTopic.StockSecondaryMarket.StockMarketPeform",
        "description" : "主板->专题统计->二级市场->市场表现->个股行情表现",
        "dependtables" : [ "LC_DIndicesForValuation", "LC_ExgIndustry", "QT_Performance", "SecuMain", "BaseCode", "Sector", "SectorComponent" ]
    },
    {
        "name" : "fund.topic.agency_study.consignment_agency.FundType",
        "description" : "基金--> 基金专题统计--> 机构研究--> 代销机构--> 代销机构统计(按基金类型)",
        "dependtables" : [ "MF_FundArchives", "LC_IssueAndListAgent", "LC_InstiArchive" ]
    }
}


```











