import { UserResolver } from './component/user/user.resolver';
import { UserComponent } from './component/user/user.component';
import { ProduitResolver } from './component/produit/produit.resolver';
import { ProduitComponent } from './component/produit/produit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,
    children:[
          {
            path:'produit',component:ProduitComponent,
            resolve:{
              Produits:ProduitResolver
            },
            outlet:'contentOutlet'  
          },
          {
            path:'dashboard',
            component:DashboardComponent,
            outlet:'contentOutlet'
          },
          {
            path:'user',
            component:UserComponent,
            resolve:{
              Users:UserResolver
            },
            outlet:'contentOutlet'
          }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ProduitResolver,UserResolver]
})
export class AppRoutingModule { }
