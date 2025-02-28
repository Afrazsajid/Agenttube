"use server"

import { currentUser } from "@clerk/nextjs/server"
import {SchematicClient} from "@schematichq/schematic-typescript-node"

export async function getTempAccessToken() {
    const key= process.env.SCHEMATIC_SECRET_API_KEY
    if (!key) {
        throw new Error("Missing   'SCHEMATIC_SECRET_API_KEY' ")
    }

    const user = await currentUser()
    const client = new SchematicClient({
        apiKey:key
        
    })


        
    if (!user){
        return null
    }
     const response = await client.accesstokens.issueTemporaryAccessToken({
        resourceType:"company",
        lookup:{
            id:user.id
        }
     })

     return response.data.token

    
}