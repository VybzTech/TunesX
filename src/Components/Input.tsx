import * as React from "react";
type InputProps<T> = {
  value: T;
  placeholder: string;
  type: string | null;
  setter: React.Dispatch<React.SetStateAction<T>>;
};

const Input: React.FC = (props: InputProps) => {
  const { value, placeholder, setter, type } = props;
  return (
    <div className="w-full mb-2.5">
      <input
        className="trans input"
        type={type ?? "text"}
        value={value}
        min={10}
        placeholder={placeholder}
        onChange={
          type
            ? (e) => console.log(e?.target?.value)
            : (e) => setter(e?.target?.value)
        }
        // onBlur={() => console.log(value)}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
