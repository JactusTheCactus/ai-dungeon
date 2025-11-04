import { log } from "./modules/functions.js";
import { outLog } from "./modules/variables.js";
function addStoryCard(k, e, ty, ti, d, o) {
    log(JSON.stringify({
        id: "_",
        keys: k,
        entry: e,
        type: ty,
        title: ti,
        description: d,
        options: o
    } //, null, "\t"
    ));
    return;
}
const _ = String.fromCodePoint(0x0323);
const [[t, T], [a, A], [s, S], [o, O], [i, I]] = [
    0x00FE,
    0x00E6,
    0x017F,
    0x00F3,
    0x00ED
].map((n) => {
    const N = String.fromCodePoint(n);
    return [N, N.toUpperCase()];
});
const powers = [
    [S, "o", _, "li", s],
    [S, "k", i, _, "a"],
    ["To", _, "nit"],
    ["Pe", _, "tra"],
    ["I", _, "gni", s],
    [T, a, _, "l", a, s],
    [A, _, "nem", o, s]
].map((n) => n.join(""));
const [solis, skia, tonit, petra, ignis, talas, anemos] = powers;
const cards = [
    {
        name: solis,
        element: "Light",
        vulnerability: skia,
        tier: 1,
        powers: [
            "Photokinesis",
            "Create Life",
            "Healing Factor",
            "Numb To Most Pain",
            "Radiation Immunity",
            "Photosynthesis",
            "Lasers",
            "Invisibility",
            "Illusion Creation",
            "Light Absorption"
        ]
    },
    {
        name: skia,
        element: "Dark",
        vulnerability: solis,
        tier: 1,
        powers: [
            "Erebokinesis",
            "Killing Touch",
            "Necromancy",
            "High Pain Tolerance",
            "Night Vision",
            "Cause Blindness",
            "Fear Inducement",
            "Travel Through Shadows / Use Shadows As Portals",
            "Create Constructs Out Of Shadows"
        ]
    },
    {
        name: tonit,
        element: "Energy",
        vulnerability: "Tier-Based",
        tier: 2,
        powers: [
            "Electrokinesis",
            "Immunity To Electricity",
            "Body Is A Superconductor",
            "Electromagnetism",
            "Electronic Disruption"
        ]
    },
    {
        name: petra,
        element: "Earth",
        vulnerability: anemos,
        tier: 3,
        powers: [
            "Geokinesis",
            "Denser Bones",
            "Thicker Skin",
            "Seismic Sense"
        ]
    },
    {
        name: ignis,
        element: "Fire",
        vulnerability: talas,
        tier: 3,
        powers: [
            "Pyrokinesis",
            "Immunity To Fire"
        ]
    },
    {
        name: talas,
        element: "Water",
        vulnerability: petra,
        tier: 3,
        powers: [
            "Hydrokinesis",
            "Water Breathing"
        ]
    },
    {
        name: anemos,
        element: "Air",
        vulnerability: ignis,
        tier: 3,
        powers: [
            "Aerokinesis",
            "Flight"
        ]
    }
];
function initialize() {
    console.log("***");
    cards.forEach((n) => {
        const OUT = [
            n.name,
            "=".repeat(String(n.name).normalize().length),
            ...[
                ["Tier", n.tier],
                ["Element", n.element],
                ["Vulnerability", n.vulnerability]
            ].map(x => x.join(": "))
        ].join("\n");
        const [EN, DESC] = Array(2).fill(OUT);
        console.log(OUT);
        /*addStoryCard(
            [n.name, n.element, n.vulnerability],
            EN,
            "Superpower Class",
            n.name,
            DESC,
            { returnCard: false }
        )*/
        console.log("***");
    });
}
initialize();
// console.log(outLog.join("\n"))
