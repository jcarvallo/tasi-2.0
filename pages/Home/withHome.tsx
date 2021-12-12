import { useStateValue } from "@contexts";
import { FC, useEffect, useState } from "react";

const withHome = (Component: FC<any>) => (props: any) => {
  let initialState = {
    dni: { value: "", length: { minLength: 7, maxLength: 8 } },
    clave: { value: "", length: { minLength: 4, maxLength: 4 } },
    inputName: "",
    disabled: true,
  };
  const [state, setstate] = useState<any>(initialState);
  // const [ctx, dispatch]: any = useStateValue();

  useEffect(() => {
    const timer = setTimeout(() => setstate(initialState), 10000);
    return () => clearTimeout(timer);
  }, [setstate, state, initialState]);
  
  const actions = {
    actionsKeyboard: {
      inputName: state.inputName,
      disabled: state.disabled,
      handleInput: function (inputValue: any) {
        if (state.inputName) {
          // let newValue = validateMaxLength(
          //   state[this.inputName][1].maxLength,
          //   inputValue,
          //   state[this.inputName][0]
          // );
          let value = state[this.inputName];
          // value[0] = newValue;
          setstate({
            ...state,
            [this.inputName]: value,
            // disabled: validateForm({ ...state }),
          });
        }
      },
      handleDelete: function () {
        if (state.inputName) {
          let value = state[this.inputName];
          let newValue = value[0].substring(value[0].length - 1, 0);
          value[0] = newValue;
          setstate({
            ...state,
            [this.inputName]: value,
            // disabled: validateForm({ ...state }),
          });
        }
      },
      handleContinue: async () => {
        // try {
        //   let auth = { password: state.clave[0], username: state.dni[0] };
        //   let { data } = await authenticationService.authentication(auth);
        //   dispatch({ type: "setUser", user: data.user });
        //   navigate("/operaciones");
        // } catch (e) {
        //   handleError(e);
        // }
      },
    },
    handleFocus: ({ target }: any) => {
      setstate({ ...state, inputName: target.name });
    },
  };
  return <Component {...actions} />;
};

export default withHome;
