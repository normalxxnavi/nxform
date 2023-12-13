'use server'

import fs from 'node:fs'

export async function handle(formData) {
    const nombre = formData.get('nombre')
    const apellidos = formData.get('apellidos')
    const avatar = formData.get('avatar')
    const edad = formData.get('edad')
    const telefono = formData.get('telefono')
    const email = formData.get('email')
    const password = formData.get('password')
    const aficiones = formData.get('aficiones')
    const id = formData.get('id')
    const sexo = formData.get('sexo')
    const observaciones = formData.get('observaciones')
    const fecha = formData.get('fecha')
    const mes = formData.get('mes')
    const semana = formData.get('semana')
    const rango = formData.get('rango')
    const buscar = formData.get('buscar')
    const url = formData.get('url')
    
    const buffer = await avatar.arrayBuffer()
    const bytes = new Uint8Array(buffer)

    console.group("Formulario Data");
    console.log("Nombre:", nombre);
    console.log("Apellidos:", apellidos);
    console.log("Avatar:", avatar);
    console.log("Edad:", edad);
    console.log("Teléfono:", telefono);
    console.log("Email:", email);
    console.log("Contraseña:", password);
    console.log("Aficiones:", aficiones);
    console.log("Identificación:", id);
    console.log("Sexo:", sexo);
    console.log("Observaciones:", observaciones);
    console.log("Fecha de Nacimiento:", fecha);
    console.log("Mes:", mes);
    console.log("Semana:", semana);
    console.log("Rango:", rango);
    console.log("Buscar:", buscar);
    console.log("URL:", url);
    console.groupEnd();

    await new Promise((resolve) => setTimeout( resolve, 1000))

    try {
        fs.writeFileSync('public/' + avatar.name, bytes, 'binary')
        return { type: 'success', message: 'Datos guardados'}
    } catch (error) {
        return { type: 'error', message: error.message}
    }

}
