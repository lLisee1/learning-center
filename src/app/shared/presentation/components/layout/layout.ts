import { Component, signal } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [MatToolbarRow, MatToolbar, RouterOutlet, RouterLink, TranslatePipe],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  options = signal([
    { link: '/home', label: 'option.home' },
    { link: '/about', label: 'option.about' },
  ]);
}
