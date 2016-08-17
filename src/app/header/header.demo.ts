import { Component, HostBinding } from '@angular/core';
import { TOOLBAR_DIRECTIVES } from '../../components/toolbar';
import { SohoButtonComponent } from '../../components/button';
import { SohoHeaderComponent } from '../../components/header';

@Component({
  selector: 'soho-header-demo',
  templateUrl: 'header.demo.html',
  directives: [ SohoHeaderComponent, SohoButtonComponent, TOOLBAR_DIRECTIVES ]
})
export class SohoHeaderDemoComponent {
  @HostBinding('class') get classes() {
    return 'header is-personalizable';
  }
}