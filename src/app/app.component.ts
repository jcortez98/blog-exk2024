import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostListComponent, PostCreateComponent, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-exk2024';
  lightMode = true;
  
  changeTheme(theme:string){
    this.lightMode = !this.lightMode;
    const body=document.body as HTMLElement
    body.setAttribute('data-bs-theme',theme)
  }

  
}
