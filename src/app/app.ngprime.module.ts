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
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';

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
        ChartModule,
        ProgressSpinnerModule,
        OverlayPanelModule,
        BreadcrumbModule,
        CalendarModule
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
        ChartModule,
        ProgressSpinnerModule,
        OverlayPanelModule,
        BreadcrumbModule,
        CalendarModule
    ]
})
export class NgPrimeModule { }
