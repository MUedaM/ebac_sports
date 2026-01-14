import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Produto } from "../../App"

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const CarrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionar: (state: CarrinhoState, action: PayloadAction<Produto>) => {
      const Produto = action.payload;

      if (state.itens.find(p => p.id === Produto.id)) {
        alert('Item já foi adicionado')
      } else {
        state.itens.push(Produto)
      }
    }
  }
})

export const { adicionar } = CarrinhoSlice.actions

export default CarrinhoSlice.reducer
