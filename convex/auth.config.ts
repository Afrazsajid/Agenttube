

 if(!process.env.CLERK_ISSUE_URL){
    throw new Error("'CLERK_ISSUE_URL' is missing in convex envs")
 }
export default {
    providers: [
      {
        domain: process.env.CLERK_ISSUE_URL,
        applicationID: "convex",
      },
    ]
  };