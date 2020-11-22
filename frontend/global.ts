import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { createContext } from "react";
import { CreatePlan } from "./molecules/formPlan";

export const MyContext = createContext<any>({});
export const DEPORTISTA_KEY = '@Store:deportista';
export const GYM_KEY = '@Store:gym';
export const PRIMARY_COLOR = "#F5851B"
export function NoDisponibleMsj(articulo:string){
  return `No se han encuentrado ${articulo} disponibles`
}
export const PlanNullable: CreatePlan = {
    periodo: 0,
    precio: 0,
    cantidad: 0,
    descuento:null,
    nombre: '',
    descripcion: '',
  };
