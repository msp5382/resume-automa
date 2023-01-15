interface ITextBoxProps {
  value?: string;
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextBox = ({
  value,
  label,
  placeholder,
  onChange = () => {},
}: ITextBoxProps) => {
  return (
    <div className="flex text-xs flex-col gap-1">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        value={value}
        onChange={onChange}
        className=" bg-gray-100 p-2 rounded-md outline-none focus:bg-gray-200"
        placeholder={placeholder}
      />
    </div>
  );
};
