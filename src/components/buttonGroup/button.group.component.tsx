import React, { ReactElement } from "react";

import "./button.group.component.css";

const ButtonGroupComponent: React.FC<{separated?: string, children: React.ReactNode}> = ({ separated, children }: { separated?: string, children: React.ReactNode}): ReactElement => {
    return (
        <div style={{gap: ((separated) ? separated : "")}}className="class_button_group_container">
            {children}
        </div>
    );
};

export default ButtonGroupComponent;