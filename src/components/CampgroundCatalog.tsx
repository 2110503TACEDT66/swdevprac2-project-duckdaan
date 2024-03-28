import Link from 'next/link'
import React from 'react'
import Card from './Card'
import { CampgroundItem, CampgroundJson } from '../../interface';

async function CampgroundCatalog({campgroundsJson} : {campgroundsJson: Promise<CampgroundJson> | null}) {


  const campgroundJsonReady = await campgroundsJson
  if(campgroundJsonReady == null){
    console.log('error')
    return
  }
  // console.log(campgroundJsonReady)

  return (
    <>
    <h3 className='text-center'>Explore {campgroundJsonReady.count} Campgrounds in our list</h3>
    {/* Explore {campgroundJsonReady.count} hospitals in our list */}
    <div style={{margin: '20px', display: 'flex',
    flexDirection: 'column', alignContent: 'space-around',justifyContent: 'space-around', flexWrap: 'wrap', padding: '10px'}}>
    {
      campgroundJsonReady.data.map((campground: CampgroundItem) => (
        <Link href={`/campground/${campground.id}`} className='w-full' key={campground.id}>
          <div>
          <Card campgroundName={campground.name} imgSrc={campground.picture}/>

          </div>
        </Link>
      ))
    }
    </div>
    </>
  )
}

export default CampgroundCatalog
