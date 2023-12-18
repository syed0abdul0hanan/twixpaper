import React from "react";
import Maintop from "../components/layout/main/maintop";
import ShopOurBestSeller from "../components/layout/main/ShopOurBestSeller";
import GreenerAndHealthierDiv from "../components/layout/main/GreenerAndHealthierDiv";
import EcoBookSection from "../components/layout/main/EcoBookSection";
import EcofriendlyProducts from "../components/layout/main/EcofriendlyProducts";
import IndependentArtist from "../components/layout/main/IndependentArtist";


function Home() {
  return (
    <>
      <Maintop />
      <ShopOurBestSeller />
      <GreenerAndHealthierDiv />
      <EcoBookSection />
      <EcofriendlyProducts />
      <IndependentArtist />
    </>
  );
}
export default Home;
