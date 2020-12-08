import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YangFuriganaDirective } from './yang-furigana.directive';
import { TestComponent, FirstTestComponent, SecondTestComponent, ThirdTestComponent, FourthTestComponent, FifthTestComponent } from './test-components.mock';


describe('NgFuriganaDirective', () => {
	let component: TestComponent;
	let fixture: ComponentFixture<TestComponent>
	let debugElement: HTMLElement;
	let rtTag: HTMLElement;

	const loadTestComponent = ((testComponent: Type<TestComponent>) => {
		TestBed.configureTestingModule({
			declarations: [testComponent, YangFuriganaDirective],
		})

		fixture = TestBed.createComponent(testComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		debugElement = fixture.debugElement.nativeElement;
		rtTag = debugElement.querySelector('rt');
	})

	it('Should transform directive into ruby tag', () => {
		loadTestComponent(FirstTestComponent);

		expect(rtTag.innerText).toEqual('あした'); // the <rt> tag should contain the value specified in template
	})

	it('Should recognize inline styles', () => {
		loadTestComponent(SecondTestComponent);

		expect(rtTag.innerText).toEqual('あした'); // the <rt> tag should contain the value specified in template
		expect(rtTag.style[0]).toEqual('color'); // the <rt> tag should have defined the style property added
		expect(rtTag.style.color).toEqual('blue'); // the <rt> tag should have the style properties without any modification
	})

	it('Should create recognize CSS classes', () => {
		loadTestComponent(ThirdTestComponent);

		expect(rtTag.innerText).toEqual('あした'); // the <rt> tag should contain the value specified in template
		expect(rtTag.classList[0]).toEqual('test-class'); // the <rt> tag should have defined the class specified in template
	})

	it('Should not render in case ngFurigana directive is not defined inside a <span> tag', () => {
		loadTestComponent(FourthTestComponent);

		expect(component).toBeTruthy(); // the component should render correctly
		expect(rtTag).toBeFalsy(); // the <rt> tag should not exists
	})

	it('Should not render in case ngFurigana directive is defined inside a HTML element with children', () => {
		loadTestComponent(FifthTestComponent);

		expect(component).toBeTruthy(); // the component should render correctly
		expect(rtTag).toBeFalsy(); // the <rt> tag should not exists
	})
})