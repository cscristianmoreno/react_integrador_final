import React, { CSSProperties, ReactElement } from "react";

import "./container.component.css";

const ContainerComponent: React.FC<{ children: React.ReactNode, styles?: CSSProperties}> = ({ children, styles }: { children: React.ReactNode, styles?: CSSProperties }): ReactElement => {
    return (
        <div style={styles} className="class_section_main_container">
            {children}
        </div>
    );
};

export default ContainerComponent;