import { Routes } from '@angular/router';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostListComponent } from './components/post-list/post-list.component';

export const routes: Routes = [
    {path:'createPost', component:PostCreateComponent},
    {path:'indexPost', component:PostListComponent},
    {path:'', redirectTo: 'indexPost', pathMatch:'full'}
];
