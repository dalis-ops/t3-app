import { signIn, signOut, useSession } from "next-auth/react";
import Form from "~/components/Form";
import GuestbookEntries from "~/components/GuestbookEntries";
import Logout from "~/components/Logout";
import SignIn from "~/components/SignIn";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="pt-4 text-3xl">Guestbook</h1>
      <p>
        Tutorial for <code>create-t3-app</code>
      </p>
      <div className="pt-10">
        <div>
          {session ? (
            <Logout name={session.user?.name}/>
          ) : (
           <SignIn/>
          )}
          <div className="pt-6">
            <Form />
          </div>
          <div className="pt-10">
            <GuestbookEntries />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
