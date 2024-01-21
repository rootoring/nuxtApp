export interface UserType{
  customer_id:string,
  server_name:string ,
  server_type: serverTypes
}      

export type serverTypes = "dedicated" | "vds" | "hosting"