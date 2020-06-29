import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { NgUiMarcjModule } from './modules/ng-ui-marcj/ng-ui-marcj.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DuiAppModule, DuiWindowModule } from '@marcj/angular-desktop-ui';
import { ProductDeployComponent } from './components/product-deploy/product-deploy.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductListComponent,
    ProductComponent,
    LoginComponent,
    ProductDeployComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DuiAppModule.forRoot(), //<--- important#
    DuiWindowModule.forRoot(),
    NgUiMarcjModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
