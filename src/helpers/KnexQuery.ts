import  Knex  from "knex";
type ICondition = [string,string,string];
interface IOption {
    fields: Array<string>,
    filteringConditions: Array<ICondition>
}
 export class KnexSQL {
     constructor(private knexClient: Knex){}
     async seleteData(table: string, options: IOption){
         const {fields, filteringConditions} = options;
         return await this.knexClient(table).select(fields).where(builder => {
            filteringConditions.forEach((condition: ICondition): void => {
                builder.where(...condition);
            })
         })
     }
    async insertData(table: string, data: any){
        return await this.knexClient(table).insert(data);
    }
 }