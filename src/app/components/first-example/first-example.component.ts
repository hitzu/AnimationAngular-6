import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-first-example',
  templateUrl: './first-example.component.html',
  styleUrls: ['./first-example.component.css'],
  animations : [
    trigger('clickedState', [
      state('default', style({
        backgroundColor: 'orange',
        width : '100px',
        height : '100px'
      })),
      state('clicked', style({
        backgroundColor: 'blue',
        width : '300px',
        height : '50px'
      })),
      state('mousedown', style ({
        backgroundColor: 'red',
        border : '1px solid black ',
        width : '100px',
        height : '100px'
      })),
      transition('default => clicked', animate('200ms 500ms ease-in')),
      transition('clicked => default', animate('200ms 500ms ease-in')),
      transition('default => mousedown', animate('200ms ease-in')),
      transition('mousedown => default', animate('200ms ease-in'))
    ])
  ]
})
export class FirstExampleComponent implements OnInit {
  public clickInfo: string = "default"
  public mouseDownInfo : string = 'default'
  constructor() { }

  ngOnInit() {
  }

  onClickSimple(){
    this.clickInfo = "clicked";
    setTimeout( () => {
      this.clickInfo = 'default'
    }, 2000)
  }

  OnMouseDownSimple(){
    console.log("entro")
    this.mouseDownInfo = "mousedown";
  }

  OnMouseUpSimple(){
    this.mouseDownInfo = 'default';
  }

}
