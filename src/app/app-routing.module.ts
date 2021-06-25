import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
    {
        path: '', component: AppComponent, children:
            [
                {
                    path: "", component: LoginComponent, pathMatch: 'full'
                },
                {
                    path: "home", component: HomeComponent, pathMatch: 'full'
                },
            ]
    },
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
