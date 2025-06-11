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




const routes: Routes = [
  { path: '', component: RestaurantListsComponent },
  {path:'restaurant/:name/:id',component:DishesComponent},
  {path:'cart',component:CartComponent},
  {path:'order', component:OrdersComponent},
  {path:'saved',component:SavedRestaurantsComponent},{
    path:'topRestaurants',component:TopRestaurantsComponent
  },{
    path:'search',component:SearchComponent
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
   
  // <-- new route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
