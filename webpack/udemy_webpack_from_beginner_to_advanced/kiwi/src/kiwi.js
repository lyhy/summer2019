// import Heading from './components/heading/heading.js';
// import KiwiImage from './components/kiwi-image/kiwi-image';
// // import _ from 'lodash'
// import React from 'react';
// import HelloWorldButton from './components/hello-world-button/hello-world-button.js';

// const heading = new Heading();
// heading.render('kiwi');

// const kiwiImage = new KiwiImage();
// console.log('kiwi image render')
// kiwiImage.render();

// import('HelloWorldApp/HelloWorldButton')
// .then((HelloWorldModule) => {
// 	const HelloWorlButton = HelloWorldModule.default;
// 	const helloWorlButton = new HelloWorlButton();
// 	helloWorlButton.render()	
// })
import KiwiPage from './components/kiwi-page/kiwi-page.js';

const kiwiPage = new KiwiPage();
kiwiPage.render();
