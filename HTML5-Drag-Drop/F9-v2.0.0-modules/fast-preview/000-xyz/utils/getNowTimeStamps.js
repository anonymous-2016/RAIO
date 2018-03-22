const getNowTimeStamps = (filename = `速览`, extension = `pdf`, debug = false) => {
    let result = ``,
        date = new Date(),
        name = filename,// "stock 速览" => "stock_速览" ??? Regex
        yyyy = ``,
        MM = ``,
        dd = ``,
        hh = ``,
        mm = ``,
        ss = ``;
    yyyy = date.getFullYear();
    MM = date.getMonth() + 1;// 1 => 01 (zero padding)???
    dd = date.getDate();
    hh = date.getHours();
    mm = date.getMinutes();// 1 => 01 (zero padding)???
    ss = date.getSeconds();
    result = `${name}_${yyyy}${MM}${dd}${hh}${mm}${ss}.${extension}`;
    return result;
};
