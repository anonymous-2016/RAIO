# API checker


> API local service



1. checker

2. CURD: get/post/delete/modify/update/creat

3. no data & exception 





## API Tools

https://swagger.io/


http://graphql.org

https://graphql.org.cn/


https://www.pluralsight.com/courses/five-essential-tools-building-rest-api


> 10-free-tools-for-api-design-development-and-testing

https://www.infoworld.com/article/3060731/apis/10-free-tools-for-api-design-development-and-testing.html


http://jsonstub.com/



```css


[data-link*="otc-"]>a {
    color: #3285ff;
    text-decoration: none;
    font-size: 12px;
    font-weight: normal;
    float: right;
    margin-top: 3px;
}

[data-link*="otc-"]>a:nth-of-type(1) {
    margin-right: 54px;
}

[data-more*="otc-"]>a {
    color: #3285ff;
    text-decoration: none;
    font-size: 12px;
    font-weight: normal;
    float: right;
    margin-top: 3px;
}

[data-more*="otc-"]>a:nth-of-type(1) {
    margin-right: 54px;
}

```



<span data-link="otc-newly-added-protocol-link">
    <a href="#更多" data-uid="1106" data-turn-to-uid="node-uid-newly-added-protocol" draggable="false">更多</a>
</span>


<span data-more="otc-listing-situation-link">
    <a href="#更多" data-uid="85648" data-turn-to-uid="node-uid-listing-situation-data" draggable="false">更多</a>
</span>


<a href="#more" data-uid="1094" data-topic-category="NQTOPIC" data-turn-to-uid="node-uid-additional-issues-all">更多</a>


公告节点ID   100235
新闻节点ID   100238

<span data-link="otc-additional-issues-all-link">
    <a href="#more" data-uid="1094" data-topic-category="NQTOPIC" data-turn-to-uid="node-uid-additional-issues-all">更多</a>
</span>

<a href="#news" data-uid="100238" data-topic-category="NQTOPIC" data-turn-to-uid="node-uid-thematic-statistics-news">更多</a>

<a href="#bulletin" data-uid="100235" data-topic-category="NQTOPIC" data-turn-to-uid="node-uid-thematic-statistics-bulletin">更多</a>



<a href="#xxxxxx" data-uid="xxxxxx" data-topic-category="NQTOPIC" data-turn-to-uid="node-uid-xxxxxx">更多</a>


```js

    // more
    setTimeout((debug = false) => {
        let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-additional-issues-all"]`);
        if (debug) {
            console.log(`turn_to_uid dom = \n`, turn_to_uid);
        }
        if (turn_to_uid !== null) {
            turn_to_uid.addEventListener(`click`, (e) => {
                    let uid = e.target.dataset.uid,
                        topic_category  = e.target.dataset.topicCategory,// 专题分类名称常量
                        node_path = `13\\${topic_category}\\${uid}`;
                    try {
                        if (uid !== undefined && topic_category !== undefined) {
                            ChromeExternal.Execute("ExecuteCommand", node_path);
                            // ChromeExternal.Execute("ExecuteCommand", `13\\${topic_category}\\${uid}`);
                        }else{
                            console.log(`ChromeExternal \nuid === ${uid} & topic_category === ${topic_category}`);
                        }
                    } catch (error) {
                        console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                        console.log(`node uid = `, uid);
                        console.log(`node topic_category = `, topic_category);
                        console.log(`node node_path = `, node_path);
                    }
                });
        }else{
            // null
            throw new Error(`turn_to_uid dom is `, turn_to_uid);
        }
    }, 0);

```

