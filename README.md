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
`````javascript
add css and js files to angular.json file

            "styles": [              
              "./node_modules/primeicons/primeicons.css",
              "./node_modules/primeng/resources/themes/nova-light/theme.css",
              "./node_modules/primeng/resources/primeng.min.css",
              "./node_modules/@fortawesome/fontawesome-free/css/all.css",
              "src/styles.css"
            ],
            "scripts": [
              "./node_modules/chart.js/dist/Chart.js"
            ]
`````


## Add modules to app.module.ts
`````javascript
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
`````javascript
ng generate component login
ng generate component home
ng generate component menu
ng generate component header
ng generate component footer
`````

## Add routing dependency to app.module.ts
````javascript
import { RouterModule, Routes } from '@angular/router';
````

## Build and Run project
`````javascript
ng build
ng serve
`````

## features
````
1. custom loader service
2. custom notification service
3. font awesome icons
````

### Login page

![image login](https://github.com/NilavPatel/ng-prime/blob/master/src/assets/images/login-page.png)

### Dashboard page

![image dashboard](https://github.com/NilavPatel/ng-prime/blob/master/src/assets/images/dashboard-page.png)

### Responsive  layout for desktop, tablet and mobile

![image dashboard](https://github.com/NilavPatel/ng-prime/blob/master/src/assets/images/responsive.png)