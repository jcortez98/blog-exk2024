import { Routes } from '@angular/router';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';

export const routes: Routes = [
    {path:'createPost', component:PostCreateComponent},
    {path:'indexPost', component:PostListComponent},
    {path:'', redirectTo: 'indexPost', pathMatch:'full'}
];
