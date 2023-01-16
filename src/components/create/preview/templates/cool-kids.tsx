import { ResumeContext } from "@/common/contexts/resumeContext";
import fontStyle from "./fonts/cool-kids.module.css";
import { convertFonts, convertSize } from "./utils/convertFonts";
// A4 2480 x 3508 pixels

const Template = ({ state, style, _ref }: any) => {
  console.log("cool-kids", state, style);
  return (
    <div ref={_ref} className={fontStyle.font}>
      <div
        className="bg-white h-full"
        style={{
          width: style.width,
          height: style.height,
        }}
      >
        <div className="grid grid-cols-6 h-full">
          <div
            className="col-span-4"
            style={{
              padding: convertSize(style.width, 100),
              ...convertFonts(style.width, "2xl"),
            }}
          >
            <div className="flex">
              <img src={state.personal_profile.img} alt="" />
              <div className="flex gap-2">
                <p>{state.personal_profile.firstname}</p>
                <p>{state.personal_profile.lastname}</p>
              </div>
            </div>
          </div>
          <div
            className="col-span-2 text-white flex"
            style={{
              backgroundColor: state.color,
              paddingLeft: convertSize(style.width, 100),
            }}
          >
            <div
              className="my-auto"
              style={{
                ...convertFonts(style.width, "xl"),
              }}
            >
              Details
              <div
                className="wrap"
                style={{
                  maxWidth: convertSize(style.width, 400),
                }}
              >
                {state.personal_profile.address}
                <br />
                {state.personal_profile.city}
                {state.personal_profile.country}
                <br />
                {state.personal_profile.phone}
                <br />
                {state.personal_profile.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
