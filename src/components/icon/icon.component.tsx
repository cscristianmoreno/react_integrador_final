import React, { ReactElement } from "react";
import { iconModelStruct } from "../../models/icon.model";

const IconComponent: React.FC<iconModelStruct> = ({ icon, className, onClick }: iconModelStruct): ReactElement => {
    return <i onClick={onClick} className={`fas fa-${icon} ${className}`}/>;
};

export default IconComponent;