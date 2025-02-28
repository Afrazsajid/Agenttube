"use client"
import { SchematicEmbed } from "@schematichq/schematic-components"

const MySchematicEmbed = ({accessToken,componentId}:{
  accessToken:string;
  componentId:string;

}) => {
  // const token = " ... "
  // const componentId = "cmpn_EeedBKhMBHy"

  return (
    <SchematicEmbed accessToken={accessToken} id={componentId}  />
  )
}

export default MySchematicEmbed