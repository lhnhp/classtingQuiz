import {Cookies} from 'react-cookie'


export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);


//쿠키
const cookies = new Cookies()

export const setCookie = (name: string,value: any, option?: any)=>{
	return cookies.set(name, value, { ...option})
}
export const getCookie = (name: string)=>{
	return cookies.get(name)
}
export const getAll = () =>{
    return cookies.getAll()
}
export const removeCookie = (name: string)=>{
    return cookies.remove(name)
}