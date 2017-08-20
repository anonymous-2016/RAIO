# required



```jsx


<FormItem>
    {
        getFieldDecorator(index.name, {
            rules: [
                {
                    required: true,
                    message: '请输入必填字段值, 必填字段值不可为空!'
                }
            ],
            initialValue: text
        })(
            <Input 
                onChange={
                    (e) => {
                        if (debug) {
                            console.log(`index.name = `, index.name);
                            console.log(`e = `, e.target.value);
                        }
                        let key = index.name,
                            value = e.target.value;
                        {/* url_obj = Object.assign(
                            url_obj,
                            {
                                key: value
                            }
                        ); */}
                        // url_obj.key = value;// key
                        url_obj[key] = value;
                        // key's value
                        if (debug) {
                            console.log(`${key} url_obj = `, url_obj); 
                        }
                        let str_obj = JSON.stringify(url_obj);
                        url = `${urls.test}?${str_obj}`;
                        {/* 
                            this.setState({
                                testurl: url
                            });
                        */}
                        if (debug) {
                            console.log(`%c changed url = \n`, color.green_16_border, url); 
                        }
                        return url;
                    }
                }
                type="text"
                placeholder="☹️ 暂无默认的示例命令值 !"
            />
        )
    }
</FormItem>


```


```jsx

    <Input 
        onChange={
            (e) => {
                if (debug) {
                    console.log(`index.name = `, index.name);
                    console.log(`e = `, e.target.value);
                }
                let key = index.name,
                    value = e.target.value;
                url_obj[key] = value;
                // key's value
                if (debug) {
                    console.log(`${key} url_obj = `, url_obj); 
                }
                let str_obj = JSON.stringify(url_obj),
                    url = `${urls.test}?${str_obj}`;
                if (debug) {
                    console.log(`%c changed url = \n`, color.green_16_border, url); 
                }
                return url;
            }
        }
        type="text"
        placeholder="☹️ 暂无默认的示例命令值 !"
    />

```





```js


/* 

form

wrapped input


*/


/* 

    table input validation

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            if(object[key] === ""){
                // alret & disable fetch data
            }
        }
    }


*/


/* 

name: Info.schema.BasicInformationRow


    表1:基金经理详细信息(基本资料)
    A0	string	性别
    A1	string	出生日期
    A2	string	学历
    A3	number	证券从业年限
    A4	integer	历任管理基金数
    A5	integer	历任基金经理公司数
    A6	string	简历
    A7	string	照片
    A8	integer	PersonalCode（参数）

    表2:基金经理详细信息(历任管理基金)
    A0	string	管理公司
    A1	string	基金简称
    A2	string	投资类型
    A3	string	到任日期(传参)
    A4	string	离职日期(传参)
    A5	number	任职年化回报
    A6	integer	基金编码(不显示)

    表3:基金经理详细信息(历史回报)
    A0	string	历史回报
    A1	number	3月
    A2	number	6月
    A3	number	YTD
    A4	number	1年
    A5	number	2年
    A6	number	3年
    A7	number	5年

    表4:基金经理详细信息(风险分析)
    A0	string	类型
    A1	number	ɑ
    A2	number	β
    A3	number	SharpeRatio
    A4	number	收益标准差
    A5	string	风险度

    表5:基金经理详细信息(折线图基金值)
    A0	string	时间
    A1	number	基金值
    A2	number	同类平均
    A3	number	沪深300

    表6:基金经理详细信息(折线图同类平均)
    A0	string	时间
    A1	number	基金值
    A2	number	同类平均
    A3	number	沪深300




*/




// input datas
/* 
    const demo_datas = [
        {
            key: "k1",
            name: "ApiName",
            type: "string",
            value: "fund.f9.fund_profile.FundManager.BasicInformations",
            desc: "报表名称"
        },
        {
            key: "k2",
            name: "SecuCode",
            type: "string",
            value: (value || "000011"),
            desc: "基金编码"
        },
        {
            key: "k3",
            name: "Names",
            type: "string",
            value: "阳琨",
            desc: "姓名"
        },
        {
            key: "k4",
            name: "WriteType",
            type: "string",
            value: "json (json文本格式)",
            desc: "返回的数据协议格式 "
        }
    ];

 */
// example



/* 
array.push(
    {
        key: "last-index",
        name: "WriteType",
        type: "string",
        value: "json",
        desc: "返回的数据协议格式 (json文本格式)"
    }
);

 */


 
/* eslint-disable no-console */



/* eslint-enable no-console */

```

## setState

```jsx


this.setState(
    (prevState, props) => {
        return {
            counter: prevState.counter + props.step
        };
    }
);


Object.assign(
    previousState,
    {quantity: state.quantity + 1},
    {quantity: state.quantity + 1},
    // ...
)


this.setState(
    (prevState) => {
        return {
            counter: prevState.quantity + 1
        };
    }
);




this.setState(
    (prevState, props) => {
        return Object.assign(
            previousState,
            {counter: prevState.counter + props.step}
        );
    }
);
```
