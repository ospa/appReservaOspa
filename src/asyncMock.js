const items = [
{
    id: 1,
    nombre: "empanada",
    categoria: "comidas",
    precio: 5000,
    stock: 20

},
{
    id: 2,
    nombre: "tequeños",
    categoria: "comidas",
    precio: 9000,
    stock: 100

}

]

const err = "Algo falló"

export const getproducts = () =>{
    return new Promise((resolve,reject) =>{
            setTimeout( ()=>{
                    if (true){
                        reject ("falló")}
                    else{
                        resolve (items)}
            },1000 )
    })

}