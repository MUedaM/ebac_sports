import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

const ListaProdutos: Produto[] = [
  {
    "id": 1,
    "nome": "Bermuda Adidas Masculina",
    "imagem": "https://api-ebac.vercel.app/ebac_sports/bermuda.webp",
    "preco": 129.9
  },
  {
    "id": 2,
    "nome": "Camisa Corinthians 1 - 22/23",
    "imagem": "https://api-ebac.vercel.app/ebac_sports/corinthians.webp",
    "preco": 249.9
  },
  {
    "id": 3,
    "nome": "Bola de Vôlei Penalty",
    "imagem": "https://api-ebac.vercel.app/ebac_sports/bola.webp",
    "preco": 139.9
  },
  {
    "id": 4,
    "nome": "Camisa Internacional 2 - 22/23",
    "imagem": "https://api-ebac.vercel.app/ebac_sports/internacional.webp",
    "preco": 249.9
  },
  {
    "id": 5,
    "nome": "Patins Preto",
    "imagem": "https://api-ebac.vercel.app/ebac_sports/patins.webp",
    "preco": 399.9
  },
  {
    "id": 6,
    "nome": "Camisa Kansas City Chiefs",
    "imagem": "https://api-ebac.vercel.app/ebac_sports/camisa_kansas.webp",
    "preco": 379.9
  },
  {
    "id": 7,
    "nome": "Camisa Real Madrid 1 - 22/23",
    "imagem": "https://api-ebac.vercel.app/ebac_sports/real_madrid.webp",
    "preco": 349.9
  },
  {
    "id": 8,
    "nome": "Camisa Milan 1 - 22/23",
    "imagem": "https://api-ebac.vercel.app/ebac_sports/milan.webp",
    "preco": 349.9
  }
]

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [carrinho, setCarrinho] = useState<Produto[]>([])
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  useEffect(() => {
    setProdutos(ListaProdutos)
  }, [])

  function favoritar(item: Produto) {
    if (favoritos.find((p) => p.id === item.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== item.id)
      console.log(item.id)
      console.log(favoritos.filter((p) => p.id !== item.id))
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, item])
    }
  }

  function adicionar(item: Produto) {
    if (carrinho.find((p) => p.id === item.id)) {
      alert('Item já adicionado')
    } else {
      setCarrinho([...carrinho, item])
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionar={adicionar}
        />
      </div>
    </>
  )
}

export default App
