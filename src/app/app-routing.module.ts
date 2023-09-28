import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersComponent } from './workers/workers.component';
import { UserDataComponent } from './user-data/user-data.component';
import { FirstTryComponent } from './first-try/first-try.component';
import { SecondTryComponent } from './second-try/second-try.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ThirdFormComponent } from './third-form/third-form.component';
const routes: Routes = [
  { path: "app/workers", component: WorkersComponent},
  { path: "app/user-data", component: UserDataComponent},
  { path: "app/first-try", component: FirstTryComponent},
  { path: "app/second-try", component: SecondTryComponent},
  { path: "app/third-form", component: ThirdFormComponent },
  { path: "app/edit-item", component: EditItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
