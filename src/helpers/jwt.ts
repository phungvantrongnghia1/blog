import jwt from "jsonwebtoken";

export function generateAccessToken(tokenUser:any,jwtSecret: string,expiresIn: string){
    const token = jwt.sign(tokenUser,jwtSecret,{
        header:{
            authorization: true
        },
        expiresIn
    })
    return {accessToken: token}
}
export function verifyAccessToken(tokenUser: string, jwtSecret: string){
    const token = jwt.verify(tokenUser,jwtSecret);
    return token;
}

