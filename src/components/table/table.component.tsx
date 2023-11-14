import React, { ReactElement, ReactNode } from "react";

import "./table.component.css";
import { tableModelStruct } from "../../models/table.model";

const TableComponent: React.FC<tableModelStruct> = ({ rows, children, width, height }: tableModelStruct): ReactElement => {
    
    return (
        <table style={{width: width, height: height}}>
            <thead>
                <tr>
                {
                    rows.map((str: string, key: number) => {
                        return <th key={key}>{str}</th>;
                    })
                }
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
};

export default TableComponent;