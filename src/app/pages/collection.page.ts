import { Component } from '@angular/core';

@Component({
  selector: 'collection-page',
  template: `
    <div>
      <div size="12">
        <sample-prefix-p-headline variant="headline-4">Buttons</sample-prefix-p-headline>
      </div>
      <div size="12">
        <sample-prefix-p-divider class="divider"></sample-prefix-p-divider>
      </div>
      <div size="12">
        <sample-prefix-p-button [disabled]="isDisabled" (click)="onButtonClick()">Submit</sample-prefix-p-button>
      </div>
      <div size="12" class="contentWrapperSmall">
        <sample-prefix-p-button-pure [disabled]="!isDisabled" (click)="onButtonPureClick()"
          >Dismiss</sample-prefix-p-button-pure
        >
      </div>
      <div size="12" class="contentWrapperSmall">
        <sample-prefix-p-headline id="headline" variant="headline-4">{{ headlineText }}</sample-prefix-p-headline>
      </div>
      <div size="12">
        <sample-prefix-p-divider class="divider"></sample-prefix-p-divider>
      </div>
      <div size="12">
        <sample-prefix-p-headline variant="headline-4">Links</sample-prefix-p-headline>
      </div>
      <div size="12">
        <sample-prefix-p-divider class="divider"></sample-prefix-p-divider>
      </div>
      <div size="12">
        <sample-prefix-p-link href="https://www.porsche.com">porsche.com</sample-prefix-p-link>
      </div>
      <div size="12" class="contentWrapperBig">
        <sample-prefix-p-link-pure p-link-pure [href]="'https://www.porsche.com'">Test PLinkPure</sample-prefix-p-link-pure>
        <sample-prefix-p-link-pure p-link-pure [href]="'#propHashTest'" [size]="'medium'">Test propHash</sample-prefix-p-link-pure>
      </div>
      <div size="12">
        <sample-prefix-p-divider class="divider"></sample-prefix-p-divider>
      </div>
      <div size="12">
        <sample-prefix-p-headline variant="headline-4">Icons</sample-prefix-p-headline>
      </div>
      <div size="12">
        <sample-prefix-p-divider class="divider"></sample-prefix-p-divider>
      </div>
      <div size="12">
        <sample-prefix-p-spinner size="small"></sample-prefix-p-spinner>
      </div>
      <div size="12">
        <sample-prefix-p-icon size="medium" name="highway" role="img"></sample-prefix-p-icon>
      </div>
      <div size="12">
        <sample-prefix-p-divider class="divider"></sample-prefix-p-divider>
      </div>
      <div size="12">
        <sample-prefix-p-headline variant="headline-4">You are on Page {{ activePage }} Page</sample-prefix-p-headline>
      </div>
      <div size="12">
        <sample-prefix-p-pagination
          p-pagination
          totalItemsCount="11"
          itemsPerPage="3"
          [activePage]="activePage"
          (pageChange)="handleActivePage($event)"
        ></sample-prefix-p-pagination>
      </div>
    </div>
  `,
})
export class CollectionPage {
  headlineText = '';
  activePage = 1;
  isDisabled = false;

  onButtonClick() {
    this.headlineText = 'Headline appears through Button click';
    this.isDisabled = !this.isDisabled;
  }

  onButtonPureClick() {
    this.headlineText = '';
    this.isDisabled = !this.isDisabled;
  }

  handleActivePage(event: CustomEvent) {
    this.activePage = event.detail.page;
  }
}
