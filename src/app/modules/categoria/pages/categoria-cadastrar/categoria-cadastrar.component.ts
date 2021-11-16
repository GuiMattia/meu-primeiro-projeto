import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/commons/services/route.service';
import { ICadastroAtualizacaoCategoria } from '../../model/categoria.model';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria-cadastrar',
  templateUrl: './categoria-cadastrar.component.html',
  styleUrls: ['./categoria-cadastrar.component.css']
})
export class CategoriaCadastrarComponent implements OnInit {

  constructor(private categoriaService: CategoriaService,
    private routeService: RouteService) { }

  categoria = {} as ICadastroAtualizacaoCategoria;
  error = {} as any;

  ngOnInit(): void {
    this.error.message = '';
  }

  salvar() {
    this.categoriaService.salvarCategoria(this.categoria)
    .then(() => {
      this.routeService.navigate('/categoria/lista');
    })
    .catch(result => {
      this.error = result.error;
      //console.log(result.error)
    });
  }

  disabled() {
    return !this.categoria.descricao || this.categoria.descricao.length > 30;
  }

  limpaErro() {
    this.error.message = null;
  }

}
