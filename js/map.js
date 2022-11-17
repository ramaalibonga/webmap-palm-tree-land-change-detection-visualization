const  map = L.map('map').setView([-6.814858434907897, 39.277525351331697], 20);
const  baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Releaf',
maxZoom: 28,
minZoom:14
}).addTo(map);
//L.control.layers(baseLayer).addTo(map);
const scale = L.control.scale().addTo(map);
const legend = L.control.Legend({
            position: "bottomright",
            collapsed: false,
            symbolWidth: 24,
            opacity: 1,
            column: 2,
            legends: [{
                label: "symbol1",
                type: "image",
                url: "",
            }, {
                label: "symbol2",
                type: "image",
                url: ""
            }]
        }).addTo(map);
