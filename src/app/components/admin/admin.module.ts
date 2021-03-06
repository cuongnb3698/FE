import { TudienComponent } from './danhmuc/tudien/tudien.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { routes } from './admin.router';
import { DashboardComponent } from './dashboard/dashboard.component';

// material design
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MaterialModule } from '../../material.module';
import { NgxPopper } from 'angular-popper';
import { NavbarComponent } from './navbar/navbar.component';
import { TablesComponent } from './tables/tables.component';
import { LbdChartComponent } from './directives/lbd-chart/lbd-chart.component';
import { BaocaoComponent } from './baocao/baocao.component';
import { NgProgressModule } from 'ngx-progressbar';
import { HttpClientModule } from '@angular/common/http';
import { LoaitudienComponent } from './danhmuc/loaitudien/loaitudien.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { PopTuDien } from './danhmuc/tudien/popup/tudien.popup';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MaterialModule,
    NgxPopper,
    NgProgressModule,
    HttpClientModule,
  ],
  exports: [],
  declarations: [
    DashboardComponent,
    NavbarComponent,
    NavbarComponent,
    TablesComponent,
    LbdChartComponent,
    BaocaoComponent,
    BaocaoComponent,
    LoaitudienComponent,
    TudienComponent,
    PopTuDien
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [DashboardComponent],
})
export class AdminModule {}
