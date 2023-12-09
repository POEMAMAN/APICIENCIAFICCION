require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const images = [
    "./src/api/images/AbadonGate.jpeg",
    "./src/api/images/Auberon.jpeg",
    "./src/api/images/Babylon'sAshes.jpeg",
    "./src/api/images/BrigntnessReef.jpeg",
    "./src/api/images/CalibanWAr.jpeg",
    "./src/api/images/CibolaERase.jpeg",
    "./src/api/images/DarkFall.jpeg",
    "./src/api/images/DAwnRobots.jpeg",
    "./src/api/images/DiosEmpereadorOfDune.jpeg",
    "./src/api/images/Dune.jpeg",
    "./src/api/images/DuneCapitularHouse.jpeg",
    "./src/api/images/DuneHeretics.jpeg",
    "./src/api/images/DuneSons.jpeg",
    "./src/api/images/EArth.jpeg",
    "./src/api/images/EternityEnd.jpeg",
    "./src/api/images/Exiles.jpeg",
    "./src/api/images/FoundationAndEArth.jpeg",
    "./src/api/images/FoundationAndEmpire.jpeg",
    "./src/api/images/FoundationPrelude.jpeg",
    "./src/api/images/fundacion.jpeg",
    "./src/api/images/FuzzyNAtion.jpeg",
    "./src/api/images/InfinitosShore.jpeg",
    "./src/api/images/InTheStellarSand.jpeg",
    "./src/api/images/IRobot.jpeg",
    "./src/api/images/LeviatahnWAkes.jpeg",
    "./src/api/images/LeviathanFalls.jpeg",
    "./src/api/images/LockIn.jpeg",
    "./src/api/images/mesiash dune.jpeg",
    "./src/api/images/Nemesis.jpeg",
    "./src/api/images/NemesisGames.jpeg",
    "./src/api/images/OldMan`sWar.jpeg",
    "./src/api/images/PersepolisRisisng.jpeg",
    "./src/api/images/PositronicMan.jpeg",
    "./src/api/images/PropiosDioses.jpeg",
    "./src/api/images/RedShirts.jpeg",
    "./src/api/images/RobotsAndEmpire.jpeg",
    "./src/api/images/RobotsDreams.jpeg",
    "./src/api/images/SecondFoundation.jpeg",
    "./src/api/images/SolarShip.jpeg",
    "./src/api/images/SpaceRounds.jpeg",
    "./src/api/images/StarterVillain.jpeg",
    "./src/api/images/SteelCaves.jpeg",
    "./src/api/images/StelarWAve.jpeg",
    "./src/api/images/TheBicentenaryMan.jpeg",
    "./src/api/images/TheCompletRobot.jpeg",
    "./src/api/images/TheConsumingFire.jpeg",
    "./src/api/images/TheDispatcher.jpeg",
    "./src/api/images/TheEndOfAllThings.jpeg",
    "./src/api/images/TheFoundationLimits.jpeg",
    "./src/api/images/TheFoundationTriump.jpeg",
    "./src/api/images/TheGhostBrigades.jpeg",
    "./src/api/images/TheHumanDivision.jpeg",
    "./src/api/images/TheLastEmperox.jpeg",
    "./src/api/images/TheLastQuestion.jpeg",
    "./src/api/images/TheLostColony.jpeg",
    "./src/api/images/TheNakedSun.jpeg",
    "./src/api/images/TheOldGuard.jpeg",
    "./src/api/images/ThePostman.jpeg",
    "./src/api/images/ThePracticeEffect.jpeg",
    "./src/api/images/TheRebellionOfThePupils.jpeg",
    "./src/api/images/THeSkyLimits.jpeg",
    "./src/api/images/TiamatAnger.jpeg",
    "./src/api/images/ToTheFoundation.jpeg",
    "./src/api/images/UnGuijarroEnElCielo.jpeg",
    "./src/api/images/VisionsRobots.jpeg",
    "./src/api/images/Zoe`sTale.jpeg"
]


const image =   "./src/api/images/u.jpg";
async function run(x) {
    for (const image of images) { }
    const result = await cloudinary.uploader.upload(image);
    console.log('result');
}
run();

// const image = "./src/api/images/IRobot.jpeg";

// cloudinary.uploader.upload(image).then(result => {
//     console.log('result');
// });







