// import React from "react";
// import InputMask from "react-input-mask";

// const CustomCreditCardInput = ({ register, errors }) => {
//   return (
//     <div>
//       <label>Credit Card Number</label>
//       <InputMask
//         mask="9999-9999-9999-9999"
//         maskChar=""
//         {...register("creditCardNumber", {
//           required: "Credit Card Number is required",
//           pattern: {
//             value: /^(\d{4}\s){3}\d{4}$/,
//             message: "Invalid credit card number",
//           },
//         })}
//       >
//         {(inputProps) => <input type="text" {...inputProps} />}
//       </InputMask>
//       {errors.creditCardNumber && (
//         <p className="error-message">{errors.creditCardNumber.message}</p>
//       )}
//     </div>
//   );
// };
// export default CustomCreditCardInput;

import React from "react";
import { TextField } from "@mui/material";
import InputMask from "react-input-mask";

const CustomCreditCardInput = ({ register, errors }) => {
  return (
    <div>
      <InputMask
        mask="9999 9999 9999 9999"
        maskChar=""
        {...register("creditCardNumber", {
          required: "Credit Card Number is required",
          minLength: {
            value: 19,
            message: "Credit Card Number must have 16 digits",
          },
        })}
      >
        {(inputProps) => (
          <TextField
            id="creditCardNumber"
            label="Credit Card Number"
            variant="standard"
            error={!!errors.creditCardNumber}
            helperText={
              errors.creditCardNumber ? errors.creditCardNumber.message : ""
            }
            sx={{ width: "100%" }}
            {...inputProps}
          />
        )}
      </InputMask>
    </div>
  );
};

export default CustomCreditCardInput;
