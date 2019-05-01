import {Routes} from '@angular/router'
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ApproverComponent } from './approver/approver.component';
import { CensusformComponent } from './censusform/censusform.component';
import { PendingComponent } from './approver/pending/pending.component';
import { HouselistingComponent } from './censusform/houselisting/houselisting.component';
import { DeclinedComponent } from './approver/declined/declined.component';
import { ApprovedComponent } from './approver/approved/approved.component';
import { NationalpopulationregisterComponent } from './censusform/nationalpopulationregister/nationalpopulationregister.component';
export const appRoutes : Routes =[
{
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
},
{
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
},
{
    path: 'approver', component: ApproverComponent,
    children: [{ path: '', component: PendingComponent }]
},
{
    path: 'pending', component:ApproverComponent,
    children:[{path:'', component:PendingComponent}]
},
{
    path:'declined',component:ApproverComponent,
    children:[{path:'', component:DeclinedComponent}]
},
{
    path:'approved', component:ApproverComponent,
    children:[{path:'', component:ApprovedComponent}]
},
{
    path:'censusform', component:CensusformComponent,
    children:[{path:'', component:HouselistingComponent}]

},
{
    path:'houselisting', component:CensusformComponent,
    children:[{path:'', component:HouselistingComponent}]

},
{
    path:'nationalpopulationregister', component:CensusformComponent,
    children:[{path:'', component:NationalpopulationregisterComponent}]
},
{ 
    path : '', redirectTo:'/login', pathMatch : 'full'}
];