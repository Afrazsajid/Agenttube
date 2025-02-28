"use client"
import { useUser } from '@clerk/nextjs';
import { useSchematic, useSchematicEvents } from '@schematichq/schematic-react';
import React, { useEffect } from 'react'



function SchematicWrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {

    const {identify }=useSchematicEvents()

    const {user} =useUser()

    useEffect(()=>{
        const userName =user?.username??
        user?.fullName??
        user?.emailAddresses[0].emailAddress??
        user?.id;

        if(user?.id){
            identify({
                // comapny level
                company:{
                    keys:{
                        id :user.id
                    },
                    name: userName,
                },

                // user level key
                keys:{
                    id:user.id,
                   
                },
                name:userName

               

            })
        }

    },[user,identify])

  return (
    <>{children}</>
  )
}

export default SchematicWrapper