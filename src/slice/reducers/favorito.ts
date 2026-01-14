import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Produto } from "../../App";

type FavoritoState = {
  itens: Produto[];
};

const initialState: FavoritoState = {
  itens: [],
};

const FavoritoSlice = createSlice({
  name: "favorito",
  initialState,
  reducers: {
    favoritar: (state: FavoritoState, action: PayloadAction<Produto>) => {
      const Produto = action.payload;

      if (state.itens.find((p) => p.id === Produto.id)) {
        state.itens = state.itens.filter((p) => p.id !== Produto.id);
      } else {
        state.itens.push(Produto);
      }
    }
  }
})

export const { favoritar } = FavoritoSlice.actions;

export default FavoritoSlice.reducer;
