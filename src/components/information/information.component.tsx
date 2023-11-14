import React, { ReactElement} from "react";

import "./information.component.css";
import { informationModelStruct } from "../../models/information.model";

const InformationComponent: React.FC<informationModelStruct> = ({ title, children, width, height }: informationModelStruct): ReactElement => {

    return (
        <div style={{width: width, height: height}} className="class_section_information_container class_box_shadow">
            {
                (title) ?
                    <h3>{title}</h3>
                :
                    null
            }
            
            {children}
        </div>
    );
};

export default InformationComponent;