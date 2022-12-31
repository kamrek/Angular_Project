import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateFileRequiredInformationComponent } from "./components/create-file-required-information/create-file-required-information.component";
import { FileRequiredInformationService } from "./services/file-required-information.service";

const routes: Routes = [
  {
    path: "",
    component: CreateFileRequiredInformationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileRequiredInformationRoutingModule {}
