import { Router } from "express";
import { getAllColection, getAllCollegeByYearBasedOnCutoff, getAllCollegeByYearBasedOnRank } from "../db/mongo.mjs";

const router = new Router();

router.get('/', (req, res, next) => {
    return res.status(200).send({
        message: 'Fine bro!',
        error: null
    })
})

// I need to get all details of college, wt are things i require
// 1. All College detail by year

router.get('/colleges/cutoff/:year', async (req, res, next) => {
    const { year } = req.params;
    if(isNaN(parseInt(year)))
        return res.status(400).send(
            {
                message: 'Bad Request - Missing search param',
                error: null
            }
        )
    console.log(['2019','2020', '2021', '2022', '2023'].includes(year));
    if(!['2019','2020', '2021', '2022', '2023'].includes(year)){
        return res.status(404).send(
            {
                message: 'Bad Request - Param not found',
                error: null
            }
        )
    }
    const data = await getAllCollegeByYearBasedOnCutoff(year);

    return res.status(200).send({
        message: 'Found',
        data: data
    })
})

router.get('/colleges/rank/:year', async (req, res, next) => {
    const { year } = req.params;
    if(isNaN(parseInt(year)))
        return res.status(400).send(
            {
                message: 'Bad Request - Missing search param',
                error: null
            }
        )
    console.log(['2019','2020', '2021', '2022', '2023'].includes(year));
    if(!['2019','2020', '2021', '2022', '2023'].includes(year)){
        return res.status(404).send(
            {
                message: 'Bad Request - Param not found',
                error: null
            }
        )
    }
    const data = await getAllCollegeByYearBasedOnRank(year);

    return res.status(200).send({
        message: 'Found',
        data: data
    })
})

export {
    router
}