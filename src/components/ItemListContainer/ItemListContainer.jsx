import React from 'react'
import react, {useState, useEffect} from 'react'
import { getproducts } from '../../asyncMock'

const ItemListContainer = (props) => {
  return (
    <div>{ props.greeting}</div>
  )
}
const [productos, setproductos] = useState ([])

useEffect (()=>{
  getproducts().them(res=>setproductos(res))
}, [])

export default ItemListContainer