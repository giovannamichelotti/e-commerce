export const obtenerProductos = async () => {
    const response = await fetch(
        '/data.json',
        {
            method: "GET"
        }
    )
return response.json ()
/* console.log('Data productos', data) */
}