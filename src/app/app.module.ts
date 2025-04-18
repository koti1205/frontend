import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopupComponent } from './popup/popup.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
// import { SlidesComponent } from './sign-up/slides/slides.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductUpdationComponent } from './product-updation/product-updation.component';
import { FormsModule } from '@angular/forms';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { MarketBoardComponent } from './market-board/market-board.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { FooterComponent } from './footer/footer.component';
import { SellerToolsComponent } from './seller-tools/seller-tools.component';
import { RateUpdationComponent } from './rate-updation/rate-updation.component';
import { provideHttpClient } from '@angular/common/http';
import { AddProductsComponent } from './seller-tools/add-products/add-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './store/store.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { SearchResultsComponent } from './search-results/search-results.component';


const routes:Routes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'SignUp', component:SignUpComponent
  },
  {
    path:'Market-Board' , component:MarketBoardComponent 
  },
  {
    path:'Help-center' , component:HelpCenterComponent
  },
  {
    path:'product-page/:id', component:ProductPageComponent
  },
  {
    path:'profile', component:ProfileComponent
  },
  {
    path:'buy-registration', component:ProductUpdationComponent
  },
  {
    path:'sell-registration', component:AddProductsComponent
  },
  {
    path:'seller-tools', component:SellerToolsComponent
  },
  {
    path:'store', component:StoreComponent
  },
  {
    path:'rate-updation', component:RateUpdationComponent
  },
  {
    path:'company-registration', component:CompanyRegistrationComponent
  },
  {
    path:'buyers', component:BuyerDetailsComponent
  },
  {
    path:'search-results', component:SearchResultsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopupComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    // SlidesComponent,
    SearchBarComponent,
    ProductUpdationComponent,
    CompanyRegistrationComponent,
    MarketBoardComponent,
    ProfileComponent,
    ProductPageComponent,
    HelpCenterComponent,
    FooterComponent,
    SellerToolsComponent,
    RateUpdationComponent,
    AddProductsComponent,
    StoreComponent,
    BuyerDetailsComponent,
    SearchResultsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
