import { Component, OnInit } from '@angular/core';
import { ListaProdutos } from '../services/ListaProdutos';
import { Produto } from '../interfaces/Produtos';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  public produtos:Produto[] = ListaProdutos.buscaProdutos()

  alterar(produto:Produto){
    ListaProdutos.alteraProduto(produto)
    this.produtos = ListaProdutos.buscaProdutos()
  
  }

  excluir(produto:Produto){
    ListaProdutos.escluiProduto(produto)
    this.produtos = ListaProdutos.buscaProdutos()
  }

}
