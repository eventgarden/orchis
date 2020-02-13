import { prisma } from './prisma'

// A `main` function so that we can use async/await
async function main() {
  const newUser = await prisma.createUser({ name: 'Kieran' })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)
}

main().catch(e => console.error(e))