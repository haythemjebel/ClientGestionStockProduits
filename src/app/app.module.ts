import { XhrInterceptor } from './shared/xhr.interceptor';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ChartModule } from 'angular2-chartjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './component/produit/produit.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ContentComponent } from './component/content/content.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProduitService } from './service/produit.service';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AppService } from './service/app.service';
import { from } from 'rxjs';
import { UserComponent } from './component/user/user.component';
import { StoreModule } from '@ngrx/store';
import { PrincipalReducer } from './shared/principal.reducer';
import { UserService } from './service/user.service';
import { CrudComponent } from './shared/crud/crud.component';
import { MyChartComponent } from './component/my-chart/my-chart.component';
import { SampleComponent } from './shared/crud/sample/sample.component';
import { UploadComponent } from './shared/crud/upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    CrudComponent,
    MyChartComponent,
    SampleComponent,
    UploadComponent
  ],
  imports: [
    ChartModule,
    BrowserModule,
    StoreModule.forRoot({principal:PrincipalReducer}),
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule
 
  ],
  providers: [ProduitService,UserService,AppService,{provide:HTTP_INTERCEPTORS ,useClass:XhrInterceptor,multi:true},CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
