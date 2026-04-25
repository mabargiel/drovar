import { type SchemaTypeDefinition } from "sanity";
import { localizedText } from "./localizedText";
import { projektSketch } from "./projektSketch";
import { realization } from "./realization";

export const schemaTypes: SchemaTypeDefinition[] = [
  localizedText,
  realization,
  projektSketch,
];
