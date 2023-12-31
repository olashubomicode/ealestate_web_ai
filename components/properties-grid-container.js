import PropertyCard from "./property-card";

const PropertiesGridContainer = ({ allProperties }) => {
  console.warn("allProperies", allProperties);
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-regular-600">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px]">
        {allProperties?.length &&
          allProperties.map(({ id, image, name, price }) => (
            <PropertyCard key={id} imgUrl={image} name={name} price={price} />
          ))}
        {/* <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc@2x.png"
          imageDimensionIds="/car.svg"
          imageDimensionValues="/bathtub.svg"
          imageDimensionIdsAndValue="/arrowsout.svg"
          imageDimensionIdsAndValue2="/ellipse-1@2x.png"
          imageDimensionIdsAndValue3="/sharenetwork.svg"
          imageDimensionIdsAndValue4="/heart.svg"
          imageDimensionIdsAndValue5="/plus.svg"
        /> */}
        {/* <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc1@2x.png"
          imageDimensionIds="/car1.svg"
          imageDimensionValues="/bathtub1.svg"
          imageDimensionIdsAndValue="/arrowsout.svg"
          imageDimensionIdsAndValue2="/ellipse-1@2x.png"
          imageDimensionIdsAndValue3="/sharenetwork1.svg"
          imageDimensionIdsAndValue4="/heart1.svg"
          imageDimensionIdsAndValue5="/plus1.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
          propBoxSizing="border-box"
          propDisplay="inline-block"
          propBoxSizing1="border-box"
          propDisplay1="inline-block"
          propBoxSizing2="border-box"
          propDisplay2="inline-block"
          propDisplay3="inline-block"
          propDisplay4="inline-block"
          propDisplay5="inline-block"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc2@2x.png"
          imageDimensionIds="/car2.svg"
          imageDimensionValues="/bathtub2.svg"
          imageDimensionIdsAndValue="/arrowsout.svg"
          imageDimensionIdsAndValue2="/ellipse-1@2x.png"
          imageDimensionIdsAndValue3="/sharenetwork.svg"
          imageDimensionIdsAndValue4="/heart.svg"
          imageDimensionIdsAndValue5="/plus.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
          propBoxSizing="border-box"
          propDisplay="inline-block"
          propBoxSizing1="border-box"
          propDisplay1="inline-block"
          propBoxSizing2="border-box"
          propDisplay2="inline-block"
          propDisplay3="inline-block"
          propDisplay4="inline-block"
          propDisplay5="inline-block"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc3@2x.png"
          imageDimensionIds="/car1.svg"
          imageDimensionValues="/bathtub1.svg"
          imageDimensionIdsAndValue="/arrowsout.svg"
          imageDimensionIdsAndValue2="/ellipse-1@2x.png"
          imageDimensionIdsAndValue3="/sharenetwork2.svg"
          imageDimensionIdsAndValue4="/heart1.svg"
          imageDimensionIdsAndValue5="/plus2.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
          propBoxSizing="border-box"
          propDisplay="inline-block"
          propBoxSizing1="border-box"
          propDisplay1="inline-block"
          propBoxSizing2="border-box"
          propDisplay2="inline-block"
          propDisplay3="inline-block"
          propDisplay4="inline-block"
          propDisplay5="inline-block"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc@2x.png"
          imageDimensionIds="/car.svg"
          imageDimensionValues="/bathtub.svg"
          imageDimensionIdsAndValue="/arrowsout.svg"
          imageDimensionIdsAndValue2="/ellipse-1@2x.png"
          imageDimensionIdsAndValue3="/sharenetwork2.svg"
          imageDimensionIdsAndValue4="/heart2.svg"
          imageDimensionIdsAndValue5="/plus3.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
          propBoxSizing="border-box"
          propDisplay="inline-block"
          propBoxSizing1="border-box"
          propDisplay1="inline-block"
          propBoxSizing2="border-box"
          propDisplay2="inline-block"
          propDisplay3="inline-block"
          propDisplay4="inline-block"
          propDisplay5="inline-block"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc4@2x.png"
          imageDimensionIds="/car3.svg"
          imageDimensionValues="/bathtub3.svg"
          imageDimensionIdsAndValue="/arrowsout1.svg"
          imageDimensionIdsAndValue2="/ellipse-11@2x.png"
          imageDimensionIdsAndValue3="/sharenetwork3.svg"
          imageDimensionIdsAndValue4="/heart3.svg"
          imageDimensionIdsAndValue5="/plus4.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
          propBoxSizing="border-box"
          propDisplay="inline-block"
          propBoxSizing1="border-box"
          propDisplay1="inline-block"
          propBoxSizing2="border-box"
          propDisplay2="inline-block"
          propDisplay3="inline-block"
          propDisplay4="inline-block"
          propDisplay5="inline-block"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc5@2x.png"
          imageDimensionIds="/car4.svg"
          imageDimensionValues="/bathtub4.svg"
          imageDimensionIdsAndValue="/arrowsout1.svg"
          imageDimensionIdsAndValue2="/ellipse-11@2x.png"
          imageDimensionIdsAndValue3="/sharenetwork4.svg"
          imageDimensionIdsAndValue4="/heart4.svg"
          imageDimensionIdsAndValue5="/plus5.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
          propBoxSizing="border-box"
          propDisplay="inline-block"
          propBoxSizing1="border-box"
          propDisplay1="inline-block"
          propBoxSizing2="border-box"
          propDisplay2="inline-block"
          propDisplay3="inline-block"
          propDisplay4="inline-block"
          propDisplay5="inline-block"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc6@2x.png"
          imageDimensionIds="/car3.svg"
          imageDimensionValues="/bathtub3.svg"
          imageDimensionIdsAndValue="/arrowsout1.svg"
          imageDimensionIdsAndValue2="/ellipse-11@2x.png"
          imageDimensionIdsAndValue3="/sharenetwork5.svg"
          imageDimensionIdsAndValue4="/heart3.svg"
          imageDimensionIdsAndValue5="/plus6.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
          propBoxSizing="border-box"
          propDisplay="inline-block"
          propBoxSizing1="border-box"
          propDisplay1="inline-block"
          propBoxSizing2="border-box"
          propDisplay2="inline-block"
          propDisplay3="inline-block"
          propDisplay4="inline-block"
          propDisplay5="inline-block"
        /> */}
      </div>
    </div>
  );
};

export default PropertiesGridContainer;
