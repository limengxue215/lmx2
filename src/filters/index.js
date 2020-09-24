import Vue from 'vue';
import date from './date.js';

Vue.filter('date',date);

import {fillzero} from './fillzero.js' ;

Vue.filter('fillzero',fillzero);

import {tofixed} from './tofixed.js' ;
Vue.filter('tofixed',tofixed)