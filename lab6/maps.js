let coordinatesMap = [40.96, -93.2] 
let zoomLevel = 3

let map = L.map('bridge-map').setView(coordinatesMap, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

Bridges = [
    {"Name": "Verrazano-Narrows Bridge", "City, State": "New York, NY", "Span": "1298.4", "Location": [40.6066, -74.0447]},
    {"Name": "Golden Gare Bridge", "City, State": "San Francisco and Marin, CA", "Span": "1280.2", "Location": [37.8199, -122.4783]},
    {"Name": "Mackinac Bridge", "City, State": "Mackinaw and St Ignace, MI", "Span": "1158.0", "Location": [45.8174, -84.7278]},
    {"Name": "George Washington Bridge", "City, State": "New York, NY and New Jersey, NJ", "Span": "1067.0", "Location": [40.8517, -73.9527]},
    {"Name": "Tacoma Narrows Bridge", "City, State": "Tacoma and Kitsap, WA", "Span": "853.44", "Location": [47.2690, -122.5517]}
]
let iconB = L.icon({
    iconUrl: 'brid.png',
    iconSize: [34,30],
    shadowSize: [20,20]
})

Bridges.forEach(function(bridge) {
    let markerText = `${bridge.Name}<br>Span: ${bridge.Span}`
L.marker(bridge.Location, {icon: iconB}).bindPopup(markerText).addTo(map)
})

