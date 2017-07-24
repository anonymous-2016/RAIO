# FormItem & Select `mode="multiple"`


```js

<FormItem
    {...formItemLayout}
    label="关联资源"
    hasFeedback
    >
    {
        getFieldDecorator('associateResources', {
            rules: [
                {
                    required: true, 
                    message: '请输入关联资源!'
                }
            ],
            initialValue: ['关联资源010', '关联资源020', '关联资源030']
        })(
            <Select
                mode="multiple"
                style={{width: '100%'}}
                placeholder="Please select a 关联资源"
                onChange={handleChange}
                >
                {childs}
            </Select>
        )
    }
</FormItem>

// options data & fetch / promise

const childs = [];
for (let i = 10; i < 36; i++) {
    childs.push(
        <Option key={`0${i.toString()}`}>
            {`关联资源0${i.toString()}`}
        </Option>
    );
}

```


```jsx

    onSearch = () => {
        console.log(`datas`, datas);
          let newData = datas.push(
            {
                encode: `资源分类!A1`,
                pEncode: `资源分类!A1`,
                name: `名称3`,
                key: key++
            }
        );
        console.log(`newData`, newData);  
        // return 3
        let obj = Object.assign(
            datas,
            {
                encode: `资源分类!A1`,
                pEncode: `资源分类!A1`,
                name: `名称3`,
                key: key++
            }
        );
        console.log(`obj`, obj);
        console.log(`obj.datas`, obj.datas);
        // objects 
        // object => array ???
        this.setState(
            () => {
                return {
                    data: datas
                }
            }
        );
    }

```


