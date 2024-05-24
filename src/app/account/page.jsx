import { redirect } from "next/navigation";


export default function AccountPage() {
  
  // assume that profile info is 'null'
  const userProfileInfo=null;

  if(userProfileInfo === null){
    redirect('/profile');
  }
  return <h1>AccountPage</h1>;
}
