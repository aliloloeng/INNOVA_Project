import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  getters: {
    totalCount: (state) => state.items.length,
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price, 0),
  },
  actions: {
    addToCart(product) {
      this.items.push(product)
    },
    removeFromCart(index) {
      this.items.splice(index, 1)
    },
    clearCart() {
      this.items = []
    },
  },
})
