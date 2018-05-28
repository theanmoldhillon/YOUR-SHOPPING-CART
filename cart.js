
class Cart {
    constructor(products) {
      if(products) {
        this.products = products.slice(0,5)
      } else {
        this.products = []
      }
    }
  
    scan(product) {
      if(this.products.length < 5) {
        this.products.push(product) 
      } else {
        return "Your cart is full."
      }
    }
  
    remove(product) {
      if (this.products.length < 1) {
        return "Your cart is empty."
      } else {
        this.products.pop()
      }
    }
  
    items() {
      return this.products
    }
  }