import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  @Input() rating: number; // Valoración de 1 a 5

  get stars(): number[] {
    const totalStars = 5;
    const fullStars = Math.floor(this.rating);
    const halfStars = Math.ceil(this.rating - fullStars);
    const emptyStars = totalStars - fullStars - halfStars;

    return [...Array(fullStars).fill(1), ...Array(halfStars).fill(0.5), ...Array(emptyStars).fill(0)];
  }
}
