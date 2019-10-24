import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';

const SPAN = 'span';

@Directive({
  selector: '[ngFurigana]'
})
export class NgFuriganaDirective implements AfterViewInit {
  @Input() ngFurigana: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (!this.isValidElement()) {
      console.warn(
        'Warning: ngFurigana works only on <span> elements without children.'
      );
      return;
    }

    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      `<ruby>${this.el.nativeElement.innerHTML}<rp>(</rp><rt>${this.ngFurigana}</rt><rp>)</rp></ruby>`
    );
  }

  /**
   * Check if the element passed as argument is a <span> element and has no child tags
   * @param el the Element to evaluate
   */
  isValidElement(): boolean {
    return (
      this.el.nativeElement.nodeName.toLowerCase() === SPAN &&
      this.el.nativeElement.childElementCount.length === 0
    );
  }
}
