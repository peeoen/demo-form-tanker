export class BulkLiquid {
    constructor(public id: number,
      public title: string, 
      public ship: Value,
      public terminal: Value,
      public code: Value,
      public remark: Value
    ) {}
  }
  
  
  export interface Value {
    value: any;
    payload: any;
  }