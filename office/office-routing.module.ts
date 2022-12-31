import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOfficeComponent } from './components/create-office/create-office.component';
import { OfficeListComponent } from './components/office-list/office-list.component';
import { UpdateOfficeComponent } from './components/update-office/update-office.component';

const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: '',
            component: OfficeListComponent
        },
        {
            path: 'createoffice',
            component: CreateOfficeComponent
        },
        {
            path: 'update-office/:oid',
            component: UpdateOfficeComponent
        },


    ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
