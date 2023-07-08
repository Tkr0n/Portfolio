import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './modules/shared/pages/home/home.component';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./modules/shared/shared.module').then(m=>m.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
