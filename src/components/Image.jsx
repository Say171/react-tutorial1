import Fav1 from './assets/favorite-1_th.jpg';
import Fav2 from './assets/favorite-2_th.jpg';
import Fav3 from './assets/favorite-3_th.jpg';
import Fav4 from './assets/favorite-4_th.jpg';

export default function Image() {
    return (
      <div>
        <a href="./assets/favorite-1.jpg">
          <img src={Fav1} alt="Small black bird, black claws, long black slender beak, links to a larger version of the image" />
        </a>
        <a href="./assets/favorite-2.jpg">
          <img src={Fav2} alt="Top half of a pretty bird with bright blue plumage on the neck, light-colored beak, blue headdress, links to a larger version of the image" />
        </a>
        <a href="./assets/favorite-3.jpg">
          <img src={Fav3} alt="Top half of a large bird with white plumage, a very long curved narrow light-colored beak, links to a larger version of the image" />
        </a>
        <a href="./assets/favorite-4.jpg">
          <img src={Fav4} alt="Large bird, mostly white plumage with black plumage on the back and rear, a long straight white beak, links to a larger version of the image" />
        </a>
      </div>
    );
  }