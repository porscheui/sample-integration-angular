import { Component, ViewEncapsulation } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  template: `
    <div class="pageLayout">
      <div>
        <div size="12">
          <sample-prefix-p-headline p-headline variant="headline-2" [align]="'center'"
            >Example usage of the Porsche-Design-System Angular</sample-prefix-p-headline
          >
        </div>
        <div size="12">
          <sample-prefix-p-divider class="divider"></sample-prefix-p-divider>
        </div>
        <div size="12">
          <ng-container *ngFor="let route of routes">
            <sample-prefix-p-link-pure>
              <a [routerLink]="route.path">{{ route.name }}</a>
            </sample-prefix-p-link-pure>
          </ng-container>
        </div>
        <div size="12">
          <sample-prefix-p-divider class="divider"></sample-prefix-p-divider>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public routes = routes;
}
