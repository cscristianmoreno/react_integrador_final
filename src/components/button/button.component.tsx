import React, { ReactElement } from "react";

import "./button.component.css";
import { buttonModelStruct } from "../../models/button.model";

const ButtonComponent: React.FC<buttonModelStruct> = ({ title, variant, onClick }: buttonModelStruct): ReactElement => {

    return (
        <button onClick={onClick} className={"class_button " + variant}>{title}</button>
    );
};

export default ButtonComponent;