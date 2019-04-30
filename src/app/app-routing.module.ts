import { ProduitResolver } from './component/produit/produit.resolver';
import { ProduitComponent } from './component/produit/produit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {path:'produit',component:ProduitComponent,
  resolve:{
    Produits:ProduitResolver
  }  
  },
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ProduitResolver]
})
export class AppRoutingModule { }
