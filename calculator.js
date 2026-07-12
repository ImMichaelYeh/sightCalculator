document.getElementById("footerYear").textContent = new Date().getFullYear();

function calculate() {
    console.log("INPUT:");
    // Sight settings
    let elevationClick = document.getElementById("elevationTextBox").value;
    let elevationUnits = document.getElementById("elevationUnitsMillimeters").checked ? "mm" : "in";
    console.log(`elevationClick: ${elevationClick} ${elevationUnits}`);

    let windageClick = document.getElementById("windageTextBox").value;
    let windageUnits = document.getElementById("windageUnitsMillimeters").checked ? "mm" : 'in'
    console.log(`windageClick: ${windageClick} ${windageUnits}`);

    // Shooting info
    let shootingDistance = document.getElementById("shootingDistanceTextBox").value;
    let shootingDistanceUnits = document.getElementById("shootingDistanceUnitsMeters").checked ? "m" : "yd";
    console.log(`shootingDistance: ${shootingDistance} ${shootingDistanceUnits}`);
    
    let eyeToSightDistance = document.getElementById("eyeToSightDistanceTextBox").value;
    let eyeToSightUnits = document.getElementById("eyeToSightDistanceUnitsCentimeters").checked ? "cm" : "in";
    console.log(`eyeToSightDistance: ${eyeToSightDistance} ${eyeToSightUnits}`);

    // Shot info
    let arrowElevationFromCenter = document.getElementById("arrowElevationTextBox").value;
    let arrowElevationFromCenterUnits = document.getElementById("arrowElevationUnitsCentimeters").checked ? "cm" : "in";
    console.log(`arrowElevationFromCenter: ${arrowElevationFromCenter} ${arrowElevationFromCenterUnits}`);

    let arrowWindageFromCenter = document.getElementById("arrowWindageTextBox").value;
    let arrowWindageFromCenterUnits = document.getElementById("arrowWindageUnitsCentimeters").checked ? "cm" : "in";
    console.log(`arrowWindageFromCenter: ${arrowWindageFromCenter} ${arrowWindageFromCenterUnits}`);

    console.log("\nCONVERTED VARIABLES:");
    // Convert sight settings input into mm
    if (!document.getElementById("elevationUnitsMillimeters").checked) {
        elevationClick *= 25.4;
    }
    console.log(`elevationClick: ${elevationClick}mm`);

    if (!document.getElementById("windageUnitsMillimeters").checked) {
        windageClick *= 25.4;
    }
    console.log(`windageClick: ${windageClick}mm`)
    
    // Convert shooting info input into mm
    if (document.getElementById("shootingDistanceUnitsMeters").checked) {
        shootingDistance *= 1000;
    }
    else {
        shootingDistance *= 914.4;
    }
    console.log(`shootingDistance: ${shootingDistance}mm`);

    if (document.getElementById("eyeToSightDistanceUnitsCentimeters").checked) {
        eyeToSightDistance *= 10;
    }
    else {
        eyeToSightDistance *= 25.4;
    }
    console.log(`eyeToSightDistance: ${eyeToSightDistance}mm`);

    // Convert sight settings input into mm
    if (document.getElementById("arrowElevationUnitsCentimeters").checked) {
        arrowElevationFromCenter *= 10;
    }
    else {
        arrowElevationFromCenter *= 25.4;
    }
    console.log(`arrowElevationFromCenter: ${arrowElevationFromCenter}mm`);

    if (document.getElementById("arrowWindageUnitsCentimeters").checked) {
        arrowWindageFromCenter *= 10;    
    }
    else {
        arrowWindageFromCenter *= 25.4;
    }
    console.log(`arrowWindageFromCenter: ${arrowWindageFromCenter}mm`);

    // Calculations
    let sightElevationAngle = Math.atan(arrowElevationFromCenter/shootingDistance);
    console.log(`sightElevationAngle: ${sightElevationAngle}`);
    let sightWindageAngle = Math.atan(arrowWindageFromCenter/shootingDistance);
    console.log(`sightWindageAngle: ${sightWindageAngle}`);

    let sightElevationChange = Math.tan(sightElevationAngle) * eyeToSightDistance;
    console.log(`sightElevationChange: ${sightElevationChange}`);
    let sightWindageChange = Math.tan(sightWindageAngle) * eyeToSightDistance;
    console.log(`sightWindageChange: ${sightWindageChange}`);

    let calculatedElevationClicks = sightElevationChange / elevationClick;
    let calculatedWindageClicks = sightWindageChange / windageClick;
    calculatedElevationClicks = Math.round(calculatedElevationClicks);
    console.log(`calculatedElevationClicks: ${calculatedElevationClicks}`);
    calculatedWindageClicks = Math.round(calculatedWindageClicks);
    console.log(`calculatedWindageClicks: ${calculatedWindageClicks}`);

    let elevationOutput = "";
    if (calculatedElevationClicks > 0) {
        elevationOutput = `You need to move your sight UP ${calculatedElevationClicks} clicks.\n`;
    }
    else if (calculatedElevationClicks < 0) {
        calculatedElevationClicks *= -1
        elevationOutput = `You need to move your sight DOWN ${calculatedElevationClicks} clicks.\n`;
    }

    let windageOutput = "";
    if (calculatedWindageClicks > 0) {
        windageOutput += `You need to move your sight RIGHT ${calculatedWindageClicks} clicks.\n`;
    }
    else if (calculatedWindageClicks < 0) {
        calculatedWindageClicks *= -1
        windageOutput += `You need to move your sight LEFT ${calculatedWindageClicks} clicks.\n`;
    }
    
    document.getElementById("elevationResultText").innerHTML = elevationOutput;
    document.getElementById("windageResultText").innerHTML = windageOutput;

    console.log("-----------------------------------------");
}