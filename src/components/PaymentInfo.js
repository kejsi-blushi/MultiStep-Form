// const PaymentInfo = ({ form }) => {
//   const {
//     register,
//     formState: { errors },
//   } = form;

//   return (
//     <div className="form-step">
//       <h2>Payment Information</h2>
//       <label>Credit Card Number:</label>
//       <input
//         {...register("creditCardNumber", {
//           required: "Credit Card Number is required",
//           pattern: { value: /^\d{16}$/, message: "Invalid credit card number" },
//         })}
//       />
//       {errors.creditCardNumber && (
//         <p className="error-message">{errors.creditCardNumber.message}</p>
//       )}

//       <label>Expiry Date:</label>
//       <input
//         {...register("expiryDate", {
//           required: "Expiry Date is required",
//           pattern: {
//             value: /^(0[1-9]|1[0-2])\/\d{2}$/,
//             message: "Invalid expiry date",
//           },
//         })}
//       />
//       {errors.expiryDate && (
//         <p className="error-message">{errors.expiryDate.message}</p>
//       )}

//       <label>CVV:</label>
//       <input
//         {...register("cvv", {
//           required: "CVV is required",
//           pattern: { value: /^\d{3}$/, message: "Invalid CVV" },
//         })}
//       />
//       {errors.cvv && <p className="error-message">{errors.cvv.message}</p>}
//     </div>
//   );
// };
// export default PaymentInfo;

// import React from "react";
// import { TextField } from "@mui/material";
// import CustomCreditCardInput from "./CustomCreditCardInput";
// const PaymentInfo = ({ form }) => {
//   const {
//     register,
//     formState: { errors },
//   } = form;

//   return (
//     <div className="form-step">
//       <h2>Payment Information</h2>

//       <CustomCreditCardInput register={register} errors={errors} />

//       <br />
//       {/* <CustomDatePicker register={register} errors={errors} /> */}
//       <TextField
//         id="expiryDate"
//         label="Expiry Date"
//         variant="standard"
//         {...register("expiryDate", {
//           required: "Expiry Date is required",
//           pattern: {
//             value: /^(0[1-9]|1[0-2])\/\d{2}$/,
//             message: "Invalid expiry date",
//           },
//         })}
//         error={!!errors.expiryDate}
//         helperText={errors.expiryDate ? errors.expiryDate.message : ""}
//         sx={{ width: "35%" }}
//       />

//       <br />

//       <TextField
//         id="cvv"
//         label="CVV"
//         variant="standard"
//         {...register("cvv", {
//           required: "CVV is required",
//           pattern: { value: /^\d{3}$/, message: "Invalid CVV" },
//         })}
//         error={!!errors.cvv}
//         helperText={errors.cvv ? errors.cvv.message : ""}
//         sx={{ width: "30%" }}
//       />
//     </div>
//   );
// };

// export default PaymentInfo;

import React, { useEffect } from "react";
import CustomCreditCardInput from "./CustomCreditCardInput";
import CustomExpiry from "./CustomExpiry";
import { TextField } from "@mui/material";

const PaymentInfo = ({ form }) => {
  const { register, setValue, formState: { errors } } = form;

  useEffect(() => {

    const storedCreditCardNumber = localStorage.getItem("creditCardNumber");
    const storedExpiryDate = localStorage.getItem("expiryDate");
    const storedCVV = localStorage.getItem("cvv");

    setValue("creditCardNumber", storedCreditCardNumber || "");
    setValue("expiryDate", storedExpiryDate || "");
    setValue("cvv", storedCVV || "");
  }, [setValue]);

  return (
    <div className="form-step">
      <h2>Payment Information</h2>

      <CustomCreditCardInput register={register} errors={errors} />
      <br />
      <CustomExpiry register={register} errors={errors} />
      <br />

      <TextField
        id="cvv"
        label="CVV"
        variant="standard"
        {...register("cvv", {
          required: "CVV is required",
          pattern: { value: /^\d{3}$/, message: "Invalid CVV" },
        })}
        error={!!errors.cvv}
        helperText={errors.cvv ? errors.cvv.message : ""}
        sx={{ width: "35%" }}
      />


    </div>
  );
};

export default PaymentInfo;
