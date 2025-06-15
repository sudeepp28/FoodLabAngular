import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import { RestaurantListsComponent } from './restaurant-lists/restaurant-lists.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { SavedRestaurantsComponent } from './saved-restaurants/saved-restaurants.component';
import { TopRestaurantsComponent } from './top-restaurants/top-restaurants.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './author/login/login.component';
import { RegisterComponent } from './author/register/register.component';
import { HelpComponent } from './help/help.component';
import { AuthGuard } from './core/auth-gaurd';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';




const routes: Routes = [
  { path: '', component: RestaurantListsComponent },
  {path:'restaurant/:name/:id',component:DishesComponent},
  {path:'cart',canActivate:[AuthGuard],component:CartComponent},
  {path:'order',canActivate:[AuthGuard], component:OrdersComponent},
  {path:'saved',component:SavedRestaurantsComponent},{
    path:'topRestaurants',component:TopRestaurantsComponent
  },{
    path:'search',component:SearchComponent
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'help',component:HelpComponent},{
    path:'user',component:UserProfileComponent
  },{
    path:'updateProfile',component:UpdateProfileComponent
  }
   
  // <-- new route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
