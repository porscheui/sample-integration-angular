import { Component } from '@angular/core';
import { color, text } from '@porsche-design-system/utilities';

/**
 * Test site to see if utilities package works
 */
@Component({
  selector: `utilities-page`,
  template: `
    <div class="left">
      <br>
      <br>
      <button>Some native button</button>
      <br>
      <br>
      <p-button>Some custom element button</p-button>
    </div>
    <div class="right">
      <br>
      <br>
      <h1>Some native headline</h1>
      <br>
      <br>
      <p-headline>Some custom element headline</p-headline>
    </div>

  `,
  styleUrls: ['./utilities.page.scss'],
})
export class UtilitiesPage {
  public backgroundColor = color.brand;
  public textMedium = text.medium;
}
