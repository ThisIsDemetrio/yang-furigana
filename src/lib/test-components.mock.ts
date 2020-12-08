
import { Component } from '@angular/core';

export abstract class TestComponent {}

@Component({ template: '<span yangFurigana="あした">明日</span>' })
export class FirstTestComponent extends TestComponent {}

@Component({ template: '<span yangFurigana="あした" yangFuriganaStyle="color:blue;">明日</span>' })
export class SecondTestComponent extends TestComponent {}

@Component({
	template: '<span yangFurigana="あした" yangFuriganaClass="test-class">明日</span>',
	styles: ['.test-class { font-style: italic; color: red; font-size: 0.6rem; }']
})
export class ThirdTestComponent extends TestComponent { }

@Component({ template: '<div yangFurigana="あした">明日</div>' })
export class FourthTestComponent extends TestComponent {}

@Component({ template: '<span yangFurigana="あした">明日 <i class="fa fa-icon"></i></span>' })
export class FifthTestComponent extends TestComponent {}