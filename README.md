# ng-furigana

**ng-furigana** is a quick way to use the `<ruby>` tag in an [Angular](https://angular.io) template. **Furigana** is a japanese word that indicates that little characters you might see sometimes above Kanji (chinese ideograph) that indicates how to read that particular kanji. 

To achieve this, you'd use the `<ruby>` tag in html:
`<ruby>明日<rp>(</rp><rt>あした</rt><rp>)</rp></ruby>`

But you can achieve it with a simpler syntax:
`<span ngFurigana="あした">明日</span>`

Which one do you prefer? You might wanna check [the Wikipedia page](https://en.wikipedia.org/wiki/Furigana) to learn more about furigana in general. Also you can use it with the [International Phonetic Alphabet](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet). It's up to you.

## How to include in your project

The easiest part: use [NPM](https://www.npmjs.com/) to add it in your project. Go to your app folder and type:
 `npm install ng-furigana --save-dev`

Add it will be added to project's `package.json` dependencies.
> Tip: (Add a `-g` to save it globally)

## How to use it

First of all, make sure you add the `NgFuriganaModule` to the list of `import` in the module containing the templates where you're gonna use the directive.
```
@NgModule({
  imports: [
    ...
    NgFuriganaModule <-- Add this and you're good to go!
    ...
  ],
  declarations: [...],
  ...
})
export class MyModule {}
```
After that, you're ready to use it in any template file that includes only text using the attribute `ngFurigana` or `ng-furigana`.
`<span ngFurigana="あした">明日</span>`

> You can use it in every tag, even a generic `<div>` but please mind that if this tag have other tags inside, the furigana won't be rendered.  
>Mind you can separate a single sentence using multiple `span` elements:
> ```
> <span ngFurigana="はたら">働<span>
> <span>きます</span>
> ```
## Add some style to it
Adding style is quite easy. You can add it straight to the span element, along with the ngFurigana attribute:
 
`<span ngFurigana="あした" class="some-class>明日</span>`

In this way, the class will affect the entire HTML, which mean it will work for the main text of the element and the text above.
In case you want assign some style on the furigana text only, you may add to the span element the attributes `ngFuriganaClass` and/or `ngFuriganaStyle`. You can easily guess how they work:

`<span ngFurigana="あした" ngFuriganaClass="some-class>明日</span>`

`<span ngFurigana="あした" ngFuriganaStyle="color:blue;">明日</span>`

The syntax is exactly as you're adding a normal class or a regular style attribute in an HTML template of any kind.


## Test the SampleApp
Here in GitHub you can have a look at the code (it is a simple Angular Directive, nothing that fancy) and a SampleApp that you can run on your own device in order to test it as you wish in a safe environment.
```
git clone https://github.com/Carbammato/ng-furigana.git
cd .\ng-furigana\furiganaSampleApp
npm install
ng serve --open
```
and there your defualt internet browser will open at [http://localhost:4200](http://localhost:4200). Or whatever you configured your environment. Enjoy.




> (Written with [StackEdit](https://stackedit.io/) - it's actually pretty cool)
