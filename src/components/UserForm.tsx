import { FormEvent } from "react";
import FormBuilder from "./FormBuilder";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormBuilder title="User Details">
      <div className="w-full p-3 flex flex-col md:flex-row md:items-center md:justify-center gap-2">
        <label className="md:w-3/12">First Name : </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
          className="w-full border rounded-lg py-2 px-4 outline-none ring-blue-500 focus:ring-1 "
          required
        />
      </div>
      <div className="w-full p-3 flex flex-col md:flex-row md:items-center md:justify-center gap-2">
        <label className="md:w-3/12">Last Name : </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
          className="w-full border rounded-lg py-2 px-4 outline-none ring-blue-500 focus:ring-1 "
          required
        />
      </div>
      <div className="w-full p-3 flex flex-col md:flex-row md:items-center md:justify-center gap-2">
        <label className="md:w-3/12">Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => updateFields({ age: e.target.value })}
          className="w-full border rounded-lg py-2 px-4 outline-none ring-blue-500 focus:ring-1 "
          required
        />
      </div>
    </FormBuilder>
  );
};

export default UserForm;
