import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading.js';
import _ from 'lodash'
const heading = new Heading();
heading.render('hello world');

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
