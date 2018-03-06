$(
    $.date_input.initialize
    // $.date_input.initialize()
);
// Utils
const getFullTodayDate = (debug = false) => {
    const date = new Date();
    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();
    // week_daya = date.getDay();
    // 0 padding
    month = (month > 9) ? month : `0${month}`;
    day = (day > 9) ? day : `0${day}`;
    let today = `${year}-${month}-${day}`;
    if (debug) {
        console.log(`today =`, today, typeof(today));
        if (window.copy) {
            copy(today);
        } else {
            console.log(`Your poor browser doesn't support \`copy()\`, please download Google Chrome! \nhttps://www.google.com/intl/en/chrome/browser/\n`, window.copy);
        }
    }
    return today;
};
let input_value = document.querySelector(`[data-uid="jquery-datepicker"]`);
// input_value.value = "2018-02-07"; // today
input_value.value = getFullTodayDate();
// input_value.value;
// 2018-02-07
// input_value.addEventListener("change", () => {
//     console.log(`new & input_value.value = `, input_value.value);
// });
input_value.addEventListener("change", function() {
    console.log(`new & input_value.value = `, input_value.value);
});
// input_value.onchange = () => {
//     console.log(`new & input_value.value = `, input_value.value);
// };
