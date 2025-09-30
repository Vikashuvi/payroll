import { Amplify } from "aws-amplify";


Amplify.configure({
    Auth: {
        Cognito: {
            region: import.meta.env.VITE_AWS_REGION,
            userPoolId: import.meta.env.VITE_USERPOOL_ID,
            userPoolClientId: import.meta.env.VITE_CLIENT_ID
        }
    }
})