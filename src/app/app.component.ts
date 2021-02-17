import { Component, ViewEncapsulation } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public routes = routes;
}
