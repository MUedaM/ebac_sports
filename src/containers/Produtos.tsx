import { useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import { RootReducer } from '../slice'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const {data: produtos, isLoading} = useGetProdutosQuery()
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)

  if (isLoading) return <h2>Carregando...</h2>

  const listaFavoritos = (produto: ProdutoType) => {
    const idProduto = produto.id
    const idFavoritos = favoritos.map((f) => f.id)
    return idFavoritos.includes(idProduto)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((p) => (
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
