import React, { ForwardedRef, ReactElement, forwardRef } from "react";

import "./form.component.css";
import { formModelStruct } from "../../models/form.model";

// eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
const FormComponent: React.ForwardRefExoticComponent<React.PropsWithoutRef<formModelStruct> & React.RefAttributes<HTMLFormElement>> = forwardRef(({ onSubmit, children, width, height }: formModelStruct, ref: ForwardedRef<HTMLFormElement>): ReactElement => {

    return (
        <form ref={ref} style={{width: width, height: height}} onSubmit={onSubmit} className="class_section_form_container">
            {children}
        </form>
    );
});

export default FormComponent;