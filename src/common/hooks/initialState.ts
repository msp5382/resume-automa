export const initialState = {
  font: "Poppins",
  color: "#30064d",
  title_map: {
    personal_profile: "Personal Profile",
    professional_summary: "Professional Summary",
    employment_history: "Employment History",
    education: "Education",
    skill: "Skills",
  },
  personal_profile: {
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
  },
  professional_summary: {
    summary: "",
  },
  employment_history: [
    {
      job_title: "",
      employer: "",
      start: "",
      end: "",
      city: "",
      description: "",
      index: 0,
      _key: 0,
    },
  ],
  education: [
    {
      school: "",
      degree: "",
      start: "",
      end: "",
      city: "",
      description: "",
      index: 0,
      _key: 0,
    },
  ],
  skill: [
    {
      skill: "",
      level: "",
      index: 0,
      _key: 0,
    },
  ],
};
