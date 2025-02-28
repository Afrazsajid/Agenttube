import React from 'react'
import MySchematicEmbed from './MySchematicEmbed'
import { getTempAccessToken } from '@/actions/getTempAccessToken';

async function SchematicComponenet({componentId}:{

    componentId:string;
}) {
  const accessToken = await getTempAccessToken( )


  if(!componentId){
    throw new Error("Componenet ID is Required | SchematicComponent.tsx")
  }

  if (!accessToken){
    throw new Error ("Failed to get acces token |SchematicComponent.tsx")

  }

  
  return (
   <MySchematicEmbed accessToken={accessToken} componentId={componentId}  />
  )
}

export default SchematicComponenet