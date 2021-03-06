// relation one(user) to many(photo) cacade:trueのサンプル

import "reflect-metadata";
import { createConnection } from "typeorm";
import { Photo } from "./entity/Photo";
import { User } from "./entity/User";

createConnection()
  .then(async (connection) => {
    const photo = new Photo();
    photo.fileName = "testPhoto";

    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    user.photos = [photo];

    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    const photos = await connection.manager.find(Photo);
    console.log("Loaded photos: ", photos);
  })
  .catch((error) => console.log(error));
