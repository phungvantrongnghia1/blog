"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnexSQL = void 0;
class KnexSQL {
    constructor(knexClient) {
        this.knexClient = knexClient;
    }
    async seleteData(table, options) {
        const { fields, filteringConditions } = options;
        return await this.knexClient(table).select(fields).where(builder => {
            filteringConditions.forEach((condition) => {
                builder.where(...condition);
            });
        });
    }
    async insertData(table, data) {
        return await this.knexClient(table).insert(data);
    }
}
exports.KnexSQL = KnexSQL;
//# sourceMappingURL=KnexQuery.js.map