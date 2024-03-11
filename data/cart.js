export const cart =[];

 /**13.. */
 export function addToCart(productId){
    /**9.-- */
    let matchingItem;

        cart.forEach((cartItem) => {
          if(productId === cartItem.productId ){
             matchingItem = cartItem;
          }
        });

        if (matchingItem){
          matchingItem.quantity +=1;
        }else{/**8.... */
        cart.push({
          productId: productId,
          quantity: 1
        });}
  }