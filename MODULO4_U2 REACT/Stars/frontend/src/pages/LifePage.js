import React from 'react';

const LifePage = (props) => {
   return (  
<main className='holder'>
<header>
    <div class="holder">
        <img class="logo" src="img/logo.png" alt="Logo"></img>
        <h1>Amongst the Stars</h1>
    </div>
</header>




  <main class="holder_subt_life">
  <h3 class="subt_life">What is life?</h3>
</main>


         <div class="columnas">
             <div class="life_left">
              <h2 class="Def_life">Definition of Life</h2>

              <p class="Parrafos">Actually, there is currently no consensus regarding the definition of life. But lets settle it like this: </p>
              <p class="Parrafos">Anything that can or has CHRMD, which states: Cells, Homeostasis, Reproduction, Metabolism and DNA/Heredity.</p>
              <p class="Parrafos">These are called "Characteristics of life", because all living beings known share this things.</p>
           </div>

           <h2 class="Def_life">But... are there any other planets with life?</h2>

           <p class="Parrafos">Well, to say there is no life in the universe is like saying that because in a glass containing ocean water there is no life in the ocean. So although the chances of life condition to be almost 0, as there are so many planets and solar systems. It will also be almost imposible for no other life to exist at all... but there are some theories like the ones below that kinda gives us a look into it.</p>

           <h2 class="Def_life">And... why havent we seen any signs of life yet?</h2>
           
           <p class="Parrafos">There are several theories about this, among these there may be reasons of why we havent even see at least some record or sample of an alien civilization, like any light source or space junk. Some of these are listed below:</p>


           <h2 class="Def_life">Theories</h2>
         </div>


          <ul>
            <li class="Teorias">
              <a href="https://www.youtube.com/watch?v=sNhhvQGsMEc" target="_blank" ><img src="public/images/life/fermi-paradox.jpg" width="190" height="auto"  alt="Fermi_img"></img> </a>
              <h2 class="Teorias_Desc">The Fermi Paradox</h2>
            </li>
      
            <li class="Teorias">
              <a href="https://www.youtube.com/watch?v=UjtOGPJ0URM&t=5s" target="_blank" ><img src="public/images/life/fermi-paradox.jpg" width="200" height="auto" alt="Great_Filter_img"></img> </a>
              <h2 class="Teorias_Desc">The Great Filter</h2>
      
            </li>

            <li class="Teorias">
            <a href="https://www.youtube.com/watch?v=nOuh_nJWSlM&t=920s" target="_blank" ><img src="public/images/life/fermi-paradox.jpg" width="200" height="auto" alt="Zoo_img"></img></a>
              <h2 class="Teorias_Desc">The Zoo Hypotesis</h2>
      
            </li>
          </ul>

</main>

    );
}
export default ContactoPage;