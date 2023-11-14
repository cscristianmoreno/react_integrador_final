import React from "react";
import { ReactElement } from "react";
import "./header.component.css";
import IconComponent from "../icon/icon.component";

const HeaderComponent: React.FC = (): ReactElement => {
    return (
        <div className="class_section_header_container">
            <IconComponent icon="bell"/>
        </div>
    );  
};

export default HeaderComponent;