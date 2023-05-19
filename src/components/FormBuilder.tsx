import { ReactNode } from "react";

type FormBuilderProps = {
  title: string;
  children: ReactNode;
};

const FormBuilder = ({ title, children }: FormBuilderProps) => {
  return (
    <div className="form-group w-full p-5 flex flex-col items-center justify-center gap-2">
      <h2 className="text-xl mb-5 text-gray-700 font-bold tracking-[1px] ">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default FormBuilder;
