import { handleAuth } from "@/app/actions/handle-auth";
import {auth} from "@/app/lib/auth"
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth()

  if (!session) {
    return redirect("/login")
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-4xl font-bold">Protected Dashboard</h1>
      {session.user?.email && <p>{session.user.name}</p>}
      <Image 
        src={session.user?.image ? session.user?.image:""}
        alt={session.user?.name?session.user?.name:""}
        width="50"
        height="50"
      />
      <form
            action={handleAuth}
          >
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignOut</button>
          </form>
    </div>
  );
}