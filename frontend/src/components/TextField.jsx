const TextField = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name} // 🔥 This is crucial
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default TextField;
