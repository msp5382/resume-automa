import { ResumeContext } from "@/common/contexts/resumeContext";
import fontStyle from "./fonts/cool-kids.module.css";
import { convertFonts, convertSize } from "./utils/convertFonts";
import Markdown from "react-markdown";

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
              <div
                className="rounded-full"
                style={{
                  width: convertSize(style.width, 250),
                  height: convertSize(style.width, 250),
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage: `url(${
                    state.personal_profile.img ??
                    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fe6496bba-3356-11ec-91da-063c6e372e74.jpg?crop=2667%2C1500%2C0%2C0"
                  })`,
                }}
              />
              <div
                className="font-bold"
                style={{
                  paddingTop: convertSize(style.width, 50),
                  paddingLeft: convertSize(style.width, 100),
                  width: convertSize(style.width, 1000),
                  ...convertFonts(style.width, "3xl"),
                }}
              >
                <div className="flex gap-2">
                  <p>{state.personal_profile.firstname || "Rick"}</p>
                  <p>{state.personal_profile.lastname || "Ashley"}</p>
                </div>

                <div
                  className="font-bold"
                  style={{
                    ...convertFonts(style.width, "xl"),
                  }}
                >
                  {state.personal_profile.title || "Singer"}
                </div>
              </div>
            </div>
            <div className="flex gap-3 flex-col py-3">
              <div className="">
                <h1
                  className="font-bold"
                  style={{
                    ...convertFonts(style.width, "xl"),
                  }}
                >
                  {state.title_map.professional_summary}
                </h1>
                <div
                  className=""
                  style={{
                    ...convertFonts(style.width, "sm"),
                  }}
                >
                  <Markdown>
                    {state.professional_summary.summary ||
                      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, exercitationem dolore. Aut voluptas saepe quaerat, temporibus similique id rerum dolorum suscipit minus doloribus molestiae maxime vel illo nisi magni recusandae!`}
                  </Markdown>
                </div>
              </div>
              <div className="">
                <h1
                  className="font-bold"
                  style={{
                    ...convertFonts(style.width, "xl"),
                  }}
                >
                  {state.title_map.employment_history}
                </h1>
                <div className="flex flex-col gap-3 py-2">
                  {state.employment_history
                    .sort((a: any, b: any) => a.index - b.index)
                    .map((item: any, index: number) => {
                      return (
                        <div
                          className=""
                          key={index}
                          style={{
                            ...convertFonts(style.width, "sm"),
                          }}
                        >
                          <div className="flex justify-between">
                            <div className="font-bold">
                              {item.job_title || "Singer"}
                            </div>
                            <div className="font-bold">
                              {item.employer || "Whenever Inc."}
                            </div>
                            <div className="font-bold">
                              {item.start || "2021"} - {item.end || "Present"}
                            </div>
                          </div>
                          <div className="col-span-1">
                            <Markdown>
                              {item.description ||
                                `*Lorem* ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quaerat esse aperiam iste id. Ipsam quam necessitatibus ducimus quaerat neque provident, ullam magnam suscipit, aspernatur velit asperiores odit ad?`}
                            </Markdown>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="">
                <h1
                  className="font-bold"
                  style={{
                    ...convertFonts(style.width, "xl"),
                  }}
                >
                  {state.title_map.education}
                </h1>
                <div className="flex flex-col gap-3 py-2">
                  {state.education
                    .sort((a: any, b: any) => a.index - b.index)
                    .map((item: any, index: number) => {
                      return (
                        <div
                          className=""
                          key={index}
                          style={{
                            ...convertFonts(style.width, "sm"),
                          }}
                        >
                          <div className="flex justify-between">
                            <div className="font-bold">
                              {item.school || "Harvard"}
                            </div>
                            <div className="font-bold">
                              {item.degree || "PhD."}
                            </div>
                            <div className="font-bold">
                              {item.start || "2021"} - {item.end || "Present"}
                            </div>
                          </div>
                          <div className="col-span-1">
                            <Markdown>
                              {item.description ||
                                `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quaerat esse aperiam iste id. Ipsam quam necessitatibus ducimus quaerat neque provident, ullam magnam suscipit, aspernatur velit asperiores odit ad?`}
                            </Markdown>
                          </div>
                        </div>
                      );
                    })}
                </div>
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
              className="my-auto font-bold"
              style={{
                ...convertFonts(style.width, "xl"),
              }}
            >
              {state.title_map.personal_profile}
              <div
                className="wrap font-thin pb-5"
                style={{
                  maxWidth: convertSize(style.width, 400),
                  ...convertFonts(style.width, "sm"),
                }}
              >
                {state.personal_profile.address || "1234 Main St."}
                <br />
                {state.personal_profile.city || "Anytown"}
                {state.personal_profile.country || "USA"}
                <br />
                {state.personal_profile.phone || "123-456-7890"}
                <br />
                {state.personal_profile.email || "rick@rick.com"}
              </div>
              {state.title_map.skill}
              <div
                className="wrap font-thin"
                style={{
                  maxWidth: convertSize(style.width, 400),
                  ...convertFonts(style.width, "sm"),
                }}
              >
                {state.skill.map((item: any, index: number) => {
                  return (
                    <div key={index}>
                      {item.skill || "Sing"} : {item.level || "Expert"}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
