import { Component, Input } from '@angular/core';
import {
  faCat,
  faEllipsisV,
  faGlobe,
  faVirus,
} from '@fortawesome/free-solid-svg-icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() deviceXs: boolean;
  cat = faCat;
  dots = faEllipsisV;
  lang = faGlobe;
  virus = faVirus;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'en',
      sanitizer.bypassSecurityTrustResourceUrl('assets/flags/en.svg')
    );
    iconRegistry.addSvgIcon(
      'es',
      sanitizer.bypassSecurityTrustResourceUrl('assets/flags/es.svg')
    );
    iconRegistry.addSvgIcon(
      'covid',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/coronavirus.svg')
    );
  }
}
