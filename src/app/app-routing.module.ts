import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { Error404Component } from './error404/error404.component';
import { DepotArticlesComponent } from './depot-articles/depot-articles.component';
import { DashboardComponent } from './DashboardComponent/dashboard/dashboard.component';
import { SignUpInComponent } from './sign-up-in/sign-up-in.component';
import { AuthGuard } from './auth.guard';
import { MyAccountComponent } from './my-account/my-account.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderInformationsComponent } from './order-informations/order-informations.component';
import { OrderPaiymentComponent } from './order-paiyment/order-paiyment.component';
import { ArticlesComponent } from './DashboardComponent/articles/articles.component';
import { OrdersComponent } from './DashboardComponent/orders/orders.component';
import { ServicesComponent } from './DashboardComponent/services/services.component';
import { UsersComponent } from './DashboardComponent/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'tarifs', component: TarifsComponent, canActivate: [AuthGuard]},
  { path: 'depot-articles', component: DepotArticlesComponent, canActivate: [AuthGuard]},
  { path: 'recapitulatif-de-commande', component: OrderSummaryComponent, canActivate: [AuthGuard]},
  { path: 'vos-informations', component: OrderInformationsComponent, canActivate: [AuthGuard]},
  { path: 'paiement', component: OrderPaiymentComponent, canActivate: [AuthGuard]},
  { path: 'mon-compte', component: MyAccountComponent, canActivate: [AuthGuard]},
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
  { path: 'connexion-inscription', component: SignUpInComponent},
  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'admin/articles', component: ArticlesComponent, canActivate: [AuthGuard]},
  { path: 'admin/commandes', component: OrdersComponent, canActivate: [AuthGuard]},
  { path: 'admin/services', component: ServicesComponent, canActivate: [AuthGuard]},
  { path: 'admin/utilisateurs', component: UsersComponent, canActivate: [AuthGuard]},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
