import { createSlice } from '@reduxjs/toolkit'

export const businessSlice = createSlice({
    name: "business",
    initialState: {
        value: [{
            "type": "hotel",
            "latitude": 6.704581206797783,
            "longitude": 81.27638881048588,
            "serviceDetails": {
                "pool": true,
                "beach": true,
                "wifi": true,
                "ac": false,
                "parking": false
            },
            "locationFeatures": {
                "attractionPlacesCount": 1,
                "transportationModesCount": 0,
                "nearByHotelReviewCount": 0,
                "competitors": 0
            },
            "businessCount": {
                "atmCount": 0,
                "restaurantCount": 0,
                "hospitalCount": 0,
                "pharmacyCount": 0,
                "gasStationCount": 0,
                "movieTheaterCount": 0,
                "hotelCount": 0
            },
            "ml_result": 48.6782
        }
        ]
    },
    reducers: {
        addBusiness: (state, action) => {
            // state.value.push(action.payload)
            state.value[0] = action.payload
        },
        addNewBusiness: (state, action) => {
            // state.value.push(action.payload)
            state.value= [];
            state.value[0] = action.payload
        },
        compareBusiness: (state, action) => {
            console.log("action.payload", action.payload)
            state.value[action.payload.length] = state.value[0]
            state.value[0] = null

        },
    }
});
export const { addBusiness: addBusiness, compareBusiness: compareBusiness ,addNewBusiness:addNewBusiness} = businessSlice.actions;
export default businessSlice.reducer;