"use server";

import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  // Get the collection (await if dbConnect is async)
  const userCollection = await dbConnect(collectionNamesObj.userCollection);

  const { name, email, password } = payload;
  console.log("payload", payload);

  if (!email || !password) {
    return { success: false };
  }

  const existingUser = await userCollection.findOne({ email });

  if (!existingUser) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;

    const result = await userCollection.insertOne(payload);
    const { acknowledged, insertedId } = result;

    return { acknowledged, insertedId: insertedId.toString() }; // ✅ serialize
  } else {
    return { success: false, message: "User already exists" };
  }
};
