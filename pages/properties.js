import "antd/dist/antd.min.css";
import { Menu, Dropdown, Pagination } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import Footer from "../components/footer";

const PropertiesGridView = () => {
  const suggestPropertyList = [
    { label: "Popular properties", key: "100" },
    { label: "Latest properties", key: "Latest properties" },
    { label: "Recommended properties", key: "Recommended properties" },
  ];

  const handleClick = (e) => {
    console.log(e.key);
  };
  return (
    <div className=" bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="leading-[72px] font-semibold">Properties</div>
          <div className=" text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className=" flex flex-col pt-16 px-0 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row items-end flex-wrap justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className="w-6 h-6" alt="" src="/listbullets.svg" />
              <img className="w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="leading-[24px]">Sort by:</div>
            <Dropdown
              className="self-stretch text-sm"
              menu={{
                onClick: handleClick,
                items: suggestPropertyList,
              }}
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <PropertiesGridContainer />
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          {/* <div className="rounded bg-primary-50 flex flex-row p-2.5 items-start justify-start">
            <img className="relative w-6 h-6" alt="" src="/arrowleft.svg" />
          </div>
          
          <div className="rounded bg-primary-500 flex flex-row p-2.5 items-start justify-start">
            <img className="relative w-6 h-6" alt="" src="/arrowright.svg" />
          </div> */}
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <Footer
      /* imageDimensions="/houseline1.svg"
        contactInfo="tel:+17122505005"
        emailAddress="mailto:code2adebayo@gmail.com"
        dimensionText="/social-media-logo.svg"
        dimensionText2="/social-media-logo1.svg"
        dimensionCode="/social-media-logo2.svg"
        dimensionCodeImageUrl="/social-media-logo3.svg"
        imageDimensionsText="/social-media-logo4.svg" */
      />
    </div>
  );
};

export default PropertiesGridView;
