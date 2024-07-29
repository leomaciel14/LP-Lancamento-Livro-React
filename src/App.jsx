import "./App.css";
import { Navigation } from "./01_Navigation";
import { Content } from "./02_Content";
import { Sticker } from "./03_Stickers";
import { OndeComprar } from "./04_OndeComprar";
import { Relatos } from "./05_Relatos";
import { BannerDireto } from "./06_BannerDireto";
import { FaleComigo } from "./07_FaleComigo";
import { Spotify } from "./08_Spotify";
import { Forms } from "./09_Forms";
import { Footer } from "./10_Footer";

import Reviews from "./Reviews";

function App() {
  
  return (
    <div className="scroll-smooth">
      <Navigation />
      <Content />
      <Sticker />
      <OndeComprar />
      <Relatos />
      <BannerDireto />
      <FaleComigo />
      <Reviews />
      <Spotify />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
