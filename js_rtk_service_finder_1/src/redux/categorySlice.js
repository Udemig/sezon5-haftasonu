import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
}

export const categorySlice = createSlice({
    // Slice ismi belirtmenin iki kuralı var. Birincisi anlamlı olmalı, ikincisi
    // unique yani diğer slice isimlerinden farklı olmalı.
    name: "categorySlice",
    initialState,
    reducers: {
        // TODO Reducer fonksiyonlarını oluştur.
        setCategories: (state, action) => {
            console.log(">> setCategories reducer fonksiyonu çağırıldı", action)
            state.categories = action.payload
        },
    }
})

export default categorySlice.reducer

export const { setCategories } = categorySlice.actions
