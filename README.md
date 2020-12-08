# yang-furigana

**yang-furigana** is a quick way to use the `<ruby>` tag in an [Angular](https://angular.io) template. **Furigana** is a japanese word that indicates that little characters you might see sometimes above Kanji (chinese ideograph) that indicates how to read that particular kanji. 

To achieve this, you'd use the `<ruby>` tag in html:
`<ruby>明日<rp>(</rp><rt>あした</rt><rp>)</rp></ruby>`

But you can achieve it with a simpler syntax:
`<span yangFurigana="あした">明日</span>`

Which one do you prefer? You might wanna check [the Wikipedia page](https://en.wikipedia.org/wiki/Furigana) to learn more about furigana in general. Also you can use it with the [International Phonetic Alphabet](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet). It's up to you.
## How it looks
Here's a [demo](https://carbammato.github.io/yang-docs/) with several examples. Give it a look, I'm sure you're gonna like it!

## How to include in your project

The easiest part: use [NPM](https://www.npmjs.com/) to add it in your project. Go to your app folder and type:
 `npm install @project161/furigana --save-dev`

Add it will be added to project's `package.json` dependencies.
> Tip: (Add a `-g` to save it globally)

## How to use it

First of all, make sure you add the `yangFuriganaModule` to the list of `import` in the module containing the templates where you're gonna use the directive.
```
import { YangFuriganaModule } from "@project161/yang-furigana";
...
@NgModule({
  imports: [
    ...
    yangFuriganaModule <-- Add this and you're good to go!
    ...
  ],
  declarations: [...],
  ...
})
export class MyModule {}
```
After that, you're ready to use it in any template file that includes only text using the attribute `yangFurigana` or `yang-furigana`.
`<span yangFurigana="あした">明日</span>`

> You can use it in every tag, even a generic `<div>` but please mind that if this tag have other tags inside, the furigana won't be rendered.  
>Mind you can separate a single sentence using multiple `span` elements:
> ```
> <span yangFurigana="はたら">働<span>
> <span>きます</span>
> ```
## Add some style to it
Adding style is quite easy. You can add it straight to the span element, along with the yangFurigana attribute:
`<span yangFurigana="あした" class="some-class>明日</span>`

In this way, the class will affect the entire HTML, which mean it will work for the main text of the element and the text above.
In case you want assign some style on the furigana text only, you may add to the span element the attributes `yangFuriganaClass` and/or `yangFuriganaStyle`. You can easily guess how they work:

`<span yangFurigana="あした" yangFuriganaClass="some-class>明日</span>`

`<span yangFurigana="あした" yangFuriganaStyle="color:blue;">明日</span>`

The syntax is exactly as you're adding a normal class or a regular style attribute in an HTML template of any kind.


> (Written with [StackEdit](https://stackedit.io/) - it's actually pretty cool)
