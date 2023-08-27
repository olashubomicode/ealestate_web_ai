import { useMemo } from "react";

const PropertyCard = ({
  /* imageDimensions,
  imageDimensionIds,
  imageDimensionValues,
  imageDimensionIdsAndValue,
  imageDimensionIdsAndValue2,
  imageDimensionIdsAndValue3,
  imageDimensionIdsAndValue4,
  imageDimensionIdsAndValue5,
  propWidth,
  propFlex,
  propMinWidth,
  propMaxWidth,
  propBoxSizing,
  propDisplay,
  propBoxSizing1,
  propDisplay1,
  propBoxSizing2,
  propDisplay2,
  propDisplay3,
  propDisplay4,
  propDisplay5, */

  /* 
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
  */
  key,
  imgUrl,
  name,
  price,
}) => {
  /* const card1Style = useMemo(() => {
    return {
      width: "350px",
      flex: "unset",
      minWidth: "unset",
      maxWidth: "unset",
    };
  }, [propWidth, propFlex, propMinWidth, propMaxWidth]); */
  /* 

  const propertyNameStyle = useMemo(() => {
    return {
      boxSizing: propBoxSizing,
    };
  }, [propBoxSizing]);

  const aLLIUMPLACEORLANDOStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const priceStyle = useMemo(() => {
    return {
      boxSizing: propBoxSizing1,
    };
  }, [propBoxSizing1]);

  const divStyle = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const moreDetailsStyle = useMemo(() => {
    return {
      boxSizing: propBoxSizing2,
    };
  }, [propBoxSizing2]); */

  /* const div1Style = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const div2Style = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  const ftStyle = useMemo(() => {
    return {
      display: propDisplay4,
    };
  }, [propDisplay4]);

  const jennyWilsonStyle = useMemo(() => {
    return {
      display: propDisplay5,
    };
  }, [propDisplay5]); */

  console.warn("img", imgUrl);
  return (
    <div
      className="rounded-3xs bg-gray-white box-border w-[350px] h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] text-left text-[14.51px] text-gray-700 font-body-regular-600 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
      // style={card1Style}
      style={{
        width: "350px",
        flex: "unset",
        minWidth: "unset",
        maxWidth: "unset",
      }}
    >
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
        alt=""
        src={imgUrl}
      />
      <div
        className="self-stretch flex flex-row p-2.5 items-start justify-start"
        // style={propertyNameStyle}
        style={{ boxSizing: "border-box" }}
      >
        <div
          className="flex-1 relative leading-[20.32px] font-medium"
          // style={aLLIUMPLACEORLANDOStyle}
          style={{ display: "inline-block" }}
        >
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div
        className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500"
        // style={priceStyle}
        style={{ boxSizing: "border-box" }}
      >
        <div
          className="relative leading-[18.98px] font-semibold"
          // style={divStyle}
          style={{ display: "inline-block" }}
        >
          {price}
        </div>
      </div>
      <div
        className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px] text-[10.84px] text-gray-500"
        // style={moreDetailsStyle}
        style={{ boxSizing: "border-box" }}
      >
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src="/car1.svg"
          />
          <div
            className="relative leading-[16.27px] font-medium"
            style={{ display: "inline-block" }}
          >
            4
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src="/bathtub1.svg"
          />
          <div
            className="relative leading-[16.27px] font-medium"
            // style={div2Style}
            style={{ display: "inline-block" }}
          >
            4
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src="/arrowsout.svg"
          />
          <div
            className="relative leading-[16.27px] font-medium"
            style={{ display: "inline-block" }}
          >
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px]">
        <div className="flex flex-row items-center justify-start gap-[5.81px]">
          <img
            className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <div
            className="relative leading-[17.42px] font-medium"
            style={{ display: "inline-block" }}
          >
            {name}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8.71px]">
          <a
            className="[text-decoration:none] rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start"
            href="https://user-images.githubusercontent.com/20041050/206600605-d7f05434-3958-4163-9b4f-31bffbeff9d1.png"
          >
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src="/sharenetwork1.svg"
            />
          </a>
          <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] flex flex-row items-start justify-start">
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src="/heart1.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] flex flex-row items-start justify-start">
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src="/plus1.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
