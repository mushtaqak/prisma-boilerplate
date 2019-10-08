import { prisma } from "./generated/prisma-client";

// A `main` function so that we can use async/await
async function main() {
  // Create a new user called `Alice`
  // const newUser = await prisma.createUser({ name: "Alice" });
  // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users();
  console.log(allUsers);

  //const user = await prisma.user({ id: '__USER_ID__' })

  // const usersCalledAlice = await prisma.users({
  //   where: {
  //     name: 'Alice',
  //   },
  // })

  // const updatedUser = await prisma.updateUser({
  //   where: { id: '__USER_ID__' },
  //   data: { name: 'Bob' },
  // })

  // const deletedUser = await prisma.deleteUser({ id: '__USER_ID__' })
}

main().catch(e => console.error(e));
