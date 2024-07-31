import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

 export default async function read() {
     const allUsers = await prisma.info.findMany()
        console.log(allUsers)

}


 export async function  update(){
    const pr = await prisma.info.update({
        where : {id: '66aa83c7ebe928e4641d5618', firstname: 'sss'},
        data: {firstname: 'bob'},
    })
    console.log(pr);
    

 }


export async function Details(request: NextRequest) {
    const detailsform = await request.json();
    const datafield = detailsform.newdata;
        const pr =  prisma.info.create({
            data:{...datafield}
        })
    
        console.log(pr)
    
    return NextResponse.json({ message: 'Hello - POST' });
}

