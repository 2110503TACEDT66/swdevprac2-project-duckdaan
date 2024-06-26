'use client'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import styles from './cardpanel.module.css'
import { useReducer } from 'react';
import Link from 'next/link';
import getCampgrounds from '@/libs/getCampgrounds';
import { CampgroundJson } from '../../interface';
// import { HospitalJson } from '../../interface';



function CardPanel() {

    const [campgroundResponse, setCampgroundResponse] = useState<{ data: CampgroundJson } | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const campgrounds = await getCampgrounds();
            setCampgroundResponse(campgrounds);
        }
        fetchData();
    }, [])

    if(!campgroundResponse){
        return (<p>Loading ...</p>)
    }

    

    // const hospitals = [
    //     { hid: '001', hospitalName: 'Chulalongkorn Hospital', imgSrc: '/img/chula.jpg', star: 5 },
    //     { hid: '002', hospitalName: 'Rajavithi Hospital', imgSrc: '/img/rajavithi.jpg', star: 5 },
    //     { hid: '003', hospitalName: 'Thammasat University Hospital', imgSrc: '/img/thammasat.jpg', star: 5 }
    // ];

    

    //took 2 variables
    //1.stateVal Map ค่าปัจจุบันองstate
    //2.action actionที่ใช้บรรจุdata ใช้ประกอบlogicในการupdate state

    const star = new Map([
        ['Chulalongkorn Hospital', 5],
        ['Rajavithi Hospital', 5],
        ['Thammasat University Hospital', 5]
    ]);


    //set star
    const starReducer = (starMap: Map<string, number>, action:{type: string, campground: string, star: number})=>{
        //check type action
        switch(action.type){
            case 'add': {
                return new Map( starMap.set(action.campground, action.star) )
            }
            case 'remove': {
                starMap.delete(action.campground);
                return new Map(starMap);
            }
            default: return starMap
        }
    }

    //state variable
    const [starMap, dispatch] = useReducer(starReducer, star)

  return (
    <div>
    <div className={styles.cardContainer}>
        {campgroundResponse.data.map((campground: { hid: React.Key | null | undefined; campground: string; imgSrc: string; }) => (
            <Link href={`/campground/${campground.hid}`} className='w-1/5'>
                <Card campgroundName={campground.campground}
            imgSrc={campground.imgSrc} star={starMap.get(campground.campground) ?? 5}
            key={campground.hid} onChangeStar={(campground: string, star: number) => dispatch({type: 'add', campground: campground, star: star})}            />
            
            </Link>
            
        ))}
        {/* <Card campground='Chulalongkorn Hospital' imgSrc='/img/chula.jpg' star={starMap.get('Chulalongkorn Hospital') ?? 5} 
        onChangeStar={(campground: string, star: number) => dispatch({type: 'add', campground: campground, star: star})}/>
        <Card campground='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg' star={starMap.get('Rajavithi Hospital') ?? 5} 
        onChangeStar={(campground: string, star: number) => dispatch({type: 'add', campground: campground, star: star})}/>
        <Card campground='Thammasat University Hospital' imgSrc='/img/thammasat.jpg' star={starMap.get('Thammasat University Hospital') ?? 5} 
        onChangeStar={(campground: string, star: number) => dispatch({type: 'add', campground: campground, star: star})}/> */}

    </div>
    {Array.from(starMap.entries()).map(([hospital, rating]) => (
                    <div className='cursor-pointer' data-testid={hospital} key={hospital} onClick={() => dispatch({type: 'remove', campground: hospital, star: rating})}>
                        {hospital + ': ' + rating}
                    </div>
                ))}
    </div>
    
  )
}

export default CardPanel
