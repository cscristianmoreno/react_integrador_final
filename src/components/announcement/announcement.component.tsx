import React, { ReactElement } from "react";

import "./announcement.component.css";
import IconComponent from "../icon/icon.component";

const AnnouncementComponent: React.FC<{ message: string }> = ({ message }: { message: string }): ReactElement => {
    return (
        <div className="class_section_announcement_container class_box_shadow">
            <IconComponent icon="bell"/>
            <span>{message}</span>
        </div>
    );
};

export default AnnouncementComponent;