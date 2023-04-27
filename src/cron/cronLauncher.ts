import cron from 'node-cron';
import {uploadMilk} from "../parser/perekrestok/milk/uploadMilk";

const EVERY_12_H_FROM_8_HOUR_5_MIN = '5 8-21/12 * * *'

cron.schedule('* * * * *', () => {
    const milk = uploadMilk();
    milk.then((res) => {
        const date = new Date();
        console.log(`${date.getHours()}:${date.getMinutes()}`);
        console.log(res);
    })
})