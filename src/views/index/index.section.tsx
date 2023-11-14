/* eslint-disable prefer-const */
import React, { ReactElement, useEffect, useState } from "react";
import MenuComponent from "../../components/menu/menu.component";
import HeaderComponent from "../../components/header/header.component";
import AnnouncementComponent from "../../components/announcement/announcement.component";
import InformationComponent from "../../components/information/information.component";
import ContainerComponent from "../../components/container/container.component";
import FormComponent from "../../components/form/form.component";
import FieldComponent from "../../components/field/field.component";
import { FieldValues, useForm } from "react-hook-form";
import { functionModelStruct } from "../../models/function.model";
import ButtonComponent from "../../components/button/button.component";
import { UsersDTOClass } from "../../dto/users.dto";
import { AxiosResponse } from "axios";
import { userModelStruct } from "../../models/user.model";
import { accountModelStruct } from "../../models/account.model";
import { AccountsDTOClass } from "../../dto/accounts.dto";

import "./index.section.css";
import CreditCardComponent from "../../components/creditCard/creditcard.component";
import TableComponent from "../../components/table/table.component";
import IconComponent from "../../components/icon/icon.component";
import AvatarComponent from "../../components/avatar/avatar.component";
import { avatar } from "../../utils/avatar.util";
import { useGlobalContextProvider } from "../../global/state.global";

const IndexSection: React.FC = (): ReactElement => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { accountData, setAccountData, userData, setUserData } = useGlobalContextProvider();

    useEffect(() => {
        if (!userData) {
            return;
        }

        const getAccount: functionModelStruct<void, Promise<void>> = async (): Promise<void> => {
            const response: AxiosResponse<accountModelStruct> = await AccountsDTOClass.getAccountById<number | undefined, AxiosResponse<accountModelStruct>>(userData.id);

            if (!response.data) {
                return;
            }
            
            setAccountData(response.data);
        };

        getAccount();
    }, [userData]);

    const onFormLogin: functionModelStruct<FieldValues, void> = async (field?: FieldValues): Promise<void> => {
        if (!field) {
            return;
        }

        let response: AxiosResponse<userModelStruct>;
        response = await UsersDTOClass.findUserByEmail<FieldValues, AxiosResponse<userModelStruct>>(field);
        
        if (!response.data) {
            return;
        }

        setUserData(response.data);
    };

    if (!userData) {
        return (
            <ContainerComponent>
                <MenuComponent/>
    
                <div className="class_section_body_container">
                    <HeaderComponent/>
    
                    <AnnouncementComponent message="Panel / Inicio"/>
                    <br/>
                    <AnnouncementComponent message="Bienvenido a la sección inicio, aquí encontrarás todos tu información relacionada a tu cuenta bancaria."/>
    
                    <InformationComponent width="var(--body-max-width)" title="Inicia sesión con tu correo eletrónico y tu DNI">
                        <FormComponent width={450} onSubmit={handleSubmit(onFormLogin)}>
                            <FieldComponent
                                type="email"
                                name="email"
                                placeholder="Ingresa tu correo electrónico"
                                minLengthChar={2}
                                maxLengthChar={30}
                                register={register}
                                error={errors.email}
                                required={true}
                            />

                            <FieldComponent
                                type="password"
                                name="dni"
                                placeholder="Ingresa tu DNI"
                                minLengthChar={2}
                                maxLengthChar={30}
                                register={register}
                                error={errors.dni}
                                required={true}
                            />

                            <ButtonComponent variant="primary" title="Ingresar"/>
                        </FormComponent>
                    </InformationComponent>
                </div>
            </ContainerComponent>
        );
    }

    return (
        <ContainerComponent>
            <MenuComponent/>

            <div className="class_section_body_container">
                <HeaderComponent/>

                <AnnouncementComponent message="Panel / Inicio"/>
                <br/>
                <AnnouncementComponent message="Bienvenido a la sección inicio, aquí encontrarás todos tu información relacionada a tu cuenta bancaria."/>

                <InformationComponent width="var(--body-max-width)">
                    <div className="class_section_index_container">
                        <div className="class_section_index_information_container">
                            <br/>

                            <h1>¡Hola de nuevo, {userData?.nombre}</h1>
                            <small style={{color: "gray"}}>Disfruta de tu estadía</small>
                            
                            <br/>
                            <br/>

                            <CreditCardComponent />

                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <h1>Tus movimientos</h1>
                            <small style={{color: "gray"}}>Tus movimientos incluye ingreso de dinero, retiro y transferencias</small>

                            <br/>
                            <br/>

                            <h4>Lista de movimientos</h4>

                            <br/>

                            <TableComponent rows={[
                                "#", 
                                "Tipo",
                                "Importe",
                                "Fecha",
                                "Descripción",
                            ]}
                                width={500}
                            >
                                <tr>
                                    <td>1</td>
                                    <td>Transferencia</td>
                                    <td>$3503</td>
                                    <td>{new Date().toLocaleDateString()}</td>
                                    <td><ButtonComponent variant="accent2" title="Detalles"/></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ingreso</td>
                                    <td>$30504</td>
                                    <td>{new Date().toLocaleDateString()}</td>
                                    <td><ButtonComponent variant="accent2" title="Detalles"/></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Retiro</td>
                                    <td>$40302</td>
                                    <td>{new Date().toLocaleDateString()}</td>
                                    <td><ButtonComponent variant="accent2" title="Detalles"/></td>
                                </tr>
                            </TableComponent>
                        </div>

                        <div className="class_section_index_information_container">
                            <br/>
                            <AvatarComponent avatar={avatar} size="xl"/>
                            {/* <small style={{color: "gray"}}>Tus movimientos incluye ingreso de dinero, retiro y transferencias</small> */}
                            
                            <br/>
                            <br/>

                            <ul>
                                <li><IconComponent icon="reply"/>Ingresar dinero</li>
                                <li><IconComponent icon="share"/>Retirar dinero</li>
                                <li><IconComponent icon="hand-holding-usd"/>Transferir dinero</li>
                                <li><IconComponent icon="user-slash"/>Dar de baja mi cuenta</li>
                            </ul>
                        </div>
                    </div>
                </InformationComponent>
            </div>
        </ContainerComponent>
    );
};

export default IndexSection;