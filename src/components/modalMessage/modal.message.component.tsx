import React, { ReactElement } from "react";

const ModalMessageComponent: React.FC<{title: string}> = ({ title }: { title: string }): ReactElement => {
    return (
        <span style={{color: "gray"}}>{title}</span>
    );
};

export default ModalMessageComponent;