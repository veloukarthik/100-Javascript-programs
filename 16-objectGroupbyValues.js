const vehicles = [
    { type: 'Car', brand: 'BMW', model: 'x5' },
    { type: 'Car', brand: 'BMW', model: 'x3' },
    { type: 'Car', brand: 'BMW', model: 'x3' },
    { type: 'Bike', brand: 'BMW', model: 'X' },
    { type: 'Car', brand: 'Benz', model: 'EC200' },
    { type: 'Bike', brand: 'Honda', model: 'Hornet' },
    { type: 'Bike', brand: 'Honda', model: 'Activa' },
];

function groupByTypeAndModel(vehicles) {
    return vehicles.reduce((acc, vehicle) => {
        const { type, model } = vehicle;

        // Initialize type if it doesn't exist
        if (!acc[type]) {
            acc[type] = {};
        }

        // Initialize model under type if it doesn't exist
        if (!acc[type][model]) {
            acc[type][model] = [];
        }

        // Push the vehicle to the correct type and model group
        acc[type][model].push(vehicle);

        return acc;
    }, {});
}

const groupedVehicles = groupByTypeAndModel(vehicles);
console.log(JSON.stringify(groupedVehicles, null, 2));
