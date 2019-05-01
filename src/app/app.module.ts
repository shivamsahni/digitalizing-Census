import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { fromEventPattern } from 'rxjs';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { ApproverComponent } from './approver/approver.component';
import { PendingComponent } from './approver/pending/pending.component';
import { DeclinedComponent } from './approver/declined/declined.component';
import { ApprovedComponent } from './approver/approved/approved.component';
import { CensusformComponent } from './censusform/censusform.component';
import { HouselistingComponent } from './censusform/houselisting/houselisting.component';
import { NationalpopulationregisterComponent } from './censusform/nationalpopulationregister/nationalpopulationregister.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    ApproverComponent,
    PendingComponent,
    DeclinedComponent,
    ApprovedComponent,
    CensusformComponent,
    HouselistingComponent,
    NationalpopulationregisterComponent,
    NavbarComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
