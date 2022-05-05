import React from 'react';
import '../styles/components/pages/LifePage.css';

const LifePage = (props) => {
   return (  



<main className='holder_life'>

<h1>  <span>So...</span>
                <span> What </span>

                <span> is </span>

                <span> Life </span>

                <span> ? </span></h1>

         <div class="columnas">
             <div class="life_left">

              <p class="Parrafos">Actually, there is currently no consensus regarding the definition of life. But lets settle it like this:
              Anything that can or has CHRMD, which states: Cells, Homeostasis, Reproduction, Metabolism and DNA/Heredity. 
              These are called "Characteristics of life", because all living beings known share this things. </p>
           </div>

           <h2 class="Def_life2">But... are there any other planets with life?</h2>

           <p class="Parrafos">Well, to say there is no life in the universe is like saying that because in a glass containing ocean water there is no life in the ocean. So although the chances of life condition to be almost 0, as there are so many planets and solar systems. It will also be almost imposible for no other life to exist at all... but there are some theories like the ones below that kinda gives us a look into it.</p>

           <h2 class="Def_life3">And... why havent we seen any signs of life yet?</h2>
           
           <p class="Parrafos">There are several theories about this, among these there may be reasons of why we havent even see at least some record or sample of an alien civilization, like any light source or space junk. Some of these are listed below:</p>


           <h2 class="Def_life4">Theories</h2>
         </div>


          <ul>
            <li class="Teorias">
              <a href="https://www.youtube.com/watch?v=sNhhvQGsMEc" rel="noopener noreferrer" target="_blank" ><img src="images/life/fermi-paradox.jpg" width="190" height="auto"  alt="Fermi_img"></img></a>
              <h2 class="Teorias_Desc">The Fermi Paradox</h2>
            </li>
      
            <li class="Teorias">
              <a href="https://www.youtube.com/watch?v=UjtOGPJ0URMt=5s" target="_blank" rel="noopener noreferrer" ><img src="images/life/Filter.png" width="200" height="auto" alt="Great_Filter_img"></img></a>
              <h2 class="Teorias_Desc">The Great Filter</h2>
      
            </li>

            <li class="Teorias">
            <a href="https://www.youtube.com/watch?v=nOuh_nJWSlMt=920s" target="_blank" rel="noopener noreferrer" ><img src="images/life/Zoo.jpg" width="200" height="auto" alt="Zoo_img"></img></a>
              <h2 class="Teorias_Desc">The Zoo Hypotesis</h2>
      
            </li>
          </ul>

</main>

    );
}
export default LifePage;