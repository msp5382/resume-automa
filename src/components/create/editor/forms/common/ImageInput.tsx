export const ImageInput = () => {
  return (
    <div className="flex text-xs flex-col gap-1 py-1">
      <label className="text-xs text-gray-500">Image</label>
      <input
        type="file"
        className="text-sm file:mr-4 file:py-2 file:px-4
  file:rounded-full file:border-0
  file:text-xs file:font-semibold
  file:bg-violet-50 file:text-blue-700
  hover:file:bg-violet-100"
      />
    </div>
  );
};
