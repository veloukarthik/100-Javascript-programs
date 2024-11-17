const vehicles = [
    { type: 'Car', brand: 'BMW', model: 'x5' },
    { type: 'Car', brand: 'BMW', model: 'x3' },
    { type: 'Car', brand: 'BMW', model: 'x3' },
    { type: 'Bike', brand: 'BMW', model: 'X' },
    { type: 'Car', brand: 'Benz', model: 'EC200' },
    { type: 'Bike', brand: 'Honda', model: 'Hornet' },
    { type: 'Bike', brand: 'Honda', model: 'Activa' },
    { type: 'Car', brand: 'Tata', model: 'Nexon' },
    { type: 'Car', brand: 'Tata', model: 'Curvv' },
    { type: 'Car', brand: 'Tata', model: 'Punch' },
    { type: 'Car', brand: 'Tata', model: 'Tigor' },
    { type: 'Car', brand: 'Tata', model: 'Tiago' },
    { type: 'Car', brand: 'Tata', model: 'Nano' }
];

function groupByTypeAndModel(vehicles) {
    return vehicles.reduce((acc, vehicle) => {
        const { type, brand } = vehicle;

        // Initialize type if it doesn't exist
        if (!acc[type]) {
            acc[type] = {};
        }

        // Initialize model under type if it doesn't exist
        if (!acc[type][brand]) {
            acc[type][brand] = [];
        }

        // Push the vehicle to the correct type and model group
        acc[type][brand].push(vehicle);

        return acc;
    }, {});
}

// const groupedVehicles = groupByTypeAndModel(vehicles);
// console.log(JSON.stringify(groupedVehicles, null, 2));

function removeDuplicatesAndGroup(vehicles) {
    return vehicles.reduce((acc, vehicle) => {
        const { type, brand, ...model } = vehicle;

        // Initialize the type if it doesn't exist
        if (!acc[type]) {
            acc[type] = {};
        }

        // Initialize the brand under the type if it doesn't exist
        if (!acc[type][brand]) {
            acc[type][brand] = new Set(); // Use a Set to prevent duplicate models
        }

        // Add the model to the brand
        acc[type][brand].add(model);

        return acc;
    }, {});
}

// Convert Sets to Arrays in the final output
function formatOutput(groupedData) {
    const formatted = {};
    for (const [type, brands] of Object.entries(groupedData)) {
        formatted[type] = {};
        for (const [brand, models] of Object.entries(brands)) {
            formatted[type][brand] = Array.from(models);
        }
    }
    return formatted;
}

const groupedVehicle = removeDuplicatesAndGroup(vehicles);
const result = formatOutput(groupedVehicle);
console.log(JSON.stringify(result, null, 2));
