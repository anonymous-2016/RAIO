

```js




const json = window.json;

json.Info.dependtable
// (2) ["SecuMain", "MF_NetValue"]

let dt_obj = {};
let dt_arr = [];

if(json.Info.name !== undefined){
    dt_obj.name = json.Info.name;
}else{
    dt_obj.name = `☹️ 暂无报表名称!`;
}

if(json.Info.description !== undefined){
    dt_obj.desc= json.Info.description;
}else{
    dt_obj.desc = `☹️ 暂无描述!`;
}

// dt_obj.name = json.Info.description ? json.Info.description : `☹️ 暂无描述!`;
// dt_obj.name = (json.Info.description ? json.Info.description : `☹️ 暂无描述!`);


// let dt_arr = [];
if(json.Info.dependtable !== undefined){
    // dt_obj.dtTables = JSON.stringify(json.Info.dependtable);
    // dt_obj.dtTables = json.Info.dependtable;
    // dt_obj.dtTables = `[${json.Info.dependtable}]`;
    dt_obj.dtTables = `${JSON.stringify(json.Info.dependtable)}`;
    // "dtTables": "[\"SecuMain\",\"MF_NetValue\"]"
    // "["SecuMain","MF_NetValue"]"
    // dt_obj.dtTables = `[${JSON.stringify(json.Info.dependtable)}]`;
    // dt_obj.dtTables = `\`${JSON.stringify(JSON.parse(json.Info.dependtable)}\``;
    // dt_obj.dtTables = `\`${JSON.stringify(JSON.parse("[\"SecuMain\",\"MF_NetValue\"]", null, 4), null, 4)}\``;
    // contact
    // dt_arr = dt_arr.concat(arr2);
}else{
    dt_obj.dtTables = `☹️ 暂无关联的表名`;
}


dt_arr.push(dt_obj);

JSON.stringify(dt_arr, null, 4);

/*


JSON.stringify(dt_arr, null, 4);

[
    {
        "name": "fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail",
        "desc": "基金--> 基金专题统计--> 业绩评价--> 分级基金业绩表现--> 分级基金子基金（A份额）投资价值分析明细",
        "dtTables": "[\"SecuMain\",\"MF_NetValue\"]"
    }
]


[
    {
        "name": "fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail",
        "desc": "基金--> 基金专题统计--> 业绩评价--> 分级基金业绩表现--> 分级基金子基金（A份额）投资价值分析明细",
        "dtTables": [
            "SecuMain",
            "MF_NetValue"
        ]
    }
]



*/

// operates

/*

    + 代表加载此表
    - 代表卸载此表
    代表重新加载此表


    <Icon type="reload" />

    <Icon type="info-circle-o" />

    <Icon type="question-circle-o" />

    <Icon type="plus-circle-o" />

    <Icon type="minus-circle-o" />


    <Icon type="smile-o" />
    <Icon type="smile" />
    <Icon type="frown-o" />
    <Icon type="frown" />


*/

this.setState({
    dt_arr
});

this.setState({
    dt_arr: dt_arr
});


// new fetch datas request ???


```



## tabs

已加载 未加载

```jsx

<div>
    <Button type="primary">全部加载</Button>
    <Button type="primary">全部卸载</Button>
    <Button type="primary">全部重新加载</Button>
</div>

<Table />


<div>
    <button type="button" className="btn btn-large btn-block btn-primary">
        加载此表
    </button>
    <button type="button" className="btn btn-large btn-block btn-primary">
        卸载此表
    </button>
    <button type="button" className="btn btn-large btn-block btn-primary">
        重新加载此表
    </button>
</div>


<div className="tcb-operate-btn-box">
    <Button type="primary" className="tcb-operate-btn">加载此表</Button>
    <Button type="primary" className="tcb-operate-btn">卸载此表</Button>
    <Button type="primary" className="tcb-operate-btn">重新加载此表</Button>
</div>

<div className="tcb-operate-btn-box">
    <Button type="primary" className="tcb-operate-btn">加载</Button>
    <Button type="primary" className="tcb-operate-btn">卸载</Button>
    <Button type="primary" className="tcb-operate-btn">重新加载</Button>
</div>

```





