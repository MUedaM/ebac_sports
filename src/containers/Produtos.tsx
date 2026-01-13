import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  favoritar: (item: ProdutoType) => void
  adicionar: (item: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  favoritar,
  adicionar
}: Props) => {
  const listaFavoritos = (produto: ProdutoType) => {
    const idProduto = produto.id
    const idFavoritos = favoritos.map((f) => f.id)

    return idFavoritos.includes(idProduto)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((p) => (
          <Produto
            key={p.id}
            produto={p}
            favoritar={favoritar}
            adicionar={adicionar}
            inclusoFavoritos={listaFavoritos(p)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
