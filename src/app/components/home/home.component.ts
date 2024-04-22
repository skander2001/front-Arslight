import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dataService: AuthService) { }

  handleLogout(): void {
    this.dataService.logout().subscribe(
      () => {
        // Handle successful logout, such as redirecting to another page
        console.log('Logout successful');
      },
      (error) => {
        // Handle error, such as displaying an error message
        console.error('Logout failed', error);
      }
    );
  }
}
