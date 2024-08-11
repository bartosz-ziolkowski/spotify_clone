import { Component, OnInit, effect, inject } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Location } from '@angular/common';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);

  connectedUser: User = { email: this.authService.notConnected };

  location = inject(Location);

  constructor() {
    effect(() => {
      if (this.authService.fetchUser().status == 'OK') {
        this.connectedUser = this.authService.fetchUser().value!;
      }
    });
  }

  ngOnInit(): void {
    this.authService.fetch();
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

  goBackward(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }
}
