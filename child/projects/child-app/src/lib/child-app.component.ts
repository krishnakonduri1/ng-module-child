import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-child-app',
  template: `
    <p>
      child-app works!
    </p>
  `,
  styles: [
  ]
})
export class ChildAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
