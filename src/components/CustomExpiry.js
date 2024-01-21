import React from "react";
import { TextField } from "@mui/material";
import InputMask from "react-input-mask";

const CustomExpiry = ({ register, errors }) => {
  return (
    <div>
      <InputMask
        mask="99/99"
        maskChar=""
        {...register("expiryDate", {
          required: "Expiry Date is required",
          pattern: {
            value: /^(0[1-9]|1[0-2])\/\d{2}$/,
            message: "Invalid expiry date",
          },
        })}
      >
        {(inputProps) => (
          <TextField
            id="expiryDate"
            label="Expiry Date"
            variant="standard"
            error={!!errors.expiryDate}
            helperText={errors.expiryDate ? errors.expiryDate.message : ""}
            sx={{ width: "100%" }}
            {...inputProps}
          />
        )}
      </InputMask>
    </div>
  );
};

export default CustomExpiry;
