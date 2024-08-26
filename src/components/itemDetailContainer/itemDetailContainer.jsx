
import React, {useEffect, useState} from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { db } from '../../services/firebaseConfig'
import { doc , getDoc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const [producto , setProducto] = useState({})
    const [ loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(()=> {
        setLoading(true)
        const productoRef = doc(db, "productos", id)

        getDoc(productoRef).then(snapshot => {
            const dataProducto = snapshot.data()
            const productoListo = { ...dataProducto, id: snapshot.id}
            setProducto(productoListo)
        })
     
    }, [])



  return (
    <div>
        {
            producto &&
        <ItemDetail producto={producto} />
        }
    </div>
  )
}

