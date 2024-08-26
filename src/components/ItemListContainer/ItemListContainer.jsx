import React from 'react'
import react, {useState, useEffect} from 'react'
import { getproducts } from '../../asyncMock'

const ItemListContainer = (props) => {
  return (
    <div>{ props.greeting}</div>
  )
}
const [ productos , setProductos ] = useState([])
const [ loading , setLoading] = useState(true)
const { cat } = useParams()

useEffect(() => {
  
  if(cat){
    const productosPorCat = query(collection(db, "productos"), where('category', '==', cat)) 
    getDocs(productosPorCat).then(snapshot => {
      const dataProductos =  snapshot.docs.map(doc => {
        const conId = doc.data()
        return {id: doc.id , ...conId }
      })
      setProductos(dataProductos)
    })
  }else{
    const productosRef = collection(db, "productos")
    getDocs(productosRef).then(snapshot => {
      const dataProductos =  snapshot.docs.map(doc => {
        const conId = doc.data()
        return {id: doc.id , ...conId }
      })
      setProductos(dataProductos)
    })
  }
  
  

}, [cat])

export default ItemListContainer