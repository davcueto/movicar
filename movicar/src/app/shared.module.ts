import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es-MX";
registerLocaleData(localeEs);

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  NzButtonModule,
  NzDropDownModule,
  NzLayoutModule,
  NzNotificationModule,
  NzRateModule,
  NzFormModule,
  NzInputModule,
  NzBreadCrumbModule,
  NzMenuModule,
  NzTabsModule,
  NzSkeletonModule,
  NzDescriptionsModule,
  NzDatePickerModule,
  NzTableModule,
  NzDividerModule,
  NzAvatarModule,
  NzPopoverModule,
  NzUploadModule,
  NzImageModule,
  NzMessageModule,
  NzIconModule,
  NzCardModule,
  NzSelectModule,
  NzCheckboxModule,
  NzSpinModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  providers: [{ provide: LOCALE_ID, useValue: "es-MX" }]
})
export class SharedModule {}