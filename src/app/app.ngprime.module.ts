import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from 'primeng/megamenu';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@NgModule({
    declarations: [
    ],
    imports: [
        InputTextModule,
        ButtonModule,
        PanelModule,
        ToastModule,
        MegaMenuModule,
        TableModule,
        MessageModule,
        CardModule,
        ChartModule
    ],
    exports: [
        InputTextModule,
        ButtonModule,
        PanelModule,
        ToastModule,
        MegaMenuModule,
        TableModule,
        MessageModule,
        CardModule,
        ChartModule
    ]
})
export class NgPrimeModule { }
