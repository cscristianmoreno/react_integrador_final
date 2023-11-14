import React, { ReactElement } from "react";

import "./creditcard.component.css";

const CreditCardComponent: React.FC = (): ReactElement => {
    return (
        <div className="class_section_card_container">
            <h4>VISA</h4>

            <h1>$3520.20</h1>

            <br/>
            {/* <br/> */}

            <h4>4020 3012 3040 2037</h4>

            <br/>

            <div className="class_section_card_information">
                <h5>
                    CLAVE
                    <br/>
                    <small>***</small>
                </h5>

                <h5>
                    EXPIRA
                    <br/>
                    <small>07/25</small>
                </h5>

                <h5>
                    TITULAR
                    <br/>
                    <small>CRISTIAN MORENO</small>
                </h5>
            </div>
        </div>
    );
};

export default CreditCardComponent;