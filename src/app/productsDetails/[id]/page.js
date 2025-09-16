import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function ProductsDetails({ params }) {
    const p = await params;
    const productsCollection = dbConnect(collectionNamesObj.productsCollection);
    const data = await productsCollection.findOne({_id: new ObjectId(p.id)})
  return (
      <div className='mt-40 text-red-500'><p>
          {p.id}</p>
          <p>{JSON.stringify(data)}</p></div>
  )
}
