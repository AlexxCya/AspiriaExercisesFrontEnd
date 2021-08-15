import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AuthGuard} from './security/auth.guard';
import { LoginComponent } from './login/login.component';
import { ToyListComponent } from './toy/toy-list/toy-list.component';
import { FoodListComponent } from './food/food-list/food-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate:[AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'toy', component: ToyListComponent, canActivate:[AuthGuard]},
  { path: 'food', component: FoodListComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
