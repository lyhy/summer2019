import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image';
// import _ from 'lodash'
import React from 'react';

const heading = new Heading();
heading.render('kiwi');

const kiwiImage = new KiwiImage();
console.log('kiwi image render')
kiwiImage.render();
