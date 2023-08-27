import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import AreaFeatureContainer from "../components/area-feature-container";
import RentPropertiesLatestContainer from "../components/rent-properties-form";

import RentPropertiesContainer from "../components/rent-properties-container";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Maja Real Estate</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <main className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header />
        <Hero />
        <AreaContainer />
        <AreaFeatureContainer />
        <RentPropertiesLatestContainer />
        <RentPropertiesContainer />
        <Contact />
        <Footer
        // imageDimensions="/houseline2.svg"
        // dimensionText="/social-media-logo5.svg"
        // dimensionText2="/social-media-logo6.svg"
        // dimensionCode="/social-media-logo7.svg"
        // dimensionCodeImageUrl="/social-media-logo8.svg"
        // imageDimensionsText="/social-media-logo9.svg"
        // propOverflow="unset"
        // propTextDecoration="unset"
        // propTextDecoration1="unset"
        />
      </main>
    </>
  );
};

export default LandingPage;
