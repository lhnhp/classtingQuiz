import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { getCookie } from "../utils";

//쿠키서칭용
let i = 1;
//차시
let j = 1;
let num = getCookie("num");


let data = [
    {
        name: "예시",
        score: 2,
        total: 3
    },
] as any;


const makeScore = (name: string, score:number, total: number) => {
    data.push({name,score,total});
}


for( i ; i < num ; i+=2 ){

    makeScore((j.toString()+"번째 시도"),parseInt(getCookie(i.toString())),parseInt(getCookie("total")));
    j += 1;
};




export default class Example extends PureComponent {

    render() {
        return (
            <BarChart width={730} height={250} data={data} barSize={50}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis  />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#8884d8" />
            <Bar dataKey="total" fill="#FF0F0F" />
            </BarChart>
        );
    }
}