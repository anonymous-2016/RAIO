/**
 * color for console.log()
 * xgqfrms
 * 2017.08.08
 * 
 */

export const color_css1 = `
    color: #0f0;
    font-size: 23px;
`;

export const color_css2 = `
    color: #f0f;
    font-size: 23px;
`;

export const color_css3 = `
    color: #000;
    font-size: 23px;
`;


// debug color
export const css1 = `
    color: red;
`;
export const css2 = `
    color: #f0f;
`;



// name color 
export const red_23 = `
    color: #f00;
    font-size: 23px;
`;

export const green_23 = `
    color: #0f0;
    font-size: 23px;
`;

export const green_16_border = `
    color: #0f0;
    font-size: 16px;
    border: 1px solid #000;
`;


const color = {
    css1,
    css2,
    color_css1,
    color_css2,
    color_css3,
    red_23,
    green_23,
    green_16_border
};

export {color};
export default color;


/* 

import {color} from '../../app/color.jsx';
// import {color} from '../../app/color.js';

if(debug){
    console.log(`%c get getUserInfos data`, color.color_css1, json);
}

if(!debug){
    console.log(`%c get getUserInfos data`, color.color_css1, json);
}

const css = `
    color: #0f0;
    font-size: 23px;
`;
const css2 = `
    color: #f00;
    font-size: 16px;
`;

*/