"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, {useState} from "react";

//--------------------------------------------------------------------//

const Loading = () => {

    const route = useRouter();
    const session = useSession();
    console.log(session);
    if(session.status === "loading"){
        route?.push("/characteroverview")
    }else{
  return (
    <div>
        <h2>Loading.....</h2>
    </div>
  );
};
};

export default Loading;
