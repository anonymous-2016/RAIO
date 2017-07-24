

类库编码:	 开发者： 
                                
类库名称:	        查询	添加
                                

类库编码: 开发者： 类库名称: 查询 添加
          
                                
                                
编码		名称		开发者	 

类库定义!A1	 




编码: 名称: 描述: 开发者:

确定


```jsx

<Form 
    onSubmit={() => alert('submiting...')}
    layout="inline">

</Form>

<LDM
    title='标题'
    data={record}
    clickOK={clickOK}
>
    <span>{text ? text : `类库定义!A1 default`}</span>
</LDM>

<a
    onClick={
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            return(
                this.setModalVisible(true)
            );
        }
    }
    >
    {this.props.children}
</a>



```

# props & event hanlder & show Modal


```js

    constructor(props){
        super(props);
        // default  true, 一进来就显示，不用 click 通过 props 传递的子组件，来触发 show modal！
        this.state = {
            showModal: true
        }
    }
    setModalVisible = (value) => {
        this.setState({
            showModal: value
        });
        this.props.hide();
    }
    OK = (value) => {
        this.setState({
            showModal: value
        });
        // Error
        // this.props.hide;
        this.props.hide();
    }

```

























