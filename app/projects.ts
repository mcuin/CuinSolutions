import {default as LiftingDiceIcon} from "./assets/liftingdiceiconv1.svg";
import {default as Mobileappiconplaceholder} from "./assets/mobileappiconplaceholder.svg";
import {default as MacrosManagerIcon} from "./assets/macrosmanagericon.svg";

const projects = [
    {id: 0, projectTitle: "Lifting Dice", projectIcon: LiftingDiceIcon, projectStatus: "Released - V1", description: "Roll to build a random work out based on muscle groups and equipment.", link: "/liftingdice"},
    {id: 1, projectTitle: "FoodieRoller", projectIcon: Mobileappiconplaceholder, projectStatus: "In Development", description: "Roll to build a random meal based on your dietary preferences and allergies", link: ""},
    {id: 2, projectTitle: "MacrosManager", projectIcon: MacrosManagerIcon, projectStatus: "Paused", description: "Calculte and track your macronutrients on the go.", link: ""},
];

export default projects;