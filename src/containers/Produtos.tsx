import { useSelector } from 'react-redux'
import * as S from './styles'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import { RootReducer } from '../slice'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({
  produtos
}: Props) => {
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)
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
            inclusoFavoritos={listaFavoritos(p)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
