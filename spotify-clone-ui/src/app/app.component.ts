import { AuthPopupState, AuthService } from './services/auth.service';
import { Component, OnInit, effect, inject } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { NgbModal, NgbModalRef, NgbToast } from '@ng-bootstrap/ng-bootstrap';

import { AuthPopupComponent } from './components/auth-popup/auth-popup.component';
import { HeaderComponent } from './layout/header/header.component';
import { LibraryComponent } from './layout/library/library.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { PlayerComponent } from './layout/player/player.component';
import { RouterOutlet } from '@angular/router';
import { ToastService } from './services/toast.service';
import { fontAwesomeIcons } from './shared/font-awesome-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    NavigationComponent,
    LibraryComponent,
    HeaderComponent,
    NgbToast,
    PlayerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'spotify-clone-front';

  private faIconLibrary = inject(FaIconLibrary);

  toastService = inject(ToastService);

  private authService = inject(AuthService);

  private modalService = inject(NgbModal);

  private authModalRef: NgbModalRef | null = null;

  constructor() {
    effect(
      () => {
        this.openOrCloseAuthModal(this.authService.authPopupStateChange());
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

  private openOrCloseAuthModal(state: AuthPopupState) {
    if (state === 'OPEN') {
      this.openAuthPopup();
    } else if (
      this.authModalRef !== null &&
      state === 'CLOSE' &&
      this.modalService.hasOpenModals()
    ) {
      this.authModalRef.close();
    }
  }

  private openAuthPopup() {
    this.authModalRef = this.modalService.open(AuthPopupComponent, {
      ariaDescribedBy: 'authentication-modal',
      centered: true,
    });

    this.authModalRef.dismissed.subscribe({
      next: () => {
        this.authService.openOrCloseAuthPopup('CLOSE');
      },
    });

    this.authModalRef.closed.subscribe({
      next: () => {
        this.authService.openOrCloseAuthPopup('CLOSE');
      },
    });
  }
}
