import { RouterModule, Routes } from '@angular/router';
import {TableComponent } from '../app/components/table/table.component';
import {UploadComponent } from '../app/components/upload/upload.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


const APP_ROUTES: Routes = [
    {
        path: '', component: AppComponent, children:
            [
                {
                    path: "", component: HeaderComponent, pathMatch: 'full'
                },
                {
                    path: "login", component: LoginComponent, pathMatch: 'full'
                },
                // {
                //     path: "table",   component: TableComponent, pathMatch: 'full', canActivate: [ TableComponent ]
                // },
                // {
                //     path: "upload", component: UploadComponent, pathMatch: 'full'
                // },

            ]
    },

    // {path: '**', pathMatch:'full',component:NavbarComponent,
    
    // children: [
    // {path: 'table', component: TableComponent },
    // {path: 'upload', component: UploadComponent},
    // {path: 'login', component:LoginComponent}
    // ]}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
