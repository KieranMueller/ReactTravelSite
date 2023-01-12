let root = ReactDOM.createRoot(document.querySelector("#root"))

let Data = [
    {
        title: "Minneapolis",
        location: "Minnesota, US",
        googleMapsUrl: "https://www.google.com/maps/place/Minneapolis,+MN/@44.9706756,-93.3315183,12z/data=!3m1!4b1!4m5!3m4!1s0x52b333909377bbbd:0x939fc9842f7aee07!8m2!3d44.977753!4d-93.2650108",
        startDate: "20 Feb",
        endDate: "27 Feb",
        description: "Minneapolis is the largest city in Minnesota. Located next to the State capital of St. Paul, Minneapolis is full of tourist attractions. During the Winter, ensure you bundle up. The Stonearch bridge, Guthrie Theatre, and University of Minnesota college campus are a few sights you must see.",
        imageUrl: "https://travellemming.com/wp-content/uploads/Stone-Arch-Bridge-at-Downtown-Minneapolis.jpg",
        views: 8922
    },
    {
        title: "Chicago",
        location: "Illinois, US",
        googleMapsUrl: "https://www.google.com/maps/place/Chicago,+IL/@41.8333925,-88.0121488,10z/data=!3m1!4b1!4m5!3m4!1s0x880e2c3cd0f4cbed:0xafe0a6ad09c0c000!8m2!3d41.8781136!4d-87.6297982",
        startDate: "5 Aug",
        endDate: "29 Aug",
        description: "Chicago has been described as the New York City of the Midwest. One of the largest cities in the country, Chicago does not dissapoint. Unique cuisine located at every corner. Concerts, movies and plays ensuing every night and day. Chicago is a paradise for those who enjoy the hustle and bustle. Make sure you don't miss the St. Patrick's day festivites!",
        imageUrl: "https://ak-d.tripcdn.com/images/01018120008wxiy3n05F0_C_800_600_R5.jpg_.webp?proc=autoorient",
        views: 10234
    },
    {
        title: "New York City",
        location: "New York, US",
        googleMapsUrl: "https://www.google.com/maps/place/New+York,+NY/@40.6971494,-74.2598665,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728",
        startDate: "3 Jan",
        endDate: "22 Feb",
        description: "Everyone knows and loves the Big Apple, and for good reason. New York City is home to almost everything we know and love in the US. The rich history lies beneath the modern infrastructure. Luxury, high-end stores and neighborhoods contrast with older, cultural suburbs. The party does not stop here in the city that never sleeps.",
        imageUrl: "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkyNDQ5NzY0ODY2OTI1OTgw/gettyimages-1395722285.jpg",
        views: 20392
    },
    {
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan",
        endDate: "24 Jan",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
        views: 277
    },
    {
        title: "Seattle",
        location: "Washington, US",
        googleMapsUrl: "https://www.google.com/maps/place/Seattle,+WA/@47.6129432,-122.4821478,11z/data=!3m1!4b1!4m5!3m4!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708",
        startDate: "20 Feb",
        endDate: "27 Feb",
        description: "Seattle is a beautiful city. Filled with exciting venues, food, and entertainment, this city feels like home.",
        imageUrl: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2022-04/3faf9c97f64056d69e679b8a37b16ebc.jpeg?h=196107ae&itok=iQtN_hSA",
        views: 3339
    },
    {
        title: "Paris",
        location: "France, EU",
        googleMapsUrl: "https://www.google.com/maps/place/France/@46.1313653,-2.4362227,6z/data=!3m1!4b1!4m5!3m4!1s0xd54a02933785731:0x6bfd3f96c747d9f7!8m2!3d46.227638!4d2.213749",
        startDate: "2 Jul",
        endDate: "12 Jul",
        description: "France is rich with history. Experience the culture first-hand by booking tickets ASAP! Learn the language, love the food.",
        imageUrl: "https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg",
        views:892
    }
]

function App() {
    const cardElements = Data.map(item => {
        return <Card item = {item}/>
})

    return (
        <div>
            {cardElements}
        </div>
    )}

function Card(props) {
    return (
        <div>
            <div className = "img-div">
                <img className="image" src={props.item.imageUrl}/>
            </div>
            <div className = "views-div">Views: {props.item.views}</div>
            <div className="top-div">
                    <h1>{props.item.title}</h1>
                    <button>Save</button>
                <h3>{props.item.location}</h3>
            </div>
                <a href={props.item.googleMapsUrl}>
                    View on Google Maps</a>
            <div className="description-div">
                <h3>Cheapest Flights: {props.item.startDate} - {props.item.endDate}</h3>
                <p>{props.item.description}</p>
            </div>
        </div>
        )}

root.render(<App />)

