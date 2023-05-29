import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'menu/inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'menu/lanches',
    loadChildren: () => import('./lanches/lanches.module').then( m => m.LanchesPageModule)
  },
  {
    path: 'menu/pratos',
    loadChildren: () => import('./pratos/pratos.module').then( m => m.PratosPageModule)
  },
  {
    path: 'menu/sobremesas',
    loadChildren: () => import('./sobremesas/sobremesas.module').then( m => m.SobremesasPageModule)
  },
  {
    path: 'menu/bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'pratodetalhe',
    loadChildren: () => import('./pratodetalhe/pratodetalhe.module').then( m => m.PratodetalhePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
