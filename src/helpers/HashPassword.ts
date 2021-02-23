import bcrypt from "bcrypt";

export class PasswordHasher {
  constructor(private hashSaltLogRounds: number) {}
  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.hashSaltLogRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
  async verify(password: string,hash: string,algorithm: string): Promise<boolean>{
    if(!hash){
        return false;
    }
    if(algorithm !== "bcrypt"){
        return false;
    }
    return bcrypt.compare(password,hash);
  }
}
