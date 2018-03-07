// HS no input
let hs_inputs = document.querySelectorAll(`input.highcharts-range-selector`);
for (let i = 0; i < hs_inputs.length; i++) {
    // hs_inputs[i].setAttribute(`readonly`, `readonly`);;
    // hs_inputs[i].setAttribute(`style`, `cursor: not-allowed`);
    // hs_inputs[i].setAttribute(`style`, `display: none`);
    let old_style = hs_inputs[i].getAttribute(`style`);
    // "top: 10px; position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; text-align: center; font-size: 12px; font-family: "Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif; color: rgb(187, 193, 199); margin-top: 10px; left: 251px;"
    let new_style = `display: none; cursor: not-allowed; readonly`;
    let style = `${old_style} ${new_style}`;
    hs_inputs[i].setAttribute(`style`, style);
}

/*

http://10.1.5.202/stock/f9/fastview/index.html?gilcode=600570.SH&skin=black




// let hs_svg_inputs = document.querySelectorAll(`g.highcharts-label highcharts-range-input`);
let hs_svg_inputs = document.querySelectorAll(`g.highcharts-range-input`);

hs_svg_inputs[0].firstElementChild;
hs_svg_inputs[0].lastElementChild;

hs_svg_inputs[0].children;
hs_svg_inputs[0].children[0];
hs_svg_inputs[0].children[1];

hs_svg_inputs[0].lastElementChild.getAttribute(`style`);
hs_svg_inputs[0].lastElementChild.setAttribute(`style`, `cursor: not-allowed; font-size:12px;font-family:"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif;color:#bbc1c7;fill:#bbc1c7;`);


// g
// g>rect === input box
// g>text === input text

<g class="highcharts-label highcharts-range-input" transform="translate(23,0)">
    <rect fill="none" class="highcharts-label-box" x="0.5" y="0.5" width="94" height="21" stroke="#707070" stroke-width="1"></rect>
    <text x="9.5" y="14" style="font-size:12px;font-family:&quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;color:#bbc1c7;fill:#bbc1c7;">2017-03-07</text>
</g>

*/



setTimeout(() => {
    // HS no input
    let hs_inputs = document.querySelectorAll(`input.highcharts-range-selector`);
    for (let i = 0; i < hs_inputs.length; i++) {
        let old_style = hs_inputs[i].getAttribute(`style`),
            new_style = `display: none; cursor: not-allowed; readonly`,
            style = `${old_style} ${new_style}`;
        hs_inputs[i].setAttribute(`style`, style);
    }
}, 1000);
