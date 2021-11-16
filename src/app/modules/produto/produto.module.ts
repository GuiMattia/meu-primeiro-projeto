import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListaComponent } from './pages/produto-lista/produto-lista.component';
import { GenericRouterComponent } from '../produto/produto-routing.module';
import { ProdutoRoutingModule } from './produto-routing.module';



@NgModule({
  declarations: [
    GenericRouterComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
