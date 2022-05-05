import React from 'react';
import '../styles/components/pages/HomePage.css';


const HomePage = (_props) => {
  return (
    <main className="holder">

      <div class="homeimg">

        <img src="images/Rocket.jpg" height="250px" width="960px" alt="Rocket"></img>
      </div>
      <div class="columnas">
        <div class="bienvenidos left">
          <h2>Welcome</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dolore iusto quasi ea dolores, eligendi non totam atque quod quos exercitationem unde libero debitis, eos ad sunt deleniti corporis fugiat?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam est unde assumenda consequuntur esse magni saepe velit nam possimus iste adipisci odit odio beatae quisquam laboriosam ea eum, doloremque sint.</p>
        </div>
      </div>

      <div class="historia">
        <h2>Brief Introduction</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem in sit molestias. Eos nostrum deleniti, ipsum quam illum placeat quaerat ipsa omnis possimus sequi nobis illo tenetur et non!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet vel voluptate adipisci. Adipisci amet deserunt molestiae illo quo debitis commodi laboriosam et obcaecati consequuntur ab illum, libero odit reiciendis?</p>
      </div>

      <div class="Index_img">
        <h2>Top Images</h2>
        <div class="images">
          <div class="image">
            <img src="images/home/Galaxy_1.png" width="150" height="150" alt="Galaxy_1"></img>
            <h5>Sail of Stars</h5>
            <h6>Galaxy NGC 3318</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam quibusdam consequuntur at neque ab, tenetur nesciunt in quo obcaecati, accusantium minus aut, fugiat veritatis eum nemo consectetur enim ex.</p>
          </div>

          <div class="image">
            <img src="images/home/Galaxy_2.jpg" width="150" height="150" alt="Galaxy_2"></img>
            <h5>Black Hole Igniting Star Formation</h5>
            <h6>Galaxy Henize 2-10</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam quibusdam consequuntur at neque ab, tenetur nesciunt in quo obcaecati, accusantium minus aut, fugiat veritatis eum nemo consectetur enim ex.</p>
          </div>

          <div class="image">
            <img src="images/home/Galaxy_3.jpg" width="150" height="150" alt="Galaxy_3"></img>
            <h5>Galactic Duo</h5>
            <h6>Galaxy NGC 105</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam quibusdam consequuntur at neque ab, tenetur nesciunt in quo obcaecati, accusantium minus aut, fugiat veritatis eum nemo consectetur enim ex.</p>
          </div>

          <div class="image">
            <img src="images/home/Galaxy_4.jpg" width="150" height="150" alt="Galaxy_4"></img>
            <h5>Galaxy with an Explosive Past</h5>
            <h6>Galaxy NGC 976</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam quibusdam consequuntur at neque ab, tenetur nesciunt in quo obcaecati, accusantium minus aut, fugiat veritatis eum nemo consectetur enim ex.</p>
          </div>


          <div class="image">
            <img src="images/home/Galaxy_5.jpg" width="150" height="150" alt="Galaxy_5"></img>
            <h5>Spiral's Sides</h5>
            <h6>Spiral galaxy UGC 11537</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam quibusdam consequuntur at neque ab, tenetur nesciunt in quo obcaecati, accusantium minus aut, fugiat veritatis eum nemo consectetur enim ex.</p>
          </div>

        </div>

      </div>

      <body class="Home_body"> 
  
  </body>

    </main>
    


  );
}
export default HomePage;