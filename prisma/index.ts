import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

// async function read() {
//     const allUsers = await prisma.user.findMany()
//         console.log(allUsers)

// }

//  async function Write() {
//     const pr = await prisma.user.create({
//         data: {
//             name: 'Alice',
//             email: 'hello@gmail.com'
//         },
//     })

//     console.log(pr)
// }

// async function update() {
//     const user = await prisma.user.update({
//         where: { id: '1' },
//         data: { name: 'Bob' },
//     })
//     console.log(user)
// }


export async function Details(request: NextRequest) {
    const detailsform = await request.json();
    const datafield = detailsform.newdata;
        const pr = await prisma.info.create({
            data:{...datafield}
        })
    
        console.log(pr)
    
    return NextResponse.json({ message: 'Hello - POST' });
}

