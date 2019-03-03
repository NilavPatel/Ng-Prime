<img src="https://github.com/NilavPatel/Ng-Prime/blob/master/src/assets/images/company-name.png" width="300" height="80">

# Angular + PrimeNg

## Add primefaces UI library to application
`````
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
	
## Add prime components dependencies in app.ngprime.module.ts
````javascript
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
````

## Add routing into separate module app.routing.module.ts

## Build and Run project
`````
Run below commands in console
1. npm install
2. ng build
3. ng serve
`````

## features
````
1. custom loader service
2. custom notification service
3. font awesome icons
4. state management service to maintain state on page refresh
5. back button functionality for views
6. Add custom validations and form validations into form group
7. sidebar in notification icon click
8. custom dialog box on contact us page
9. user inactivity tracing, auto logout on 5 minute inactivity
10. Show/Hide menu bar on click for both desktop and mobile layout
11. Theme chooser for dark and light theme at runtime.
````

## Browser support
````
Chrome, Firefox, Edge, IE 11/10 (except theme chooser as css variables not supported in IE)
````

### Login page

![image login](https://github.com/NilavPatel/ng-prime/blob/master/src/assets/images/login-page.png)

### Details page

![image dashboard](https://github.com/NilavPatel/ng-prime/blob/master/src/assets/images/details-page.png)

### Responsive  layout for desktop, tablet and mobile

![image dashboard](https://github.com/NilavPatel/ng-prime/blob/master/src/assets/images/responsive.png)