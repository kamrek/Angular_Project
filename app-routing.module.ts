import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {HomeComponent} from './auth/home/home.component';
import {AuthGuard} from './auth/auth.guard';
import {HomeResolver} from './auth/home/home.resolver';
import { Router } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        resolve: {home: HomeResolver},
        children: [
            {
                path: 'dashboard', loadChildren: () => import('./auth/dashboard/dashboard.module').then(mod => mod.DashboardModule)
            },
            {
                path: '', redirectTo: 'dashboard', pathMatch: 'full',
            },
            {
                path: 'change-password',
                loadChildren: () => import('./security/change-password/change-password.module').then(mod => mod.ChangePasswordModule)
            },
            {
                path: 'my-profile',
                loadChildren: () => import('./auth/my-profile/my-profile.module').then(mod => mod.MyProfileModule)
            },
            {
                path: 'offices',
                loadChildren: () => import('./auth/office/office.module').then(mod => mod.OfficeModule)
            },
            {
                path: 'file_required_information',
                loadChildren: () => import('./auth/file-required-information/file-required-information.module').then(mod => mod.FileRequiredInformationModule)
            }
        ]
    },
    {
        path: 'login',
        children: [
            {path: '', component: LoginComponent}
        ]
    },

    {
        path: 'forgot-userid-password',
        loadChildren: () => import('./security/forgot-userid-password/forgot-userid-password.module').then(mod => mod.ForgotUseridPasswordModule)
    },
    {
        path: 'session-expired',
        loadChildren: () => import('./security/session-expired/session-expired.module').then(mod => mod.SessionExpiredModule)
    },
    {
        path: 'page-not-found',
        loadChildren: () => import('./security/page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule)
    },

    {
        path: '**',
        redirectTo: 'page-not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
