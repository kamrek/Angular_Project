import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingImageModule} from '@app/common/components/loading-image/loading-image.module';
import { FileRequiredInformationRoutingModule } from './file-required-information-routing.module';
import { CreateFileRequiredInformationComponent } from './components/create-file-required-information/create-file-required-information.component';
import { PrimengModule } from "@app/common/modules/primeng-modules";
import { ReactiveFormsModule } from "@angular/forms";
import { PinchZoomModule } from "ngx-pinch-zoom";
import { FieldsetModule } from "primeng/fieldset";


@NgModule({
  declarations: [CreateFileRequiredInformationComponent],
  imports: [
    CommonModule,
    FileRequiredInformationRoutingModule,
    LoadingImageModule,
    PrimengModule,
    ReactiveFormsModule,
    PinchZoomModule,
    FieldsetModule
  ],
})
export class FileRequiredInformationModule {}
