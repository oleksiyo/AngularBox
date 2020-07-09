import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content/content.component';
import { OnDemandPreloadStrategy } from './on-demand-preload-strategy.service';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin/admin.module').then(mod => mod.AdminModule),
  },
  {
    path: '',
    component: ContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: OnDemandPreloadStrategy,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
