import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>This is my DashBoard</h1>
      <Link href="/sign-up">Sign-Up</Link>
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
};

export default Home;
