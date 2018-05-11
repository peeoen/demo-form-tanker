import { Injectable } from '@angular/core';
import { BulkLiquid } from './../models/bulk.model';

@Injectable()
export class BulkService {

    data: BulkLiquid[] = [];

    constructor() {
        this.initData();
     }

     initData() {
         const codeRand = [
             'R',
             'A R',
         ]
        const titles = [
            '1. There is safe access between the ship and shore. \n มีช่องทางขึ้นลงระหว่างเรือกับท่าที่ปลอดภัย',
            '2. The ship is securely moored. เรือเทียบท่าและผูกอย่างมั่นคง',
            '3. The agreed ship/store communication system is opertive',
            '4. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            '5. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ',
            '6. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
            '7. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,',
            '8. Various versions have evolved over the years',
        ]
        for(let i=0; i<titles.length; i++) {
            this.data.push({
                title: titles[i],
                ship: {
                    attact: null,
                    value: false
                  },
                  terminal: {
                    attact: null,
                    value: false
                  },
                  code: {
                    attact: null,
                    value: codeRand[Math.round(Math.random())]
                  },
                  remark: {
                    attact: null,
                    value: ''
                  }
            })
        }
        console.log(this.data);
     }
}