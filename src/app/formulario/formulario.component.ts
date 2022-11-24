import { Component, OnInit } from '@angular/core';
import { ListaProdutos } from '../services/ListaProdutos';
import { Produto } from '../interfaces/Produtos';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  public produto:Produto = {} as Produto
  public produtos:Produto[] = []

  ngOnInit(): void {
  }

  incluir() {
    if(this.produto.id > 0){
     ListaProdutos.alteraProduto(this.produto)
    }else{
      ListaProdutos.adicionaProduto({
        id: 0,
        nome: this.produto.nome,
        descricao: this.produto.descricao,
        preco: this.produto.preco
      });
       
   }
    
  }

  

}
