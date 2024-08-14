import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {program,studentname,studentnumber,cnic,guardianname,guardiannumber,intermediatemarks,metricmarks,date,time} = await req.json()
        const data ={program,studentname,studentnumber,cnic,guardianname,guardiannumber,intermediatemarks,metricmarks,date,time}
        const response = await axios.post('https://script.google.com/macros/s/AKfycbzgRw8uCbmSc2G_YjdcU9ABxw5cZAjIUzwjWP9NOICGRjmB1fQkpgVO49YdIgGDDbCs/exec?action=addUser',data );
        console.log(response.data)
        return NextResponse.json({
            message:"user created successfully",
            success:true,
            status:200,
            data: response.data,
        })
    } catch (error) {
        console.log("Error:",error)
        return NextResponse.json({error:error.message},{status:500})
    }
}