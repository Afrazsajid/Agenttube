"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapper from "./SchematicWrapper";
import ConvexClientProvider from "./ConvexClientProvider";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schematicPublicKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;
  if (!schematicPublicKey) {
    throw new Error(` " NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY"  is  missing`);
  }
  return (
    <ConvexClientProvider>
      <SchematicProvider publishableKey={schematicPublicKey}>
        <SchematicWrapper>
       
        {children}
        </SchematicWrapper>
      </SchematicProvider>
    </ConvexClientProvider>
  );
}
