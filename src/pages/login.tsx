import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";

export type Tlogin = {
  user: any;
};

const login = ({ user }: Tlogin) => {
  return (
    <div>
      {user && (
        <Image src={user.picture!} alt={user.name!} width={50} height={50} />
      )}
    </div>
  );
};
export const getServerSideProps = withPageAuthRequired();

export default login;
