import React, { ReactElement, RefObject, useEffect, useRef, useState } from "react";
import MenuComponent from "../../components/menu/menu.component";
import HeaderComponent from "../../components/header/header.component";
import AnnouncementComponent from "../../components/announcement/announcement.component";
import { userModelStruct } from "../../models/user.model";
import { functionModelStruct } from "../../models/function.model";
import { AxiosResponse } from "axios";
import InformationComponent from "../../components/information/information.component";
import TableComponent from "../../components/table/table.component";
import ButtonComponent from "../../components/button/button.component";
import ButtonGroupComponent from "../../components/buttonGroup/button.group.component";
import ModalComponent from "../../components/modal/modal.component";
import ModalTitleComponent from "../../components/modalTitle/modal.title.component";
import { useGlobalContextProvider } from "../../global/state.global";
import ModalMessageComponent from "../../components/modalMessage/modal.message.component";
import { UsersDTOClass } from "../../dto/users.dto";
import FormComponent from "../../components/form/form.component";
import { FieldValues, useForm } from "react-hook-form";
import FieldComponent from "../../components/field/field.component";
import ContainerComponent from "../../components/container/container.component";
import { ModalType } from "../../enums/modal.enum";
import AvatarComponent from "../../components/avatar/avatar.component";
import { avatar } from "../../utils/avatar.util";

const ListSection: React.FC = (): ReactElement => {

    const [users, setUsers] = useState<userModelStruct[]>([]);
    const [userId, setUserId] = useState<number | null>();
    const [modalType, setModalType] = useState<ModalType | null>(null);

    const { modal, setModal } = useGlobalContextProvider();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

    useEffect(() => {
        getRequest();
    }, []);

    const getRequest: functionModelStruct<void, Promise<void>> = async (): Promise<void> => {
        const response: AxiosResponse<userModelStruct[]> = await UsersDTOClass.getAllUsers<AxiosResponse<userModelStruct[]>>();

        if (!response.data) {
            return;
        }
        
        setUsers(response.data);
    };

    const onClickModalUpdate: functionModelStruct<number, void> = (userId?: number): void => {
        if (!userId) {
            return;
        }

        setUserId(userId);
        setModalType(ModalType.MODAL_USER_UPDATE);
        setModal(true);
    };

    const onClickModalDelete: functionModelStruct<number, void> = (userId?: number): void => {
        
        if (!userId) {
            return;
        }

        setUserId(userId);
        setModalType(ModalType.MODAL_USER_DELETE);
        setModal(true);
    };
    
    const onEventDeleteUser: functionModelStruct<void, Promise<void>> = async (): Promise<void> => {
        if (!userId) {
            return;
        }

        await UsersDTOClass.deleteUser(userId);
        await getRequest();
    };

    const onEventUpdateUser: functionModelStruct<void, Promise<void>> = async (): Promise<void> => {
        if (!formRef.current) {
            return;
        }

        formRef.current.requestSubmit();
    };

    const onFormUpdateUser: functionModelStruct<FieldValues, Promise<void>> = async (fields?: FieldValues): Promise<void> => {
        if (!fields) {
            return;
        }

        if (!userId) {
            return;
        }

        fields["estadoCuenta"] = "ACTIVA";
        await UsersDTOClass.updateUser(userId, fields);
        await getRequest();
        setModal(false);
    };

    return (
        <ContainerComponent>
            <MenuComponent/>

            <div className="class_section_body_container">
                <HeaderComponent/>

                <AnnouncementComponent message="Panel / Usuarios"/>
                <br/>
                <AnnouncementComponent message="Bienvenido a la sección listas, aquí encontrarás todos los usuarios registrados."/>

                <InformationComponent width="var(--body-max-width)" title="Lista de clientes">
                    <TableComponent rows={[
                        "ID",
                        "Avatar",
                        "Nombre",
                        "DNI",
                        "Email",
                        "Teléfono",
                        "Estado",
                        "Registro",
                        "Acción",
                    ]}>
                    {
                        users.map((str: userModelStruct, key: number) => {
                            return (
                                <tr key={key}>
                                    <td>#{str.id}</td>
                                    <td><AvatarComponent avatar={(str.avatar) ? str.avatar : avatar} size="xsm"/></td>
                                    <td>{str.nombre} {str.apellido}</td>
                                    <td>{str.dni}</td>
                                    <td id="email">{str.email}</td>
                                    <td>{str.telefono}</td>
                                    <td><ButtonComponent variant="accent2" title={str.estadoCuenta}/></td>
                                    <td>{new Date().toLocaleDateString()}</td>
                                    <td>
                                        <ButtonGroupComponent>
                                            <ButtonComponent onClick={(): void => onClickModalUpdate(str.id)} title="Modificar" variant="accent"/>
                                            <ButtonComponent onClick={(): void => onClickModalDelete(str.id)} title="Eliminar" variant="warn"/>
                                        </ButtonGroupComponent>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </TableComponent>

                </InformationComponent>
            </div>

            
            <ModalComponent buttonVariant="warn" display={modalType === ModalType.MODAL_USER_DELETE && modal} action={onEventDeleteUser}>
                <ModalTitleComponent title="Eliminar usuario"/>
                <ModalMessageComponent title="¿Estás seguro de eliminar este usuario?"/>
            </ModalComponent>

            <ModalComponent buttonVariant="primary" display={modalType === ModalType.MODAL_USER_UPDATE && modal} action={onEventUpdateUser}>
                <ModalTitleComponent title="Modificar usuario"/>
                <ModalMessageComponent title="¿Estás seguro de modificar este usuario?"/>

                <FormComponent width={400} ref={formRef} onSubmit={handleSubmit(onFormUpdateUser)}>
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
                </FormComponent>
            </ModalComponent>
        </ContainerComponent>
    );
};

export default ListSection;