import {prisma} from '../src/lib/prisma'

async function seed() {

    await prisma.event.create({
      data:{
        id: '04ecc263-3af3-4aeb-b784-1b1cd2a1db75',
        title: 'Unite Summit',
        slug: 'unite-summit',
        details: 'Um Evento para Devs',
        maximumAttendees: 120,
      }

    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})