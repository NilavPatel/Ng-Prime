<img src="https://github.com/NilavPatel/Ng-Prime/blob/master/src/assets/images/company-logo.png" width="400" height="100">

# Angular + PrimeNg

## Run below command to create project with angular CLI
`````
ng new Ng-Prime
cd Ng-Prime
npm install primeng --save
npm install primeicons --save
npm install @angular/animations --save
`````

## Add css dependencies to index.html
`````
<link rel="stylesheet" type="text/css" href="/node_modules/primeicons/primeicons.css" />
<link rel="stylesheet" type="text/css" href="/node_modules/primeng/resources/themes/nova-light/theme.css" />
<link rel="stylesheet" type="text/css" href="/node_modules/primeng/resources/primeng.min.css" />
`````

## Add modules to app.module.ts
`````
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        //...
    ],
    //...
})
export class YourAppModule { }
`````
	
## Add new componenets
`````
ng generate component login
ng generate component home
ng generate component menu
ng generate component header
ng generate component footer
`````

## Add routing dependency to app.module.ts
````
import { RouterModule, Routes } from '@angular/router';
````

## Build and Run project
`````
ng build
ng serve
`````