// import addImage from './add-image';
import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading.js';
const heading = new Heading();
heading.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
// addImage()

if(process.env.NODE_ENV === 'production') {
	console.log('p')
}else if(process.env.NODE_ENV === 'development') {
	console.log('p')
}

helloWorldButton.erroFunc();