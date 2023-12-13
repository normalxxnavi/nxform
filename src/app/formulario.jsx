'use client'
import { SubmitButton } from '@/app/submitButton'
import { handle } from '@/app/actions'
import { toast } from 'react-hot-toast';


export function Formulario() {
    async function wrapper (data) {
        const {type, message} = await handle(data);
        if (type == 'success') toast.success(message)
        if (type == 'error') toast.error(message)
    }

    return (
        <form action={wrapper}>
            <input type="text" required name="nombre" placeholder="Introduce tu nombre" />
            <input type="text" required name="apellidos" placeholder="Introduce tus apellidos" />
            <input type="number" required name="edad" placeholder="Introduzca su edad" />
            <input type="tel" required name="telefono" placeholder="Introduce tu telefono" />
            <input type="email" required name="email" placeholder="Introduce tu correo electronico" />
            <input type="password" required name="password" placeholder="Introduce tu contraseña" />
            <select required name="aficiones">
                <option value="Programador">Programador</option>
                <option value="Administrador de Red">Administrador de Red</option>
                <option value="Otro">Otro</option>
            </select>
            <label>DNI</label>
            <input type="radio" required name="id" placeholder="DNI" />
            <label>NIF</label>
            <input type="radio" required name="id" placeholder="NIF" />
            <label>Pasaporte</label>
            <input type="radio" required name="id" placeholder="Pasaporte" />
            <label>Hombre</label>
            <input type="checkbox" name="sexo" placeholder="Hombre" />
            <label>Mujer</label>
            <input type="checkbox" name="sexo" placeholder="Mujer" />
            <label>Otro</label>
            <input type="checkbox" name="sexo" placeholder="Otro" />
            <label>Observaciones: </label>
            <input type="textarea" required name="observaciones" placeholder="Observaciones" />
            <label>Fecha de Naciemiento: </label>
            <input type="date" required name="fecha" placeholder="Fecha" />
            <label>Mes: </label>
            <input type="month" required name="mes" placeholder="Mes" />
            <label>Semana: </label>
            <input type="week" required name="semana" placeholder="Semana" />
            <label>Rango: </label>
            <input type="range" required name="rango" placeholder="Rango" />
            <label>Buscar: </label>
            <input type="search" required name="buscar" />
            <input type="url" required name="url" placeholder="Url" />
            <label htmlFor="avatar">
                Selecciona un avatar para enviar al servidor
            </label>
            <input type="file" required name="avatar" accept="image/*" />
            <SubmitButton />
        </form>
    )
}

