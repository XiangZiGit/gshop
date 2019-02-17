import ajax from './ajax'

export const reqAddress =(data) =>ajax(`http://api.map.baidu.com/geocoder/v2/`,data,"GET")

export function f() {
  alert("aaa")
}
