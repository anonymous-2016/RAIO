# 模块管理

													
菜单														
                                        
模块名称：				模块编码:						
                                        
类库名称:				模块命令:				查询	添加	
                                        
                                        
模块编码		模块名称		模块命令		类库
	
模块定义!A1						类库定义!A1				




## 模块定义


模块编码:				
                
模块名称				
                
模块描述:				
                
                
关联类库:				
                
模块命令:				
                
模块参数:				
                
        确定		


## 类库定义
            
编码:							
                            
名称:							
                            
描述:							
                            
开发者:							
                            
    确定						




````js

let a = document.createElement('a', 'a `is` attribute name');

a;
// <a is=​"a `is` attribute name">​</a>​

```


# Input.TextArea

> Input[type=textarea]


https://ant.design/components/input-cn/#Input.TextArea


const InputTextArea =  Input.TextArea;




# Ant Table `key` & `rowKey


```js

// key` prop,or set `rowKey

// ???
// Warning: Each record in table should have a unique `key` prop,or set `rowKey` to an unique primary key. 
let newClomuns = datas.map(
    (data, index) => {
        // fill columns
        console.log(`index`, index);
    }
);

console.log(`newClomuns`, newClomuns);

// datas {key: '1'}, 后端返回的 json 对象，包含一个 key， 字段！


let newDatas = datas.map(
    (data, index) => {
        data.indexkey = index;
        // data add a new property
        return data;
    }
);

// datas {key: '1'}, 前端， 修改返回的 json 对象，新添加一个 indexkey / key / rowKey， 字段！

```







