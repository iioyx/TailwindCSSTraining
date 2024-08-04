import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {

  items = [
    {img:"./assets/aGBUBmRb_400x400.jpg",
    name:"Ethan Matheo",
    },
    {img:"./assets/iHIyzH7x_400x400.jpg",
    name:"Andrew Bawer",
    },
    {img:"./assets/WWRMHczd_400x400.png",
    name:"John Alex",
    }
  ]
}
