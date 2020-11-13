export default interface ApiResp<T>{
    data?:T,
    message:string,
    errors:[]
}