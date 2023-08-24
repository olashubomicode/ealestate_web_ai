import { TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-row flex-wrap py-[86px] px-[5px] items-start justify-center text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="flex-1 flex flex-col py-0 px-2.5 box-border items-center justify-start gap-[40px] max-w-[900px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Contact us
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-center justify-start gap-[17px] text-left text-5xl text-darkslategray font-poppins">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
            <b className="self-stretch relative leading-[36px]">Enquiry Form</b>
            <div className="self-stretch relative text-lg leading-[30px] font-roboto text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
              <TextField
                className="[border:none] bg-[transparent] self-stretch flex-1 md:flex-[unset] md:self-stretch"
                color="primary"
                variant="outlined"
                type="text"
                label="First name"
                placeholder="Placeholder"
                size="medium"
                margin="none"
                required
              />
              <TextField
                className="[border:none] bg-[transparent] self-stretch flex-1 md:flex-[unset] md:self-stretch"
                color="primary"
                variant="outlined"
                type="text"
                label="Last name"
                placeholder="Placeholder"
                size="medium"
                margin="none"
                required
              />
            </div>
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              variant="outlined"
              type="email"
              label="Email id"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              required
            />
            <TextField
              className="self-stretch"
              color="primary"
              variant="outlined"
              multiline
              rows={5}
              label="Comments or questions"
              placeholder="Textarea placeholder"
              margin="none"
              required
            />
            <Button sx={{ width: 222 }} variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
