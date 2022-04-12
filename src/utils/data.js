import Home from "../views/Home";
import List from "../views/List";
import Item1 from "../views/Item1"

class Route {
    constructor(path, title, element){
        this.path = path;
        this.title= title;
        this.element= element;
        //this.value = props;
    }
}

export let routes = [
    new Route("/", "Home", Home),
    new Route("films", "Films", List),
    new Route("people", "People", List),
    new Route("vehicles", "Vehicles", List),
    new Route("locations", "Locations", List),
    new Route("species", "Species", List),
    //new Route("test", "Test", (props) => <div><h1>Hello World</h1></div>),
    new Route("films/:id", null, Item1, {
        displayProperties: [
            "id",
            "title",
            "original_title",
            "description",
            "director",
            "producer",
            "release_date",
        ]
    }),
    new Route ("people/:id", null, Item1, {
        displayProperties: ["id", "name", "gender", "eye_color", "hair_color"]
    }),
    new Route ("vehicles/:id", null, Item1, {
        displayProperties: ["id", "name", "description", "vehicle_class", "length"]
    }),
    new Route ("locations/:id", null, Item1, {
        displayProperties: ["id", "name", "climate", "terrain", "surface_water"]
    }),
    new Route ("species/:id", null, Item1, {
        displayProperties: [
            "id",
            "name",
            "classification",
            "eye_colors",
            "hair_colors",
        ],
    }),
];
