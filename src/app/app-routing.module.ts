import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { TableComponent } from './components/table/table.component';

const APP_ROUTES: Routes = [
    {
        path: '', component: AppComponent, children:
            [
                {
                    path: "", component: LoginComponent, pathMatch: 'full'
                },
                {
                    path: "home", component: HeaderComponent, pathMatch: 'full'
                },
                {
                    path: "login", component: LoginComponent, pathMatch: 'full'
                },
                {
                    path: "table", component: TableComponent, pathMatch: 'full'
                }

            ]
    },
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
