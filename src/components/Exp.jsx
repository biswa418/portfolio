import React from 'react'
import { Bounce, Fade, Rotate, Slide } from 'react-awesome-reveal';
import styled from 'styled-components';

const Pill = styled.span`
    &:before {
        content: '';
        background-color: #cecece;
        display: block;
        height: 2px;
        position: absolute;
        left: -130px;
        top: 175px;
        transform: rotate(90deg) skew(145deg);
        width: 300px;
    }

    @media screen and (max-width: 768px){
        &:before{
            width: 150px;
            left: -55px;
            top: 110px;
        }
    }

    @media screen and (min-width: 1040px){
        &:before{
            width: 150px;
            left: -55px;
            top: 110px;
        }
    }

    @media screen and (max-width: 490px){
        &:before{
            width: 200px;
            left: -80px;
            top: 130px;
        }
    }
`

const Exp = () => {

    const company = ['Factspan Inc.'];
    const duration = ['2021 - Now'];
    const details = [
        'Created complete automated backend pipeline to consume the data coming in through One-source API for our clients increasing efficiency by 40%.',
        'Designing and implementing various end-to-end data ingestion pipelines. Using AWS Glue jobs and Python, delivered over 200+ tables of data.',
        'Accomplished excellent ETL knowledge by building complex SCD flows using streams, tasks, snowflake SQL consuming over 100k data daily.'
    ]


    return (
        <Fade cascade>
            <div className='h-full flex flex-col justify-center mx-auto w-11/12'>
                <Slide>
                    <h2 className='uppercase text-xl font-semibold mb-2 pb-2 ps-4'>{company[0]}</h2>
                </Slide>

                <div className='relative'>
                    <Pill className='border-2 px-4 py-1 ms-4 rounded-full'>
                        {duration[0]}
                    </Pill>

                    <ul className=''>
                        {details.map((points) => {
                            return (
                                <li key={details.indexOf(points)} className='mb-2 mt-3 ms-9 text-slate-400 text-sm break-words whitespace-break-spaces'>{points}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </Fade>
    )
}

export default Exp