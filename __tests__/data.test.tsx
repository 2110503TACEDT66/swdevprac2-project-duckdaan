import CampgroundCatalog from "@/components/CampgroundCatalog";
import { render, screen, waitFor } from '@testing-library/react';
import { mock } from "node:test";

const mockResult = {
    
        "success": true,
        "count": 3,
        "pagination": {},
        "data": [
        {
        "_id": "6602458497be51fb7dffe8ad",
        "name": "Poo Tub Berk",
        "address": "Phetchabun",
        "tel": "088-888-8888",
        "price": 1000,
        "rating": 4,
        "picture": "https://drive.usercontent.google.com/download?id=1XS21ehfyj_mQ4ennRLQ64e9ego4Kv_ng&authuser=0",
        "bookings": [
        {
        "_id": "660628044f75d678f81c2e4e",
        "apptDate": "2024-03-29T17:00:00.000Z",
        "user": "65e4a0b6c2cefcf003fe659a",
        "campground": "6602458497be51fb7dffe8ad",
        "createdAt": "2024-03-29T02:31:32.502Z",
        "__v": 0
        }
        ],
        "id": "6602458497be51fb7dffe8ad"
        },
        {
        "_id": "6602467697be51fb7dffe8ae",
        "name": "Poo Cheefah",
        "address": "Chiangmai",
        "tel": "099-999-9999",
        "price": 4000,
        "rating": 3,
        "picture": "https://drive.usercontent.google.com/download?id=1MeclhIrXcmkrXQYzyZ5Hv8RvB7jxqx0M&authuser=0",
        "bookings": [],
        "id": "6602467697be51fb7dffe8ae"
        },
        {
        "_id": "660246b597be51fb7dffe8af",
        "name": "Badi Budu",
        "address": "Rayong",
        "tel": "077-777-7777",
        "price": 6000,
        "rating": 2,
        "picture": "https://drive.usercontent.google.com/download?id=1JcrDH_9uXIBL6uglDLWgUwT6OL327VsV&authuser=0",
        "bookings": [],
        "id": "660246b597be51fb7dffe8af"
        }
        ]
        
}

describe('CampgroundCatalog', ()=> {
    it('should have correct number of campground images', async ()=> {
        const campgroundcatalog = await CampgroundCatalog({campgroundsJson: mockResult})
        render(campgroundcatalog)
        await waitFor(
            () => {
                const carImages = screen.queryAllByRole('img')
                expect(carImages.length).toBe(3);

            }
        )
    })
})