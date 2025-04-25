import slugify from "slugify";
import axios from 'axios';
import db from "../components/db";

const localEventSources = [
    {
        url: "https://www.ilovetakapuna.co.nz/index.php?option=com_calendar&theAction=exploreNorthShoreEventsFeed",
        source: "takapuna",
        domain: "https://www.ilovetakapuna.co.nz/media/event/",
    },
    {
        url: "https://www.milfordshops.co.nz/index.php?option=com_calendar&theAction=exploreNorthShoreEventsFeed",
        source: "milford",
    },
    {
        url: "https://devonport.co.nz/index.php?option=com_calendar&theAction=exploreNorthShoreEventsFeed",
        source: "devonport",
    },
];

async function crawler(event: any) {
    return new Promise(((resolve, reject) => {
        axios(event.url).then((response: any) => {
            let promises: Promise<any>[] = [];
            // eslint-disable-next-line promise/always-return
            for (const item of response.data) {
                const promiseReference = new Promise((resolve, reject) => {
                    db.collection("local-events")
                        .doc(slugify(item.event_title, {lower: true}))
                        .set({
                            title: item.event_title,
                            region: event.source,
                            startDate: item.event_start_date,
                            endDate: item.event_end_date,
                            imageUrl: event.domain + item.event_image,
                            simpleDesc: item.simple_event_desc ?? '',
                            desc: item.event_desc,
                        }, {merge: true})
                        .then((writeResult) => {
                            console.log('Crawling ' + item.event_title);
                            resolve(writeResult);
                            return writeResult;
                        })
                        .catch(e => {
                            reject(e);
                        });
                });
                promises.push(promiseReference);
            }
            console.log('Collected promises from one source');
            return Promise.all(promises).then(() => {
                console.log('Finishing promises from one source');
                resolve();
                return;
            });
        }).catch((e) => {
            reject(e);
        });
    }));
}

export async function crawlerLocalEvents() {
    let promises: Promise<any>[] = [];
    localEventSources.forEach((source) => {
        console.log('Parent: collecting promises from a source');
        promises.push(crawler(source));
    });
    console.log('Parent: Collected promises from all sources'); // <<<<<<
    // console.log(promises);
    Promise.all(promises)
        .then(() => {
            console.log('Parent: all promises done');
            console.log('Cleaning up old entries');
            return cleanUpLocalEvents();
        }).catch();
}

async function cleanUpLocalEvents() {
    const date = new Date();
    const todayISODate = new Intl.DateTimeFormat('fr-ca').format(date);
    const querySnapshot = await db.collection('local-events')
        .where('endDate', '>', todayISODate).get();
    querySnapshot.forEach(doc => {
        console.log('Deleting: ' + doc.ref.id);
        doc.ref.delete();
    })
}
