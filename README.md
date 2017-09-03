# Zabasandbox
This is a sandbox for sharing random ideas code snippets or trials

There are no rules here other than this:

* respect noobs
* don't judge errors, just help to correct them
* have fun and enjoy learning to code

### This repo will be periodically updated, either on a project by project basis or by deleting old projects on an ad-hoc basis.

#### The following is a list of projects and a short description of each that will act as a timeline for this repo:
1. material-app
* this is a walkthrough of a material tutorial found on youtube at https://www.youtube.com/watch?v=UnKsoCeTdEI&t=22s
2. bug-attempt
* this is an attempt at fixing a bug addressed by readers of my medium article on ngx-translate that can be found here https://medium.com/letsboot/translate-angular-4-apps-with-ngx-translate-83302fb6c10d
* The initial code posted worked but used

   ```import { HttpModule, Http } from '@angular/http';```
* this was then replaced by the following import in the bug-fixed version:

  ```import { HttpClientModule, HttpClient } from '@angular/common/http';```

  the function that returns a new TranslateHttpLoader in the app.module.ts was also changed like so:

  ```javascript
  export function HttpLoaderFactory(http: HttpClient) {
         return new TranslateHttpLoader(http);
  }
  ```

3. simple-app
  * a simple date and time app written in Angular and using Bootstrap css for styling
  * the greeting changes depending on time of day at page load. It does not change with passing time once the page is loaded

4. photo-gallery
  * a simple CRUD example to practise my skills
  * also the basis of a tutorial on medium if you want a walkthrough
  * this app shows a jumbotron for practise
  * a panel for practise
  * a greeting with some time logic that can be dismissed
  * a clock that changes with passing time
  * a gallery of fixed photos
  * new photos can be added if a url is provided
  * photos can be edited, deleted, or their details can be viewed in a modal display
  * all photos can be deleted at once
  
