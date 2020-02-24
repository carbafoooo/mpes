import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconDefinition } from "@ant-design/icons-angular";
import {
  NzIconModule,
  NZ_ICON_DEFAULT_TWOTONE_COLOR,
  NZ_ICONS
} from "ng-zorro-antd/icon";

import {
  AccountBookFill,
  AlertFill,
  AlertOutline,
  UserOutline,
  KeyOutline,
  LockOutline
} from "@ant-design/icons-angular/icons";

const icons: IconDefinition[] = [
  AccountBookFill,
  AlertOutline,
  AlertFill,
  UserOutline,
  KeyOutline,
  LockOutline
];

@NgModule({
  providers: [{ provide: NZ_ICONS, useValue: icons }],
  imports: [NzIconModule],
  exports: [NzIconModule]
})
export class IconsModule {}
