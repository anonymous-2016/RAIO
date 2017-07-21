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