import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './queues/component/table/table.component';
import { RulesComponent } from './rules/component/rules/rules.component';

const routes: Routes = [
  { path: 'login', component: TableComponent },
  { path: '', component: TableComponent },
  {path: 'rules', component:RulesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
