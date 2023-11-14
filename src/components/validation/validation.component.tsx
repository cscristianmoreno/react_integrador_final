/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

const ValidationComponent: React.FC<{ error: FieldError | Merge<FieldError, any> | undefined }> = ({ error }: { error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined }): ReactElement | null => {
    if (!error) {
        return null;
    }

    return <span style={{color: "#c24b4b", fontSize: "12px"}}>{error.message as ReactElement}</span>;
};

export default ValidationComponent;