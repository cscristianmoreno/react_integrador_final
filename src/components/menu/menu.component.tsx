import React, { ReactElement } from "react";
import "./menu.component.css";
import { menuModelStruct } from "../../models/menu.model";
import { NavLink } from "react-router-dom";
import AvatarComponent from "../avatar/avatar.component";
import { avatar } from "../../utils/avatar.util";

const MENU_ITEMS: menuModelStruct[] = [
    { item: "Inicio", path: "/", icon: "fa-home" },
    { item: "Lista de clientes", path: "/list", icon: "fa-users" },
    { item: "Crear un usuario", path: "/create", icon: "fa-user-plus" },
    { item: "Cerrar sesión", path: "/logout", icon: "fa-sign-out-alt" },
];

const MenuComponent: React.FC = (): ReactElement => {

    return (
        <>
            <nav className="class_section_menu_container">
                <AvatarComponent avatar={avatar} size="md"/>

                <div className="class_secion_menu_items_container">
                {
                    MENU_ITEMS.map((str: menuModelStruct, num: number) => {
                        return (
                            <NavLink key={num} to={str.path} className={({ isActive }: { isActive: boolean}): string => (isActive) ? "class_section_menu_item_color" : ""}>
                                <i className={`fas ${str.icon}`}/>
                                {str.item}
                            </NavLink> 
                        );
                    })
                }
                </div>
            </nav>
        </>
    );
};

export default MenuComponent;