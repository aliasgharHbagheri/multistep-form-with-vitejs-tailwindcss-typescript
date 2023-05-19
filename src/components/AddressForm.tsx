import FormBuilder from "./FormBuilder";

type AddressData = {
  state: string;
  city: string;
  street: string;
  plaque: string;
};

type AddressFormProps = AddressData & {
  updateFields: (field: Partial<AddressData>) => void;
};

const AddressForm = ({
  state,
  city,
  street,
  plaque,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormBuilder title="Address Details">
      <div className="w-full p-3 flex flex-col md:flex-row md:items-center md:justify-center gap-2">
        <label className="md:w-3/12">State : </label>
        <input
          value={state}
          onChange={(e) => updateFields({ state: e.target.value })}
          type="text"
          className="w-full border rounded-lg py-2 px-4 outline-none ring-blue-500 focus:ring-1 "
          required
        />
      </div>
      <div className="w-full p-3 flex flex-col md:flex-row md:items-center md:justify-center gap-2">
        <label className="md:w-3/12">City : </label>
        <input
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
          type="text"
          className="w-full border rounded-lg py-2 px-4 outline-none ring-blue-500 focus:ring-1 "
          required
        />
      </div>
      <div className="w-full p-3 flex flex-col md:flex-row md:items-center md:justify-center gap-2">
        <label className="md:w-3/12">Street : </label>
        <input
          value={street}
          onChange={(e) => updateFields({ street: e.target.value })}
          type="text"
          className="w-full border rounded-lg py-2 px-4 outline-none ring-blue-500 focus:ring-1 "
          required
        />
      </div>
      <div className="w-full p-3 flex flex-col md:flex-row md:items-center md:justify-center gap-2">
        <label className="md:w-3/12">Plaque : </label>
        <input
          value={plaque}
          onChange={(e) => updateFields({ plaque: e.target.value })}
          type="number"
          className="w-full border rounded-lg py-2 px-4 outline-none ring-blue-500 focus:ring-1 "
          required
        />
      </div>
    </FormBuilder>
  );
};

export default AddressForm;
