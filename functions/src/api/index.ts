import db from '../components/db';
import {sendInquireEmail} from './mail'

const express = require('express');
const cors = require('cors');

export const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// @ts-ignore
app.use((req, res, next) => {
    if (req.get('x-secret') === undefined || req.get('x-secret') !== 'chameleon-isb-mini-site') {
        res.status(403).json({error: 'Unauthorized'});
        return;
    }
    next();
});

// @ts-ignore
app.get('/events', async (req, res) => {
    const region = req.query.region;
    if (region === undefined) {
        res.status(404).json({error: 'Invalid region'});
        return;
    }
    const events = await db.collection('local-events').where('region', '==', region).orderBy('endDate').get();
    const output: any = [];
    events.forEach( doc => {
        const item = doc.data();
        output.push(item);
    })
    if (output.length > 0) {
        res.json(output);
    }
    res.json([{title: 'No event for this region.'}]);
});

// @ts-ignore
app.get('/top-10', async (req, res) => {
    const events = await db.collection('top-10-see-to-do').get();
    const output: any = [];
    events.forEach( doc => {
        const item = doc.data();
        output.push(item);
    })
    if (output.length > 0) {
        res.json(output);
        return;
    }
    res.json([{title: 'We\'re collecting recommendations!'}]);
});

// @ts-ignore
app.get('/business-directory', async (req, res) => {

    let events = null;
    if (req.query.category === undefined) {
        events = await db.collection('business-directory').get();
    } else {
        events = await db.collection('business-directory').where('category', '==', req.query.category).get();
    }

    const output: any = [];
    events.forEach( doc => {
        const item = doc.data();
        item.id = doc.id;
        output.push(item);
    })
    if (output.length > 0) {
        res.json(output);
        return;
    }
    res.json([{title: 'We\'re collecting recommendations!'}]);
});

// @ts-ignore
app.post("/mail-inquire", async (req, res) => {
    const data = JSON.parse(req.body);
    try {
        await sendInquireEmail(data.email);
    } catch (e) {
        res.status(400).json({error: JSON.stringify(e)});
        return;
    }
    res.json({msg: 'email has been sent'});
});