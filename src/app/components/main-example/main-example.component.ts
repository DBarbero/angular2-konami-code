import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lol-main-example',
  templateUrl: './main-example.component.html',
  styleUrls: ['./main-example.component.scss']
})
export class MainExampleComponent implements OnInit {

  private godMode: boolean = false
  private title: string = "Boring title..."

  constructor() { }

  handleKonamiCode(e) {
    this.godMode = e
    if (e) { this.title = 'Funny Title!' } else { this.title = 'Boring title...' }
  }


  ngOnInit() {
  }

}
