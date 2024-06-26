import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CeoComponent} from './admin-panel/custom-sidenav/ceo/ceo.component';
import { ContentEditingComponent } from './admin-panel/custom-sidenav/content-editing/content-editing.component';
import { AuthorComponent } from './author/author.component';
import { visitorGuard } from './guards/visitor.guard';
import { SubjectPageComponent } from './subject-page/subject-page.component';
import { SubjectDetailsComponent } from './subject-page/subject-details/subject-details.component';
import { adminGuard } from './guards/admin.guard';
import { authorGuard } from './guards/author.guard';
export const routes: Routes = [
 
  { path: '',  component: HomeComponent ,children:[
    { path: '',  component: SubjectPageComponent },
    { path: 'subjects',component: SubjectPageComponent},
    { path: 'subjects/category/:categoryId', component: SubjectPageComponent},
  ]}, // Ana Sayfa
  
  { path: 'account', component: AccountComponent , canActivate:[visitorGuard]}, // Hesabım Sayfası
  { path: 'login', component: LoginComponent }, // Login Sayfası
  { path: 'register', component: RegisterComponent }, // Register Sayfası
  { path: 'contactus', component: ContactusComponent }, // Contact Us Sayfası
  { path: 'aboutus', component: AboutUsComponent }, // About Us Sayfası
  { path: 'author', component: AuthorComponent, canActivate:[authorGuard] }, // Author  Sayfası
  { path: 'admin', component: AdminPanelComponent, canActivate:[adminGuard] ,children: [ // Admin Sayfası
    //{ path: 'analytics', component: AnalyticsComponent }, // Admin/Analytics Sayfası açılacağında burayı aktif et
    { path: 'ceo', component: CeoComponent }, // Admin/Ceo Sayfası
    { path: 'contentedit', component: ContentEditingComponent }, // Admin/Contentedit Sayfası
  ]},
 
  { path: 'subjects/:subjectid', component: SubjectDetailsComponent},  //Konu Detay Sayfası
  
];

