import { TextBox } from "./common/TextBox";
import { ImageInput } from "./common/ImageInput";
import { useResumeAction } from "@/common/hooks/useResumeAction";
export const PersonalDetails = () => {
  const { state, setPersonalProfile } = useResumeAction();
  const {
    personal_profile: {
      title,
      firstname,
      lastname,
      email,
      phone,
      country,
      city,
      address,
    },
  } = state;
  return (
    <div className="flex flex-col gap-2 py-1">
      <div className="">Personal Details</div>
      <div className="grid grid-cols-2 gap-3">
        <TextBox
          onChange={(e) => {
            setPersonalProfile({ title: e.target.value });
          }}
          value={title}
          label="Wanted Job Title"
          placeholder="e.g. Frontend Developer"
        ></TextBox>
        <ImageInput></ImageInput>
        <TextBox
          onChange={(e) => {
            setPersonalProfile({ firstname: e.target.value });
          }}
          value={firstname}
          label="Firstname"
          placeholder=""
        ></TextBox>
        <TextBox
          onChange={(e) => {
            setPersonalProfile({ lastname: e.target.value });
          }}
          value={lastname}
          label="Lastname"
          placeholder=""
        ></TextBox>
        <TextBox
          onChange={(e) => {
            setPersonalProfile({ email: e.target.value });
          }}
          value={email}
          label="Email"
          placeholder=""
        ></TextBox>
        <TextBox
          onChange={(e) => {
            setPersonalProfile({ phone: e.target.value });
          }}
          value={phone}
          label="Phone"
          placeholder=""
        ></TextBox>
        <TextBox
          onChange={(e) => {
            setPersonalProfile({ country: e.target.value });
          }}
          value={country}
          label="Country"
          placeholder=""
        ></TextBox>
        <TextBox
          onChange={(e) => {
            setPersonalProfile({ city: e.target.value });
          }}
          value={city}
          label="City"
          placeholder=""
        ></TextBox>
        <TextBox
          onChange={(e) => {
            setPersonalProfile({ address: e.target.value });
          }}
          value={address}
          label="Address"
          placeholder=""
        ></TextBox>
      </div>
    </div>
  );
};
