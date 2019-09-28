import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[ngFurigana]'
})
export class NgFuriganaDirective implements AfterViewInit {
  @Input() ngFurigana: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      `<ruby>${this.el.nativeElement.innerHTML}<rp>(</rp><rt>${this.ngFurigana}</rt><rp>)</rp></ruby>`
    );
  }
}
