import './hello-world-button.scss';
class HelloWorldButton  {
  buttonCssClass = "hello-world-button"
  render() {
    const button = document.createElement('button');
    const body = document.querySelector('body');
    button.innerHTML = 'hello world';
    button.classList.add(this.buttonCssClass);
    button.onclick = function() {
      const p = document.createElement('p');
      p.innerHTML = 'Hello text';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    }

    
    body.appendChild(button);
  } 
}

export default HelloWorldButton;