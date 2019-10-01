import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showTitle = true;
  title = 'app';

  constructor() {

  }

  ngOnInit() {
    var someResource = new Date();
    setInterval(function() {
      var node = document.getElementById('node');
      if(node) {
        // Do stuff with node and someResource.
        node.innerHTML = JSON.stringify(someResource);
  }
  }, 1000);
  }
}
