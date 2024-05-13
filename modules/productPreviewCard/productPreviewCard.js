class productPreviewCard{ 
    /*usar apenas pra ver se classe foi importada*/
    constructor(){
        console.log("productPreviewCard iniciada");  
        this.init();
    }
    
    //inicio
    init(){
        
      // return document.getElementById('app').innerHTML+=`
       return document.querySelector("body > main").innerHTML+=`
        <article class="productPreviewCard">
          <div class="c1">
           </div>

          <div class="c2">
              <h1>PERFUME</h1>
              <h2>Gabrielle Essence Eau De Parfum</h2>
              <p>A floral, solar and voluptuos interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

              <ul>
                <li>$149.99</li>
                <li>$169.99</li>
               </ul>

              <button><img src="./modules/productPreviewCard/img/icon-cart.svg" style="margin-right:14px" alt="imagem cart">Add to Cart</button> 


              
          </div>



         </article>

       `
    }//fim init



}  //fim da classe


export default productPreviewCard;