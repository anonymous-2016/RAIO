# 资源管理

													
资源编码:				资源分类:					
                                    
资源名称:							查询	添加	
                                    
                                    
编码		分类编码		名称		描述			
资源定义!A1		资源分类!A1							
													




## 资源定义


资源编码:

资源名称:

资源描述:
                
资源配置:
                
分类编码

> 资源分类列表!A1	

掩码定义






## 资源分类
                            
    分类编码:						
                            
    分类名称:				查询	添加	
                            
                            
    编码		父编码		名称		
    资源分类!A1		资源分类!A1				

分类编码:				
                
分类名称:				
                
父分类编码:				
                
    确定			





# 资源分类


分类编码: 分类名称: 父分类编码:



# 资源分类列表


分类编码:						
                        
分类名称:				查询	添加	
                        
                        
编码		父编码		名称		
资源分类!A1		资源分类!A1				

编码 父编码 名称 资源分类



````js

let a = document.createElement('a', 'a `is` attribute name');

a;
// <a is=​"a `is` attribute name">​</a>​




```




# unique `key` & set `rowKey`

Warning: Each record in table should have a unique `key` prop,or set `rowKey` to an unique primary key.




#  Objects are not valid as a React child

> Uncaught Error: Objects are not valid as a React child (found: object with keys {}). 
If you meant to render a collection of children,
 use an array instead or wrap the object using createFragment(object) from the React add-ons.




# You provided a `value` prop to a form field without an `onChange` handler.

> Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler.
 This will render a read-only field. 
 If the field should be mutable use `defaultValue`. 
 Otherwise, set either `onChange` or `readOnly`. 
 Check the render method of `Input`.


# Input value & onChange()

```jsx

    <FormItem
        label={<span className="left-spaces">分类编码</span>}
        {...formItemLayout}
        >
        {
            getFieldDecorator('maskDefine', {
                initialValue: record.rname,
                rules: [{ required: true, message: '分类编码' }],
            })
            (
                <div>
                    <Input 
                        prefix={<Icon type="idcard" style={{}} />} 
                        type="text" 
                        placeholder="资源分类列表!A1"
                        value={"smg"}
                        onChange={e => e.target.value}
                        />
                    {/* seting props values */}
                    {'资源分类列表 Modal'}
                </div>
            )
        }
    </FormItem>

```









