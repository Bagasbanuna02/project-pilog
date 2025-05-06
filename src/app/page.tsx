/* eslint-disable @typescript-eslint/no-unused-vars */
import { redirect } from "next/navigation";
import NewMobileLayout from "./(dev)/zCoba/page";

export default function Home() {
  // Redirect to login page if not authenticated
  // In a real app, you would check for authentication here
  redirect("/login");
  return null;

  // return <NewMobileLayout/>
}
