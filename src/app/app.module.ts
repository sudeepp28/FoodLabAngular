import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, DatePipe } from "@angular/common";
import { AppRoutingModule } from "./app.routing-module";
import { RestaurantListsComponent } from "./restaurant-lists/restaurant-lists.component";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { DishesComponent } from "./dishes/dishes.component";
import { HeaderComponent } from "./header/header.component";
import { AddToCartComponent } from "./add-to-cart/add-to-cart.component";
import { CartComponent } from "./cart/cart.component";
import { OrderCartComponent } from "./cart/order-cart/order-cart.component";
import { BannerComponent } from "./restaurant-lists/banner/banner.component";
import { OrdersComponent } from "./orders/orders.component";
import { SavedRestaurantsComponent } from "./saved-restaurants/saved-restaurants.component";
import { TopRestaurantsComponent } from "./top-restaurants/top-restaurants.component";
import { SearchComponent } from "./search/search.component";
import { LoginComponent } from "./author/login/login.component";
import { RegisterComponent } from "./author/register/register.component";
import { LogoutComponent } from "./header/logout/logout.component";

import { FooterComponent } from "./footer/footer.component";
import { HelpComponent } from "./help/help.component";
import { SidebarComponent } from "./header/sidebar/sidebar.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UpdateProfileComponent } from "./update-profile/update-profile.component";





@NgModule({
    declarations:[AppComponent,
         RestaurantListsComponent,DishesComponent,HeaderComponent
         ,AddToCartComponent,CartComponent,OrderCartComponent,BannerComponent,OrdersComponent,LogoutComponent,UserProfileComponent,UpdateProfileComponent
         ,SavedRestaurantsComponent, TopRestaurantsComponent,SearchComponent,LoginComponent,RegisterComponent,FooterComponent,HelpComponent,SidebarComponent
       ],
    bootstrap:[AppComponent],
    imports: [FormsModule,
         BrowserModule,
         CommonModule
         ,AppRoutingModule,
        ReactiveFormsModule,],
        providers:[provideHttpClient()]
})

export class AppModule{}