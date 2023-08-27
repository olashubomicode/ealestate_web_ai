/* 
{
  imageDimensions,
  contactInfo,
  emailAddress,
  dimensionText,
  dimensionText2,
  dimensionCode,
  dimensionCodeImageUrl,
  imageDimensionsText,
  propOverflow,
  propTextDecoration,
  propTextDecoration1,
}
*/
const Footer = () => {
  /* const footerSectionStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]); */

  /* const call123Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]); */

  /* const emailExamplemailcomStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]); */

  /* 
  imageDimensions="/houseline2.svg"
          dimensionText="/social-media-logo5.svg"
          dimensionText2="/social-media-logo6.svg"
          dimensionCode="/social-media-logo7.svg"
          dimensionCodeImageUrl="/social-media-logo8.svg"
          imageDimensionsText="/social-media-logo9.svg"
          propOverflow="unset"
          propTextDecoration="unset"
          propTextDecoration1="unset"
  */
  return (
    <div
      /* md:self-stretch  md:gap-[0px]*/
      className="self-stretch overflow-hidden flex flex-row p-[50px] items-start justify-start  md:w-auto md:flex-row  sm:flex-col"
      /* style={footerSectionStyle} */
    >
      {/* sm:self-stretch sm:flex-[unset]*/}
      <footer
        className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] 
      sm:flex-col sm:gap-[50px]  "
      >
        {/* sm:self-stretch h-[300px]*/}
        <div className="w-[312px]  flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-regular-600">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            {/* relative  */}
            <img className="w-11 h-11" alt="" src={"/houseline2.svg"} />
            <div className="flex flex-col items-start justify-start">
              <div className="leading-[24px] font-semibold">REIS</div>
              <div className="text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          {/* self-stretch  h-[168px] */}
          <div className="flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <div className="text-5xl leading-[32px] font-semibold text-gray-black">
              Contact Us
            </div>
            <a
              className="[text-decoration:none] relative leading-[24px] text-[inherit]"
              href={"tel:+17122505005"}
              // style={call123Style}
            >
              Call : +123 400 123
            </a>
            <div className="leading-[24px] flex items-end w-[312px]">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <a
              className="[text-decoration:none] relative leading-[24px] text-gray-700"
              href={"mailto:someone@example.com"}
              // style={emailExamplemailcomStyle}
            >
              Email: example@mail.com
            </a>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between">
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-[21.67px]"
                alt="social-media-logo6"
                src={"/social-media-logo6.svg"}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-5 overflow-hidden shrink-0"
                alt="social-media-logo6"
                src={"/social-media-logo6.svg"}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={"/social-media-logo7.svg"}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={"/social-media-logo8.svg"}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={"/social-media-logo9.svg"}
              />
            </div>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">Features</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className="leading-[24px]">Home</div>
            <div className="leading-[24px]">Become a Host</div>
            <div className="leading-[24px]">Pricing</div>
            <div className="leading-[24px]">Blog</div>
            <div className="leading-[24px]">Contact</div>
          </div>
        </div>
        <div className="w-[173px] ] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">Company</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className="leading-[24px]">About Us</div>
            <div className="leading-[24px]">Press</div>
            <div className="leading-[24px]">Contact</div>
            <div className="leading-[24px]">Careers</div>
            <div className="leading-[24px]">Blog</div>
          </div>
        </div>
        {/* h-[168px]  */}
        <div className="w-[203px]  flex flex-col items-start justify-start gap-[32px]">
          <div className="leading-[32px] font-semibold">Team and policies</div>
          <div className=" h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <a href="" className="leading-[24px]">
              Terms of servies
            </a>
            <a href="" className="leading-[24px]">
              Privacy Policy
            </a>
            <a href="" className="leading-[24px]">
              Security
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
