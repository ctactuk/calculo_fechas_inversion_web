import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService) {}
  title = 'calculadora_inversiones_web';
  ngOnInit() {
      this.router.navigate(['/login']);
  }
}
