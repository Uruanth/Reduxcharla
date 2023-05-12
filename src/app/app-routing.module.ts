import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TablaAComponent} from "./shared/tabla-a/tabla-a.component";
import {GuardTestGuard} from "./security/guards/guard-test.guard";

const routes: Routes = [
  {
    path: 'tabla',
    component: TablaAComponent,
    canActivate: [GuardTestGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
