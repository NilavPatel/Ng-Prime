import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
    declarations: [
    ],
    imports: [
        InputTextModule,
        ButtonModule,
        PanelModule,
        ToastModule,
        MegaMenuModule
    ],
    exports: [InputTextModule,
        ButtonModule,
        PanelModule,
        ToastModule,
        MegaMenuModule]
})
export class NgPrimeModule { }
