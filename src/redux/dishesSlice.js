import { createSlice } from '@reduxjs/toolkit'

export const dishesSlice= createSlice({
    name: 'dishes',
    initialState: {
        selectedCategory: "ITALIAN"
    },
    reducers:{
        filterCategory: (state, action) =>{
        state.selectedCategory = action.payload;
    }
    }
})

export const getSelectedCategory = state => state.dishes.selectedCategory;
export const {filterCategory}  =dishesSlice.actions;
export default dishesSlice.reducer;

//MY POLUCHAEM DOSTUP K PERVONACHALNOMY SOSTOYANIU- ITALIAN, SOHRANYAEM EGO V GETSELECTEDCATEGORY