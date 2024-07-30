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

export default async function details(request: NextRequest) {
    const detailsform = await request.json()
        const pr = await prisma.info.create({
            data:{...detailsform}
        })
    
        console.log(pr)
}


// read(), write() ,update()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })



