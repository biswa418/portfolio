import React from 'react'
import styled from 'styled-components';

const Pill = styled.span`
    &:before {
        content: '';
        background-color: #cecece;
        display: block;
        height: 2px;
        position: absolute;
        left: -5px;
        top: 53px;
        transform: rotate(90deg) skew(145deg);
        width: 50px;
    }

    @media screen and (max-width: 768px){
        &:before{
            width: 50px;
            left: -5px;
            top: 53px;
        }
    }

    @media screen and (min-width: 1040px){
        &:before{
            width: 50px;
            left: -5px;
            top: 53px;
        }
    }

    @media screen and (max-width: 490px){
        &:before{
            width: 50px;
            left: -5px;
            top: 53px;
        }
    }
`

const Edu = () => {

    const school = ['National Institute of Technology, Rourkela', 'Adyant +2 Science College'];
    const duration = ['2016 - 21', '2014 - 16'];
    const details = ['Dual Degree in Mechanical Engg. (Mechatronics and Automation)', 'Intermediate in Science'];
    const marks = ['8.23 CGPA', '85.33%']

    const data = [];

    for (let i = 0; i < school.length; i++) {
        data.push({
            id: i,
            school: school[i],
            duration: duration[i],
            details: details[i],
            mark: marks[i]
        })
    }

    return (
        <div className='h-full flex flex-col justify-center mx-auto w-11/12'>
            {data.map((data) => {
                return (
                    <div key={data.id} className='mb-5'>
                        <h2 className='uppercase text-xl text-slate-50 font-semibold mb-2 pb-2 ps-4'>{data.school}</h2>

                        <div className='relative'>
                            <Pill className='border-2 px-4 py-1 ms-4 rounded-full'>
                                {data.duration}
                            </Pill>

                            <p className='mb-2 mt-3 ms-9 text-slate-400 text-sm break-words whitespace-break-spaces'>
                                {data.details}
                            </p>
                            <span className='mb-2 mt-3 ms-9 text-slate-100 text-sm break-words whitespace-break-spaces'>{data.mark}</span>

                        </div>
                    </div>

                )
            })}

        </div>
    )
}

export default Edu