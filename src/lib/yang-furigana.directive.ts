import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';

const SPAN = 'span';

@Directive({
  selector: '[yangFurigana]'
})
export class YangFuriganaDirective implements AfterViewInit {
  @Input() yangFurigana: string;
  @Input() yangFuriganaClass: string;
  @Input() yangFuriganaStyle: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (!this.isValidElement()) {
      console.warn(
        'Warning: yangFurigana works only on <span> elements without children.'
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
  private generateRubyTag(): string {
    let styleCode = '';
    if (!!this.yangFuriganaClass) {
      const encapsulationAttribute = this.el.nativeElement.attributes[0];
      styleCode = ` ${encapsulationAttribute.name} class="${this.yangFuriganaClass}"`;
    }
    if (!!this.yangFuriganaStyle) {
      styleCode += ` style="${this.yangFuriganaStyle}"`;
    }

    const furiganaHTML = `<rp>(</rp><rt${styleCode}>${this.yangFurigana}</rt><rp>)</rp>`;
    return `<ruby>${this.el.nativeElement.innerHTML}${furiganaHTML}</ruby>`;
  }
}
