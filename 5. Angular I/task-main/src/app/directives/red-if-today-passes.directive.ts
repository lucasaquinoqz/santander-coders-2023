import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRedIfTodayPasses]'
})

export class RedIfTodayPassesDirective {
  @Input() passouData!: Date
  hoje:Date = new Date

  constructor(private element: ElementRef) {}

  ngOnInit() {
    if(new Date(this.passouData) < new Date()) {

      this.element.nativeElement.style.background = 'red'
    }
  }

}
