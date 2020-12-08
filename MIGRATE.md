# Migration guides
The following is a series of quick guides to help users to understand how to successfully update the library from version that includes _breaking changes_ and might require a little bit of help.

## Migrate from 0.3.2 to 0.4.0
The main difference when passing to the 0.4.0 version is the change of the name of the library from _ng-furigana_ to _@project161/furigana_. 

First step to follow is to update the Angular Module where you have imported the `NgFuriganaModule`, now named `YangFuriganaModule`:
```
// New import name
import { YangFuriganaModule } from "@project161/yang-furigana";
...
@NgModule({
  imports: [
    ...
    // NgFuriganaModule <-- Delete this!
    YangFuriganaModule <-- Add this!
    ...
  ],
  declarations: [...],
  ...
})
export class MyModule {}
```

Here's a little table of the values should be updated in the template:

| Previous value      | Current value       |
| ------------------- | ------------------- |
| ngFurigana          | yangFurigana        |
| ngFuriganaClass     | yangFuriganaClass   |
| ngFuriganaStyle     | yangFuriganaStyle   |

