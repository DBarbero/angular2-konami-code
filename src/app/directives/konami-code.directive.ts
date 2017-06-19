import { Directive, Input, Output, EventEmitter, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[KonamiCode]'
})
export class KonamiCodeDirective implements OnInit{

  private konamiCodeDefault: number[] = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  @Input()
  customCode: number[]

  @Output()
  codeResult: EventEmitter<any> = new EventEmitter<any>()

  private codeKeys: number[]
  private keyIndex: number = 0
  private godMode: boolean = false

  constructor() { }

  @HostListener('window:keydown', ['$event'])
  keyListen(e: KeyboardEvent) {
    if (e.keyCode == this.codeKeys[this.keyIndex++]) {
      if (this.keyIndex === this.codeKeys.length) {
        this.keyIndex = 0
        this.godMode = !this.godMode
        this.codeResult.emit(this.godMode)
      }
    } else {
      this.keyIndex = 0
    }
  }

  ngOnInit() {
    this.codeKeys = this.customCode || this.konamiCodeDefault
  }

}
