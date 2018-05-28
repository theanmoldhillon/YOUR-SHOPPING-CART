describe("Cart", () => {

    it("Should add an item to the shopping cart", () => {
        const cart = new Cart();

        cart.scan(4)
        expect(cart.items()).toEqual([4])
    
        cart.scan(5)
        expect(cart.items()).toEqual([4, 5])
      })

      it("Should only add 5 items to the constructor", () => {
        const cart = new Cart([1,2,3,4,5,6]);
    
        expect(cart.items()).toEqual([1,2,3,4,5])
      })

      it("", () => {
        const cart = new Cart();
        cart.scan(1)
        cart.scan(2)
        cart.scan(3)
        cart.scan(4)
        cart.scan(5)
   
    
        expect(cart.scan(6)).toBe("Your cart is full.")
      })

      it("Should remove the last item in the shopping cart", () => {
        const cart = new Cart();
        cart.scan(1)
        cart.scan(2)
        cart.scan(3)
        cart.remove()
        
        expect(cart.items()).toEqual([1,2])
    
      })

      it("Should return 'Your cart is empty.' if the shopping cart is empty", () => {
        const cart = new Cart();
        
        expect(cart.remove()).toBe("Your cart is empty.")
      })
})