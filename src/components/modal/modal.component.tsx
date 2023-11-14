import React, { ReactElement } from "react";

import "./modal.component.css";
import { useGlobalContextProvider } from "../../global/state.global";
import { functionModelStruct } from "../../models/function.model";
import ButtonComponent from "../button/button.component";
import { modalModelStruct } from "../../models/modal.model";
import IconComponent from "../icon/icon.component";

const ModalComponent: React.FC<modalModelStruct> = ({  display, children, action, buttonVariant }: modalModelStruct)
    : ReactElement => {

    const { modal, setModal } = useGlobalContextProvider();

    const onEventClickModal: functionModelStruct<void, void> = (): void => {
        if (!action) {
            return;
        }
        
        action();
    };
    
    const onCloseModal: functionModelStruct<void, void> = (): void => {
        setModal(!(modal));
    };
    
    return (
        <div style={{display: (display) ? "flex" : "none"}} className="class_section_modal_container">
            <div className={"class_section_modal class_box_shadow"}>
                <IconComponent  onClick={(): void => onCloseModal()} icon="times" className="class_section_modal_button_exit"/>

                <div>
                    {children}
                </div>
                
                <ButtonComponent onClick={(): void => onEventClickModal()} title="Sí" variant={buttonVariant}/>
            </div>
        </div>
    );
};

export default ModalComponent;