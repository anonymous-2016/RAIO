const getFormatDate = (debug = false) => {
    let todayDate = new Date(),
        // Sat Feb 24 2018 09:24:46 GMT+0800 (中国标准时间)
        formatYear = ``,
        formatMonth = ``,
        formatDate = ``,
        formatDay = ``,
        formatResult = ``;
    formatYear = todayDate.getFullYear();
    // 2018 (no thousand years bug!)
    //Year 2000 Problem /  Millennium Bug & Year 2000 === Y2K
    // 世纪/千禧年
    formatMonth = todayDate.getMonth() < 9 ? `0${todayDate.getMonth() + 1}` : todayDate.getMonth() + 1;
    // 1 (need + 1)
    formatDay = todayDate.getDay();
    // 6 (week)
    formatDate = todayDate.getDate() < 10 ? `0${todayDate.getDate()}` : todayDate.getDate();
    // 24 (zero padding ???)
    formatResult = `${formatYear}-${formatMonth}-${formatDate}`;
    return formatResult;
};

getFormatDate();
// "2018-02-24"

getFormatDate();
// "2018-02-27"
