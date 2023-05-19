import { FormEvent, useState } from "react";
import AccountForm from "./components/AccountForm";
import AddressForm from "./components/AddressForm";
import UserForm from "./components/UserForm";
import useMultiStepsForm from "./hooks/useMultiStepsForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  state: string;
  city: string;
  street: string;
  plaque: string;
  email: string;
  password: string;
};

const INITIAL_FORM_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  state: "",
  city: "",
  street: "",
  plaque: "",
  email: "",
  password: "",
};

const App = () => {
  const [dataForm, setDataForm] = useState(INITIAL_FORM_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setDataForm((prev) => {
      return { ...prev, ...fields };
    });
  };

  const {
    currentStepIndex,
    steps,
    step,
    goTo,
    next,
    back,
    isFirstStep,
    isLastStep,
  } = useMultiStepsForm([
    <UserForm {...dataForm} updateFields={updateFields} />,
    <AddressForm {...dataForm} updateFields={updateFields} />,
    <AccountForm {...dataForm} updateFields={updateFields} />,
  ]);

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successfully Account Creation!");
  };

  return (
    <div className="w-full h-screen bg-blue-600 flex items-center justify-center p-5">
      <form
        onSubmit={submitFormHandler}
        className="w-full md:w-6/12 p-4 rounded-2xl bg-white flex flex-col items-center justify-center"
      >
        <div className="w-full p-3 flex items-center justify-end gap-5">
          <span className="bg-white text-blue-500 border font-bold text-lg px-4 py-2 rounded-full text-center">
            {currentStepIndex + 1} / {steps.length}
          </span>
        </div>
        {step}

        <div className="controls px-5 py-3 w-full flex items-center justify-between transition-all">
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="py-3 px-4 outline-none bg-blue-600 text-white rounded-xl tracking-[1px] transition-all"
            >
              Prev
            </button>
          )}

          <button
            type="submit"
            className="py-3 px-4 outline-none bg-blue-600 text-white rounded-xl tracking-[1px] transition-all"
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
