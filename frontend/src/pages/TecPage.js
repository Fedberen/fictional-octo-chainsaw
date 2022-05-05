import React from 'react';
import '../styles/components/pages/Tec.css';

const TecPage = (props) => {
    return (
        <main className='holder'>

            <h1>  <span>Presenting:</span>
                <span> The </span>

                <span> Future </span>

                <span> of </span>

                <span> Mankind </span></h1>
         

            <div class="tecnology">
                <img src="images/tec/Falcon_9.jpg" alt="Falcon9"></img>
                <div class="info">
                    <h4>Falcon 9</h4>
                    <p>Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.</p>
                    <p>To see more go to image</p>
                </div>
            </div>


            <div class="tecnology">
                <div class="info">
                    <h4>Flacon Heavy</h4>
                    <img src="images/tec/Falcon_Heavy.jpg" alt="Falcon Heavy"></img>
                    <p>Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb) Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy. Falcon Heavy is composed of three Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft.</p>
                    <p>To see more go to image</p>
                </div>
            </div>


            <div class="tecnology">
                <img src="images/tec/Dragon.png" alt="Dragon"></img>
                <div class="info">
                    <h4>Dragon</h4>
                    <p>The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.</p>
                    <p>To see more go to image</p>
                </div>
            </div>


            <div class="tecnology">
                <div class="info">
                    <h4>Starship</h4>
                    <img src="images/tec/Starship.jpg" alt="Starship"></img>
                    <p>SpaceX’s Starship spacecraft and Super Heavy rocket (collectively referred to as Starship) represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship will be the world’s most powerful launch vehicle ever developed, with the ability to carry in excess of 100 metric tonnes to Earth orbit.</p>
                    <p>To see more go to image</p>
                </div>
            </div>

        </main>

    );
}
export default TecPage;