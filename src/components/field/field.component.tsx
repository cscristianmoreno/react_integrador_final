/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from "react";

import "./field.component.css";
import ValidationComponent from "../validation/validation.component";
import { fieldModelStruct } from "../../models/field.model";


const FieldComponent: React.FC<fieldModelStruct> = ({ type, name, placeholder, required, minLengthChar, maxLengthChar, register, error }: fieldModelStruct): ReactElement => {

    return (
        <div className="class_section_field_container">
            <input
                type={type}
                placeholder={placeholder}

                {...register(name, { 
                    required: {
                        value: required,
                        message: "Este campo es requerido"
                    },
                    minLength: {
                        value: minLengthChar,
                        message: `El campo requiere al menos ${minLengthChar} caráctere(s)`
                    }, 
                    maxLength: {
                        value: maxLengthChar,
                        message:`El campo no puede superar los ${maxLengthChar} caráctere(s)`
                    }
                })}
            />


            <ValidationComponent error={error}/>
        </div>
    );
};

export default FieldComponent;