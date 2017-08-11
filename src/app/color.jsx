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



const color = {
    css1,
    css2,
    color_css1,
    color_css2,
    color_css3
};

export {color};
export default color;


/* 

import {color} from '../../app/color.jsx';
// import {color} from '../../app/color.js';

if(debug){
    console.log(`%c get getUserInfos data`, color.color_css1, json);
}

*/