// Footer

import React, { Component } from 'react';

import  './Footer.css';

class XFooter extends Component {
    render () {
        const agy = () => {
            let yid = document.querySelector('#autoGetYear');
            const year =  new Date().getFullYear();
            let alink = document.createElement('a');
            alink.href = "https://www.gildata.com/";
            const name = `<a href="https://www.gildata.com/">Gildata</a>`; 
            /* 
                Virtual DOM / Shadow DOM
                document.createElement(tagName[, options]);
                document.createDocumentFragment();
            */
            // return yid.innerText = `Copyright © ${year} ShangHai ${alink ? `Gildata` : alink} Inc. All Rights Reserved`;
            return yid.innerText = `Copyright © ${year} ShangHai`;
        };
        // setTimeout(agy, 1000);
        // DOMContentLoaded
        window.onload = () => {
            agy();
        };
        /* document.onload = () => {
            agy();
        }; */
        return (
            <div id="crm_footer">
                {/* <p className="copyright">
                    Copyright &copy; <a href="https://www.gildata.com/">Gildata</a> 2017
                </p> */}
                <p className="autoGetAll">
                    {/*  Copyright © ? ShangHai Gildata Inc. All Rights Reserved  */}
                    <span id="autoGetYear"></span>
                    <a id="a-link" href="https://www.gildata.com/"> Gildata </a>
                    <span> Inc. All Rights Reserved </span>
                </p>
            </div>
        );
    }
}


export {XFooter};
export default XFooter;