import FormBuilder from "./FormBuilder";

type AccountData = {
  email: string;
  password: string;
};
type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <FormBuilder title="Account Form">
      <div className="w-full p-3 flex flex-col md:flex-row md:items-center md:justify-center gap-2">
        <label className="md:w-3/12">Email : </label>
        <input
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          type="text"
          className="w-full border rounded-lg py-2 px-4 outline-none ring-blue-500 focus:ring-1 "
          required
        />
      </div>
      <div className="w-full p-3 flex flex-col md:flex-row md:items-center md:justify-center gap-2">
        <label className="md:w-3/12">Password : </label>
        <input
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
          type="password"
          className="w-full border rounded-lg py-2 px-4 outline-none ring-blue-500 focus:ring-1 "
          required
        />
      </div>
    </FormBuilder>
  );
};

export default AccountForm;
