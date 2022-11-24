import { Produto } from "../interfaces/Produtos";

export class ListaProdutos {
    static buscaProdutoPorId(id: Number): Produto {
        
        let produto:Produto = {} as Produto

        for(let i=0; i<ListaProdutos.produtos.length; i++){
            let produtoDb = ListaProdutos.produtos[i]
            if(produtoDb.id == id){
                produto = produtoDb
                break
            }
        }
        return produto;
    }

    private static produtos: Produto[] = []

    public static buscaProdutos():Produto[]{
        return ListaProdutos.produtos
    }
    
    public static adicionaProduto(produto:Produto):void{
        produto.id = ListaProdutos.buscaProdutos().length + 1
        ListaProdutos.produtos.push(produto)
    }

    public static alteraProduto(produto:Produto):void{
        for(let i=0; i<ListaProdutos.produtos.length; i++){
            let produtoDb = ListaProdutos.produtos[i]
            if(produtoDb.id == produto.id){
                produtoDb = {
                    ...produto
                }
                break
            }
        }
    }

    public static escluiProduto(produto:Produto):void{
        let listaNova = []
        for(let i=0; i<ListaProdutos.produtos.length; i++){
            let produtoDb = ListaProdutos.produtos[i]
            if(produtoDb.id != produto.id){
                listaNova.push(produtoDb)
            }
        }
        ListaProdutos.produtos = listaNova
    }
}

 