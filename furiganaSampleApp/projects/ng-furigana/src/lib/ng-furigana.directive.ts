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
  @Input() ngFuriganaClass: string;
  @Input() ngFuriganaStyle: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (!this.isValidElement()) {
      console.warn(
        'Warning: ngFurigana works only on <span> elements without children.'
      );
      return;
    }

    const html = this.generateRubyTag();
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', html);
  }

  /**
   * Check if the element passed as argument is a <span> element and has no child tags
   * @param el the Element to evaluate
   */
  private isValidElement(): boolean {
    return (
      this.el.nativeElement.nodeName.toLowerCase() === SPAN &&
      this.el.nativeElement.childElementCount === 0
    );
  }

  /**
   * Generate the template to be added to the HTML as result
   */
  generateRubyTag(): string {
    let styleCode = '';
    if (!!this.ngFuriganaClass) {
      styleCode = ` class="${this.ngFuriganaClass}"`;
    }
    if (!!this.ngFuriganaStyle) {
      styleCode += ` style="${this.ngFuriganaStyle}"`;
    }

    const furiganaHTML = `<rp>(</rp><rt${styleCode}>${this.ngFurigana}</rt><rp>)</rp>`;
    return `<ruby>${this.el.nativeElement.innerHTML}${furiganaHTML}</ruby>`;
  }
}
