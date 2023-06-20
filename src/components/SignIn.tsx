import { signIn } from "next-auth/react";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex flex-row gap-4">
      <button
        type="button"
        className="mx-auto block rounded-md bg-neutral-800 px-6 py-3 text-center hover:bg-neutral-700"
        onClick={() => {
          signIn("discord").catch(console.log);
        }}
      >
        Login with Discord
      </button>
      <button
        type="button"
        className="mx-auto block rounded-md bg-neutral-800 px-6 py-3 text-center hover:bg-neutral-700"
        onClick={() => {
          signIn("github").catch(console.log);
        }}
      >
        Login with Github
      </button>
    </div>
  );
};

export default SignIn;
