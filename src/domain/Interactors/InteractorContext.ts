export interface TokenUser {
    readonly id: string,
    readonly email: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly fullName: string,
    readonly isCurator: boolean,
    readonly iat: string,
    readonly exp: string
}
export type InteractorContext = {
    user?: TokenUser
}