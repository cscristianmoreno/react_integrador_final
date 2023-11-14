import React, { ReactElement } from "react";

const ModalTitleComponent: React.FC<{ title: string }> = ({ title }: { title: string }): ReactElement => {
    return <h3>{title}</h3>;
};

export default ModalTitleComponent;