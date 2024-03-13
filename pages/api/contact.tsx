import { MongoClient } from "mongodb";

// type handlerProps = {
//   status: any;
//   method: string;
//   body: { email: string; name: string; message: string };
// };

async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    interface MyType {
      email: string;
      name: string;
      message: string;
      id: any; // Ensure 'id' property is defined
    }

    const newMessage: MyType = {
      email,
      name,
      message,
      id: undefined,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}: ${process.env.mongodb_password}..jh0oylw.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database.." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing Message Failed!!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successful stored message!", [message]: newMessage });
  }
}

export default handler;
