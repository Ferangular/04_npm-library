import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent {
  isAuthenticated = input(false);

  onSignOut = output();
  onSignIn = output();
}
