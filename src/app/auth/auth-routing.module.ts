import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const authRoutes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' } // <-- catch all paths you dont know, must be last!!
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
