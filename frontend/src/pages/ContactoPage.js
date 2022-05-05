import React from 'react';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
   return (
      <main className='holder'>

         <div className="Columna left">
            <h2>Contacto Rapido</h2>
            <form action="" class="formulario">
               <p>
                  <label for="Nombre">Nombre</label>
                  <input type="text" />
               </p>

               <p>
                  <label for="email">Email</label>
                  <input type="email" />
               </p>

               <p>
                  <label for="telefono">Telefono</label>
                  <input type="text" />
               </p>

               <p>
                  <label for="comentario">Comentario</label>
                  <textarea name="" id="Comentario" cols="30" rows="10"></textarea>
               </p>
               <p className="acciones"><input type="submit" value="Enviar"> </input></p>
            </form>
         </div>

         <div className="Columna right">
            <h2>Otras vias de contacto</h2>
            <p>Tambien se pueden comunicar con nosotros....</p>
            <ul>
               <li>Telephone: 4578-7894 </li>
               <li>Email: contacto.@Amongst_the_Stars.com.ar</li>
               <li>Facebook: Amongst.The.Stars</li>
               <li>Twitter: Amongst_TheStars</li>
               <li>Instagram: AmongstTheStars</li>
            </ul>
         </div>

      </main>
   );
}
export default ContactoPage;