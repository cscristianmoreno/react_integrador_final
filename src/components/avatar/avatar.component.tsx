import React, { ReactElement } from "react";

import "./avatar.component.css";

const AvatarComponent: React.FC<{ avatar: string, size: string }> = ({ avatar, size }: { avatar: string, size: string }): ReactElement => {
    
    return <img className={"class_section_avatar_container " + size} src={avatar}/>;
};

export default AvatarComponent;