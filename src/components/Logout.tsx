import { signOut } from "next-auth/react";

interface LayoutProps {
    name?: string;
  }

const Logout: React.FC<LayoutProps> = ({name}) => {
  return (
    <>
    <p className="mb-4 text-center">Hi {name}</p>
    <button
      type="button"
      className="mx-auto block rounded-md bg-neutral-800 px-6 py-3 text-center hover:bg-neutral-700"
      onClick={() => {
        signOut().catch(console.log);
      }}
    >
      Logout
    </button>
  </>
  )
}

export default Logout