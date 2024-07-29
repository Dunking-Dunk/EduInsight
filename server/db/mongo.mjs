import dotenv from 'dotenv'
import mongoose from "mongoose";
dotenv.config();

const mongoURI = process.env.MONGO_URI;

const conn = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB connected successfully');
    }).catch(err => {
        console.error('MongoDB connection error:', err);
    });
}

const getAllColection = async () => {
    try {
        const db = mongoose.connection.useDb('tnea');
        const allCollections = await db.listCollections();
        return allCollections.map(coll => coll.name);
    }catch(e) {
        console.error(e);
        return []
    }
}

const getAllCollegeByYearBasedOnCutoff = async (year) => {
    const db = mongoose.connection.useDb('tnea');
    const collection = db.collection('cutoff');
    const data = await collection.find({ 'year': parseInt(year) }).toArray();
    if(data) {
        return data
    }
    return []
}

const getAllCollegeByYearBasedOnRank = async (year) => {
    const db = mongoose.connection.useDb('tnea');
    const collection = db.collection('rank');
    const data = await collection.find({ 'year': parseInt(year) }).toArray();
    if(data) {
        return data
    }
    return []
}

export {
    conn,
    getAllColection,
    getAllCollegeByYearBasedOnCutoff,
    getAllCollegeByYearBasedOnRank
}