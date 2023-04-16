import cron from 'node-cron';
import {getMilk} from "../parser/perekrestok/milk/getMilk";

const EVERY_12_H_FROM_8_HOUR_5_MIN = '5 8-21/12 * * *'

cron.schedule('* * * * *', () => {
    const milk = getMilk();
    milk.then((res) => {
        const date = new Date();
        console.log(`${date.getHours()}:${date.getMinutes()}`);
        console.log(res);
    })
})