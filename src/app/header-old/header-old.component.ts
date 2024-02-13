import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-old',
  templateUrl: './header-old.component.html',
  styleUrl: './header-old.component.css'
})
export class HeaderComponent {

  constructor(private routes:Router)
  {

  }

  // Link()
  // {
  //   this.routes.navigate(['/template-form']);
  // }

}
