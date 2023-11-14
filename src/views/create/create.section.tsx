import React, { ReactElement } from "react";
import MenuComponent from "../../components/menu/menu.component";
import HeaderComponent from "../../components/header/header.component";
import AnnouncementComponent from "../../components/announcement/announcement.component";
import FormComponent from "../../components/form/form.component";
import InformationComponent from "../../components/information/information.component";
import { FieldValues, useForm } from "react-hook-form";
import ButtonComponent from "../../components/button/button.component";
import FieldComponent from "../../components/field/field.component";
import { functionModelStruct } from "../../models/function.model";
import { UsersDTOClass } from "../../dto/users.dto";
import ContainerComponent from "../../components/container/container.component";
import { accountModelStruct } from "../../models/account.model";
import { AccountsDTOClass } from "../../dto/accounts.dto";
import { AxiosResponse } from "axios";
import { AccountsUtilClass } from "../../utils/accounts.util";

const CreateSection: React.FC = (): ReactElement => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onEventCreateUser: functionModelStruct<FieldValues, Promise<void>> = async (field?: FieldValues): Promise<void> => {
        if (!field) {
            return;
        }

        field["estadoCuenta"] = "ACTIVA";

        const response: AxiosResponse<number> = await UsersDTOClass.createUser<FieldValues, AxiosResponse<number>>(field);

        if (!response) {
            return;
        }

        const id: number = response.data as number;

        const account: accountModelStruct = {
            numeroCuenta: AccountsUtilClass.accountNumber(),
            saldo: AccountsUtilClass.accountMoney(),
            tipoCuenta: "AHORRO",
            estadoCuenta: "ACTIVA",
            cliente: id
        };

        await AccountsDTOClass.createAccount<accountModelStruct>(account);
    };

    return (
        <ContainerComponent>
            <MenuComponent/>

            <div className="class_section_body_container">
                <HeaderComponent/>

                <AnnouncementComponent message="Panel / Crear usuario"/>
                <br/>
                <AnnouncementComponent message="Bienvenido a la sección crear, aquí podrás crear un usuario."/>

                <InformationComponent width="var(--body-max-width)" title="Crear usuario">
                    <FormComponent width={600} onSubmit={handleSubmit(onEventCreateUser)}>
                        <FieldComponent
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            required={true}
                            minLengthChar={2}
                            maxLengthChar={30}
                            error={errors.nombre}
                            register={register}
                        />

                        <FieldComponent
                            type="text"
                            name="apellido"
                            placeholder="Apellido"
                            required={true}
                            minLengthChar={2}
                            maxLengthChar={30}
                            error={errors.apellido}
                            register={register}
                        />

                        <FieldComponent
                            type="text"
                            name="dni"
                            placeholder="DNI"
                            required={true}
                            minLengthChar={2}
                            maxLengthChar={30}
                            error={errors.dni}
                            register={register}
                        />

                        <FieldComponent
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            required={true}
                            minLengthChar={2}
                            maxLengthChar={30}
                            error={errors.email}
                            register={register}
                        />

                        <FieldComponent
                            type="text"
                            name="telefono"
                            placeholder="Teléfono"
                            required={true}
                            minLengthChar={2}
                            maxLengthChar={30}
                            error={errors.telefono}
                            register={register}
                        />

                        <br/>

                        <ButtonComponent 
                            title="Crear" 
                            variant="primary"
                        />
                    </FormComponent>
                </InformationComponent>
            </div>
        </ContainerComponent>
    );
};

export default CreateSection;