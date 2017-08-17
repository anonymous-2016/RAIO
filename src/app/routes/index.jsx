import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.16
 * 
 * @class MainRoutes
 * @extends {Component}
 */

// test components
import Item1 from '../../components/Item1.js';
import Item2 from '../../components/Item2.js';
import Item3 from '../../components/Item3.js';
import TestItem from '../../components/Test.jsx';



/* IM */
// immm
// import * as NRM from '../components/IM/RM/index.jsx';
import {PM} from '../../components/IM/PM/index.jsx';
// impm
import {MM} from '../../components/IM/MM/index.jsx';
import {NRM} from '../../components/IM/RM/index.jsx';
// imnrm
import {NMM} from '../../components/IM/ModuleM/index.jsx';
// imnmm
import {FM} from '../../components/IM/FM/index.jsx';
// imfm
import {LM} from '../../components/IM/LM/index.jsx';
// imlm




/* AM */
import {RM} from '../../components/AM/RM/index.jsx';
// amrm


// main routes
export const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>TestItem</div>,
        main: () => <div><TestItem /></div>
    },
    {
        path: '/api',
        sidebar: () => <div>TestItem</div>,
        main: () => <div><TestItem /></div>
    },
    {
        path: '/item1',
        exact: true,
        sidebar: () => <div>item1</div>,
        main: () => <div><Item1 /></div>
    },
    {
        path: '/item2',
        sidebar: () => <div>item2</div>,
        main: () => <div><Item2 /></div>
    },
    {
        path: '/amrm',
        sidebar: () => <div>AMRM</div>,
        main: () => <div><RM /></div>
    },
    {
        path: '/item3',
        sidebar: () => <div>item3</div>,
        main: () => <div><Item3 /></div>
    },
    {
        path: '/impm',
        sidebar: () => <div>IMPM</div>,
        main: () => <div><PM /></div>
    },
    {
        path: '/immm',
        sidebar: () => <div>IMPM</div>,
        main: () => <div><MM /></div>
    },
    {
        path: '/imnrm',
        sidebar: () => <div>IMNRM</div>,
        main: () => <div><NRM /></div>
    },
    {
        path: '/imnmm',
        sidebar: () => <div>IMNMM</div>,
        main: () => <div><NMM /></div>
    },
    {
        path: '/imfm',
        sidebar: () => <div>IMFM</div>,
        main: () => <div><FM /></div>
    },
    {
        path: '/imlm',
        sidebar: () => <div>IMLM</div>,
        main: () => <div><LM /></div>
    }
];


const MainRoutes = {
    routes
}
export {MainRoutes};
export default MainRoutes;