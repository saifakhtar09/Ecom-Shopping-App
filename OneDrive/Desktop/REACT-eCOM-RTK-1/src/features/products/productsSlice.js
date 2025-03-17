import { createAsyncThunk, createSlice, isDraft } from "@reduxjs/toolkit";
import { productUrl } from "../../Api/productApi";

// productList
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(productUrl);
    const data = await response.json();
    return data;
  }
);

// product Detail
export const fetchProductDetail = createAsyncThunk(
  "products/fetchProductDetail",
  async (id) => {
    const response = await fetch(`${productUrl}/${id}`);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    allItems: [],
    productDetail:null,
    filteredItems: [],
    suggestions: [],
    filters: {
      category: "",
      priceRange: {
        minValue: 0,
        maxValue: 3000,
      },
      rating: {
        minRatingValue: 0,
        maxRatingValue: 5,
      },
      searchQuery: "",
    },
    loading: false,
    error: null,
  },

  reducers: {
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
      console.log(state.filters, 36);

      applyFilters(state);
    },

    setPriceFilter: (state, action) => {
      state.filters.priceRange = action.payload;
      applyFilters(state);
    },

    setRatingFilter: (state, action) => {
      state.filters.rating = action.payload;
      applyFilters(state);
    },
    
    setSearchFilter: (state, action) => {
      state.filters.searchQuery = action.payload;
      const {searchQuery} = state.filters;
      state.suggestions = state.allItems.filter((item)=>item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||item.description.toLowerCase().includes(searchQuery.toLowerCase()) )
      // item.title.toLowerCase().includes(searchQuery.toLowerCase()) 
      // applyFilters(state);
    },
    applySearchSuggestion:(state,action)=>{
      const suggestion = action.payload;
      state.filteredItems = state.allItems.filter((item)=>item.title.toLowerCase().includes(suggestion.title.toLowerCase()) ||item.description.toLowerCase().includes(suggestion.title.toLowerCase()) )
      state.filters.searchQuery = suggestion.title;
      state.suggestions=[];
      
    },
    clearFilters: (state) => {
      state.filters = {
        category: "",
        priceRange: {
          minValue: 0,
          maxValue: 3000,
        }, //{} //"" fixed removed {} to ""
        rating: {
          minRatingValue: 0,
          maxRatingValue: 5,
        },
        searchQuery: "",
      };

      state.filteredItems = state.allItems;
    },
  },
  extraReducers: (builder) => {
    builder
    // ProductList
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
     
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allItems = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ProductDetail
      .addCase(fetchProductDetail.pending, (state) => {
        state.loading = true;
      })
      
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetail = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export const {
  setCategoryFilter,
  setPriceFilter,
  setRatingFilter,
  setSearchFilter,
  applySearchSuggestion,
  clearFilters,
} = productSlice.actions;

export default productSlice.reducer;

// Helper function to apply all filters
const applyFilters = (state) => {
  const { category, priceRange, rating } = state.filters;
  // console.log(category, priceRange, rating, searchQuery, 1);
  let filtered = state.allItems;

  // Apply category filter
  if (category && state.filteredItems.length > 0 && state.allItems.length > 0) {
    console.log(category, 2);

    filtered = filtered.filter((item) => item.category === category);
    console.log(filtered, 2);
  }

  // Apply price range filter
  if (priceRange) {
    console.log(priceRange, 3);
    const { minValue, maxValue } = priceRange;
    filtered = filtered.filter(
      (item) => item.price >= minValue && item.price < maxValue
    );
    console.log(filtered, 3);
  }

  // Apply rating filter

  // console.log(Object.keys(rating) , 121);

  if (rating) {
    console.log(rating, 4);
    const { minRatingValue, maxRatingValue } = rating;
    filtered = filtered.filter(
      (item) =>
        item.rating.rate >= minRatingValue && item.rating.rate < maxRatingValue
    );
    // filtered = filtered.filter((item) => item.rating.rate > 4);
    console.log(filtered, 4);
  }

  // // Apply search query filter
  // if (searchQuery) {
  //   console.log(searchQuery, 5);

  //   filtered = filtered.filter(
  //     (item) =>
  //       item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       item.description.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   console.log(filtered, 5);
  // }

  console.log(filtered, 10);

  state.filteredItems = filtered;
};
