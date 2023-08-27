import { Button } from "@mui/material";
import Link from "next/link";
import PropertyCard from "./property-card";

const RentPropertiesLatestContainer = () => {
  return (
    <form className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-primary-800 text-center">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
              alt=""
              src="/unsplashrlwe8f8anoc7@2x.png"
            />
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="flex-1 relative text-[14.51px] leading-[20.32px] font-medium font-body-regular-600 text-gray-700 text-left">
                92 ALLIUM PLACE, ORLANDO FL 32827
              </div>
            </div>
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-regular-600 text-primary-500 text-left">
                $ 590,693
              </div>
            </div>
            <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px]">
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/car5.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-regular-600 text-gray-500 text-left">
                  4
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/bathtub5.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-regular-600 text-gray-500 text-left">
                  4
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/arrowsout2.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-regular-600 text-gray-500 text-left">
                  2,096.00 ft
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[5.81px]">
                <img
                  className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className="relative text-[11.61px] leading-[17.42px] font-medium font-body-regular-600 text-gray-700 text-center">
                  Jenny Wilson
                </div>
              </div>
              {/* 
                    https://user-images.githubusercontent.com/20041050/206600605-d7f05434-3958-4163-9b4f-31bffbeff9d1.png
                    */}

              <div className="flex flex-row items-start justify-start gap-[8.71px]">
                <button
                  type="button"
                  className="[text-decoration:none] rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start"
                >
                  <Link
                    className="cursor-pointer [text-decoration:none] relative w-[14.51px] h-[14.51px]"
                    href="https://user-images.githubusercontent.com/20041050/206600605-d7f05434-3958-4163-9b4f-31bffbeff9d1.png"
                  >
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="absolute h-[31.45%] w-[31.45%] top-[34.27%] right-[59.27%] bottom-[34.27%] left-[9.27%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector1.svg"
                    />
                    <img
                      className="absolute h-[31.45%] w-[31.45%] top-[62.4%] right-[15.52%] bottom-[6.15%] left-[53.02%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector2.svg"
                    />
                    <img
                      className="absolute h-[31.45%] w-[31.45%] top-[6.15%] right-[15.52%] bottom-[62.4%] left-[53.02%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector3.svg"
                    />
                    <img
                      className="absolute h-[21.06%] w-[29.19%] top-[25.41%] right-[38.53%] bottom-[53.53%] left-[32.28%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector4.svg"
                    />
                    <img
                      className="absolute h-[21.06%] w-[29.19%] top-[53.53%] right-[38.53%] bottom-[25.4%] left-[32.28%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector5.svg"
                    />
                  </Link>
                </button>
                <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] flex flex-row items-start justify-start">
                  <img
                    className="relative w-[14.51px] h-[14.51px]"
                    alt=""
                    src="/heart2.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] flex flex-row items-start justify-start">
                  <img
                    className="relative w-[14.51px] h-[14.51px]"
                    alt=""
                    src="/plus7.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc8@2x.png"
            name="92 Allium Place, Orlando FL"
            price="590,632"
          />
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc9@2x.png"
            name="92 Allium Place, Orlando FL"
            price="590,632"
          />
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc10@2x.png"
            name="92 Allium Place, Orlando FL"
            price="590,632"
          />
        </div>
      </div>
      <Button variant="contained" color="primary">
        Load more listing
      </Button>
    </form>
  );
};

export default RentPropertiesLatestContainer;
