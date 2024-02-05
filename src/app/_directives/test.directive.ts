import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
    this.elementRef.nativeElement.innerText = this.elementRef.nativeElement.innerText.replaceAll('-', ' ')
  }

}
