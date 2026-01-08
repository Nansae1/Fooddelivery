import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://nnsae:fIvtRlocfeLQNkQ6@cluster0.bggy8jr.mongodb.net/?appName=Cluster0"
  );
};
