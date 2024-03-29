import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const serverAuth = async (req: NextApiRequest ,res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session?.user?.email) {
        throw new Error('Not signed in'+ session);
    }
    /////////
    console.log(session)
    /////////
    const currentUser = await prisma?.user.findUnique({
        where: {
            email: session.user.email
        }
        
    });
    if (!currentUser) {
        throw new Error('Not Signed in')
    }
    return { currentUser }
    ////////////////////
    console.log(currentUser)
    ////////////////////
};
export default serverAuth;
