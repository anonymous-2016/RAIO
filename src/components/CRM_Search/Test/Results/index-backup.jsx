{
    tables.map(
        (table, index) => {
            {/* console.log(`tab key index ${index}`); */}
            if (debug) {
                 console.log(`%c table[${index}] = \n`, color.css2, table);
                 console.log(`%c JSON.stringify(table, null, 4) = \n`, color.css2, JSON.stringify(table, null, 4));
                 console.log(`%c RT JSON.stringify(table.datas) = \n`, color.css2, JSON.stringify(table.datas, null, 4));
                /*
                    [
                        {
                            "type": "string",
                            "Description": "交易日期",
                            "Format": "date-time",
                            "name": "A0",
                            "new_type": "STRING",
                            "desc": "交易日期",
                            "test_name": "A0",
                            "key": "k0000"
                        },
                    ]
                */
            }
            // tab.name === "AnyManagedFundsRow":[] 
            let cols_arr = [];
            table.datas.map(
                (obj, index) => {
                    let temp_obj = {};
                    if (debug) {
                        console.log(`#@$ obj = \n`, JSON.stringify(obj, null, 4));
                        /*
                            {
                                "type": "integer",
                                "name": "ByteV",
                                "new_type": "INTEGER",
                                "desc": "☹️ 暂无注释",
                                "test_name": "BYTEV",
                                "Description": "☹️ ByteV 暂无注释",
                                "key": "k0000"
                            }
                        */
                    }
                    if(obj.hasOwnProperty("test_name")){
                        temp_obj.title = obj["desc"];
                        // temp_obj.title = obj["Description"];
                        // temp_obj.title = `${obj["name"]}-${obj["desc"]} `;
                        // name
                        /* 
                            // set cell length by Max.value.length ? width: 100,
                            // set special value Fixed width ? fixed: 'left'
                            // Results/index.jsx
                            { title: 'Column 1', dataIndex: 'address', key: '1', width: 150, fixed: 'left', width: 100, },
                        */
                        // "基金获奖情况"
                        /*
                            switch (obj.name) {
                                case "TableV":
                                    // "TableV"
                                    temp_obj.width = "500";
                                    break;
                                case "C9":
                                    temp_obj.width = "500";
                                    break;
                                case "C8":
                                    temp_obj.width = "500";
                                    break;
                                case "C4":
                                    temp_obj.width = "500";
                                    break;
                                default:
                                    // temp_obj.width = "500";
                                    break;
                            }
                        */
                        // 多 case - 单一操作
                        // 这种方法使用这样一个技巧，就如果 case 语句之下没有 break,
                        // 它就将继续执行下一个 case 的语句而不论该 case 是否匹配。
                        temp_obj.key = obj.test_name;
                        temp_obj.dataIndex = obj["test_name"];
                        // ??? report name / table name 
                        // in case , some C? no need `temp_obj.width = "400px";`
                        switch (obj.name) {
                            case "TableV":
                                temp_obj.width = "500px";
                                break;
                            case "ModConfig":
                                temp_obj.width = "700px";
                                break;
                            case "C9":
                            case "C8":
                            case "C4":
                                // shared break;
                                temp_obj.width = "400px";
                                break;
                            case "C7":
                            case "C6":
                            case "C5":
                            case "C2":
                            case "A3":
                                temp_obj.width = "200px";
                                break;
                            case "A0":temp_obj.width = "100px";
                                break;
                            default:
                                // temp_obj.width = "500";
                                break;
                        }
                        /*
                            if(obj.name === "TableV" || obj.name === "C9" || obj.name === "C8" || obj.name === "C4"){
                                // temp_obj.key = "TL;TR";
                                // temp_obj.dataIndex = "TL;TR";
                                // Too long; to read // ☹️ ByteV 
                                temp_obj.key = obj.test_name;
                                temp_obj.dataIndex = obj["test_name"];
                                // temp_obj.fixed = "right";
                                //fixed 列是否固定，可选 true(等效于 left) 'left' 'right', boolean|string, false
                                temp_obj.width = "500";
                                // width 列宽度 string|number
                            }else{
                                temp_obj.key = obj.test_name;
                                temp_obj.dataIndex = obj["test_name"];
                            }
                            // temp_obj.dataIndex = obj["test_name"];
                        */
                    }
                    cols_arr.push(temp_obj);
                    // TableV ???
                }
            );
            if (debug) {
                console.log(`%c new cols = \n`, `color: #f0f, font-size: 23px`, JSON.stringify(cols_arr, null, 4));
            }
            return(
                <TabPane 
                    tab={
                        <span style={{fontSize: 12}}>
                            <Icon type="apple" />
                            {`表${++index}:${table.title || ""}`}
                        </span>
                    }
                    key={(++index)}
                    style={{
                        boxSizing: "border-box",
                        // maxWidth: 850,
                        width: "calc(100%)",
                    }}>
                    {/* test data, output data */}
                    <RT
                        dataSource={results}
                        // test results
                        // columns={table.datas}
                        columns={cols_arr}
                        style={{
                            // maxWidth: 850,
                            width: "calc(100%)",
                            // width: 850,
                            // minWidth: 600
                            boxSizing: "border-box",
                        }}
                    />
                </TabPane>
            )
        }
    )
}