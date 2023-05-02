import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cloud-storage-root',
  template: `
    <div class="content maxwh">
      <router-outlet></router-outlet>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
