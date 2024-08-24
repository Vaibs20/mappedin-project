import { E_SDK_EVENT, getVenue, PositionUpdater, showVenue, STATE, TGetVenueOptions } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import { TGeolocationObject } from "@mappedin/mappedin-js/renderer/index.rn";
import "./styles.css";

// See Trial API key Terms and Conditions
// https://developer.mappedin.com/guides/api-keys
const options: TGetVenueOptions = {
    venue: "mappedin-demo-mall",
    clientId: "5eab30aa91b055001a68e996",
    clientSecret: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1",
};

let blueDotPosition: TGeolocationObject = {
    timestamp: Date.now(),
    coords: {
        latitude: 43.51913063428935,
        longitude: -80.54104173445346,
        accuracy: 4
    }
};

const positionUpdater = new PositionUpdater();

const sectionNames = [
    "Grocery",
    "Produce",
    "Bakery",
    "Dairy",
    "Meat & Seafood",
    "Household Essentials",
    "Electronics",
    "Clothing",
    "Toys",
    "Automotive",
    "Home & Garden",
    "Pharmacy",
    "Beauty",
    "Health & Wellness",
    "Sports & Outdoors",
    "Furniture",
    "Baby",
    "Pets",
    "Jewelry",
    "Stationery",
    "Crafts & Fabrics",
    "Shoes",
    "Appliances",
    "Books & Magazines",
    "Luggage",
    "Seasonal",
    "Hardware",
    "Office Supplies",
    "Musical Instruments",
    "Optical",
    "Photo Center",
    "Auto Care Center",
    "Tire & Lube",
    "Outdoor Living",
    "Wireless Services",
    "Cleaning Supplies",
    "Kitchenware",
    "Storage & Organization",
    "Patio & Garden Furniture",
    "Rugs & Mats",
    "Curtains & Blinds",
    "Bedding",
    "Mattresses",
    "Lighting",
    "Small Kitchen Appliances",
    "Large Appliances",
    "Air Conditioners",
    "Heaters",
    "Fans",
    "Vacuums",
    "Floor Care",
    "Laundry",
    "Home Decor",
    "Wall Art",
    "Mirrors",
    "Clocks",
    "Furniture Sets",
    "Living Room Furniture",
    "Bedroom Furniture",
    "Office Furniture",
    "Kitchen Furniture",
    "Storage Furniture",
    "Baby Furniture",
    "Kids Furniture",
    "Fitness Equipment",
    "Camping Gear",
    "Sports Apparel",
    "Sports Equipment",
    "Outdoor Furniture",
    "Grills & Outdoor Cooking",
    "Pool Supplies",
    "Lawn Care",
    "Garden Tools",
    "Planters",
    "Seeds & Bulbs",
    "Fertilizers",
    "Pest Control",
    "Bird Feeders",
    "Pet Food",
    "Pet Supplies",
    "Pet Toys",
    "Pet Grooming",
    "Pet Health",
    "Cat Litter",
    "Cat Food",
    "Dog Food",
    "Dog Toys",
    "Dog Beds",
    "Cat Beds",
    "Bird Cages",
    "Fish Tanks",
    "Aquarium Supplies",
    "Small Animal Supplies",
    "Bird Food",
    "Reptile Supplies",
    "Animal Health",
    "Health Care",
    "Personal Care",
    "Hair Care",
    "Skin Care",
    "Oral Care",
    "Bath & Body",
    "Men's Grooming",
    "Women's Health",
    "First Aid",
    "Pain Relief",
    "Cold & Flu",
    "Vitamins & Supplements",
    "Weight Loss",
    "Digestive Health",
    "Allergy Relief",
    "Sleep Aids",
    "Wellness Products",
    "Dietary Supplements",
    "Medical Supplies",
    "Feminine Hygiene",
    "Men's Health",
    "Baby Care",
    "Diapers & Wipes",
    "Baby Food",
    "Baby Formula",
    "Nursing & Feeding",
    "Baby Health & Safety",
    "Baby Toys",
    "Baby Furniture",
    "Maternity",
    "Infant Care",
    "Toddler Care",
    "Children's Medicine",
    "Family Health",
    "Weight Management",
    "Healthy Eating",
    "Sports Nutrition",
    "Dietary Foods",
    "Gluten-Free Foods",
    "Organic Foods",
    "Snacks",
    "Beverages",
    "Canned Goods",
    "Frozen Foods",
    "Dairy Products",
    "Meat",
    "Seafood",
    "Produce",
    "Bakery Items",
    "Bread",
    "Pastries",
    "Desserts",
    "Cakes",
    "Cookies",
    "Crackers",
    "Chips",
    "Candy",
    "Nuts & Seeds",
    "Baking Ingredients",
    "Spices & Seasonings",
    "Cooking Oils",
    "Sauces & Dressings",
    "Condiments",
    "Pasta & Rice",
    "Beans & Grains",
    "Soups & Broths",
    "Breakfast Foods",
    "Cereal",
    "Oatmeal",
    "Pancake Mixes",
    "Syrups",
    "Coffee & Tea",
    "Juice",
    "Soft Drinks",
    "Water",
    "Sports Drinks",
    "Energy Drinks",
    "Alcoholic Beverages",
    "Wine",
    "Beer",
    "Spirits",
    "Household Cleaning",
    "Paper Products",
    "Trash Bags",
    "Laundry Detergent",
    "Fabric Softener",
    "Dish Soap",
    "Cleaning Tools",
    "Mops & Brooms",
    "Sponges & Scrubbers",
    "Cleaning Cloths",
    "All-Purpose Cleaners",
    "Bathroom Cleaners",
    "Kitchen Cleaners",
    "Air Fresheners",
    "Pest Control",
    "Bug Sprays",
    "Rodent Control",
    "Cleaning Solutions",
    "Storage Bins",
    "Shelving Units",
    "Closet Organizers",
    "Storage Bags",
    "Laundry Baskets",
    "Home Organization",
    "Drawer Organizers",
    "Hangers",
    "Garment Bags",
    "Utility Carts",
    "Tool Storage",
    "Workbenches",
    "Tool Sets",
    "Power Tools",
    "Hand Tools",
    "Paint Supplies",
    "Hardware",
    "Fasteners",
    "Safety Gear",
    "Workwear",
    "Building Materials",
    "Home Improvement",
    "Plumbing Supplies",
    "Electrical Supplies",
    "Light Bulbs",
    "Batteries",
    "Extension Cords",
    "Electrical Cords",
    "Home Security",
    "Smoke Detectors",
    "Carbon Monoxide Detectors",
    "Fire Extinguishers",
    "Locks & Keys",
    "Door Hardware",
    "Window Hardware",
    "Lock Sets",
    "Door Closers",
    "Window Blinds",
    "Curtains",
    "Curtain Rods",
    "Wall Decor",
    "Picture Frames",
    "Wall Tapestries",
    "Rugs",
    "Mats",
    "Throw Pillows",
    "Blankets",
    "Bed Linens",
    "Comforters",
    "Pillow Cases",
    "Sheets",
    "Mattress Pads",
    "Mattress Protectors",
    "Bed Skirts",
    "Bedroom Decor"
];

async function init() {

    //Wait while the venue is downloaded.
    const venue = await getVenue(options);

    const alphabeticalLocations = venue.locations
        .filter((location: TLocation) => location.type === "tenant")
        .sort((a, b) => (a.name < b.name ? -1 : 1));

    // Check that the list of section names is not longer than the number of locations
    if (sectionNames.length > alphabeticalLocations.length) {
        console.warn("Not enough locations to rename all sections.");
    }

    // Update the names of the sections using a for loop
    for (let i = 0; i < alphabeticalLocations.length; i++) {
        if (i < sectionNames.length) {
            alphabeticalLocations[i].name = sectionNames[i];
        } else {
            // If there are more locations than section names, use a default name or repeat names
            alphabeticalLocations[i].name = `Section ${i + 1}`;
        }
    }

    //Display the default map in the app div.
    const mapView = await showVenue(document.getElementById("app")!, venue, {
        multiBufferRendering: true,
    });

    mapView.addInteractivePolygonsForAllLocations(); // if user hovers over a polygon , it will indicate that it's clickable

    //Enable Flat Labels for all locations.
    mapView.FlatLabels.labelAllLocations();

    // Implementing manual search functionality
    const getDirections = async () => {
        const sourceInput = (document.getElementById("sourceLocation") as HTMLInputElement).value.toLowerCase();
        const destinationInput = (document.getElementById("destinationLocation") as HTMLInputElement).value.toLowerCase();

        const startLocation = alphabeticalLocations.find((location) => location.name.toLowerCase().includes(sourceInput));
        const endLocation = alphabeticalLocations.find((location) => location.name.toLowerCase().includes(destinationInput));

        if (!startLocation || !endLocation) {
            alert("Locations not found, please enter valid locations.");
            return;
        }

        const directions = startLocation.directionsTo(endLocation, { accessible: false });

        mapView.Journey.clear(); // Clear previous directions if any
        mapView.Journey.draw(directions, {
            pathOptions: {
                nearRadius: 2.5,
                farRadius: 2.5,
            },
        });

        //Set the camera state to follow the user's location on the map,
        //marked by a blue dot.
        mapView.setState(STATE.FOLLOW);

        //Enable the showing the user's location on the map as a Blue Dot.
        //A positionUpdater is passed, which will provide the latitude and
        //longtitude coordinates used to locate the user.
        mapView.BlueDot.enable({
            allowImplicitFloorLevel: true,
            smoothing: false,
            positionUpdater: positionUpdater,
            useRotationMode: true,
            showBearing: true
        });

        //Capture when the user clicks on the map.
        //The position that was clicked on is passed into the on method.
        mapView.on(E_SDK_EVENT.CLICK, ({ position }) => {
            //Update the Blue Dot's position to match where the user clicked.
            //In a real app the user's position would be supplied by a device
            //using an indoor positioning system (IPS). To allow the Blue Dot's
            //position to move in this example, cliking on the map is used
            //to simulate user movement.
            console.log(position);
            blueDotPosition.coords = {
                ...blueDotPosition.coords,
                ...position
            };

            //Call the positionUpdater to trigger an update of the Blue Dot's position.
            positionUpdater.update(blueDotPosition);
        });

        //Set the user's initial position to coordinates of the
        //start point, Microsoft.
        blueDotPosition.coords = {
            ...blueDotPosition.coords,
            latitude: directions.instructions[0].node.lat,
            longitude: directions.instructions[0].node.lon
        };

        //Call the positionUpdater to trigger an update of the Blue Dot's position.
        console.log(directions.instructions[0].node.lon);
        positionUpdater.update(blueDotPosition);
    };

    document.getElementById("getDirections")!.onclick = getDirections;

}
init();
