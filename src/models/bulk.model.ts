export class BulkLiquid {
    constructor(public title: string, 
      public ship: Value,
      public terminal: Value,
      public code: Value,
      public remark: Value
    ) {}
  }
  
  
  export interface Value {
    value: any;
    attact: any;
  }