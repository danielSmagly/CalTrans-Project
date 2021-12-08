import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';


export default function BMPReview() {

    const [category, setCategory] = React.useState('');
    const handleChangeCat = (event) => {
        setCategory(event.target.value)
    }

    const [type, setType] = React.useState('');
    const handleChangeType = (event) => {
        setType(event.target.value);
    }

    const [cQ, setcQ] = React.useState('');
    const handleChangecQ = (event) => {
        setcQ(event.target.value);
    }


    var TypeQuestion1, TypeQuestion2, TypeQuestion3, TypeQuestion4, TypeQuestion5, TypeQuestion6,
        TypeQuestion7, TypeQuestion8, TypeQuestion9, TypeQuestion10, TypeQuestion11, TypeQuestion12
        , TypeQuestion13, TypeQuestion14, TypeQuestion15 = null;
    if (category.includes("Soil Stabilization")) {
        TypeQuestion1 = "SS-1: Scheduling"
        TypeQuestion2 = "SS-2: Preservation of Property/Preservation of Existing Vegetation"
        TypeQuestion3 = "SS-3: Hydraulic Mulch"
        TypeQuestion4 = "SS-4: Hydroseeding"
        TypeQuestion5 = "SS-5: Soil Binder"
        TypeQuestion6 = "SS-6: Straw Mulch"
        TypeQuestion7 = "SS-7: Geotextiles, Plastic Covers, Erosion Control Blankets/Mats"
        TypeQuestion8 = "SS-8: Wood Mulching"
        TypeQuestion9 = "SS-9: Earth Dikes/Drainage Swales/Lined Ditches"
        TypeQuestion10 = "SS-10: Outlet Protection/Velocity Dissipatin Devices"
        TypeQuestion11 = "SS-11: Slope Drains"
        TypeQuestion12 = "SS-12: Streambank Stabilization"
    } else if (category.includes("Sediment Control")) {
        TypeQuestion1 = "SC-1: Temporary Slit Fence"
        TypeQuestion2 = "SC-2: Temporary Sediment Basin"
        TypeQuestion3 = "SC-3: Temporary Sediment Trap"
        TypeQuestion4 = "SC-4: Temporary Check Dam"
        TypeQuestion5 = "SC-5: Temporary Fiber Rolls"
        TypeQuestion6 = "SC-6: Temporary Gravel Bag Berm"
        TypeQuestion7 = "SC-7: Street Sweeping"
        TypeQuestion8 = "SC-8: Temporary Sandbag Barrier"
        TypeQuestion9 = "SC-9: Temporary Straw Bale Barrier"
        TypeQuestion10 = "SC-10: Temporary Drain Inlet Protection"
    } else if (category.includes("Tracking Control")) {
        TypeQuestion1 = "TC-1: Temporary Construction Entrance"
        TypeQuestion2 = "TC-2: Stabilized Construction Roadway"
        TypeQuestion3 = "TC-3: Temporary Entrance/Outlet Tire Wash"
    } else if (category.includes("Wind Erosion Control")) {
        TypeQuestion1 = "WE-1: Wind Erosion Control"
    } else if (category.includes("Non-Storm Water")) {
        TypeQuestion1 = "NS-1: Water Control and Conservation"
        TypeQuestion2 = "NS-2: Dewatering"
        TypeQuestion3 = "NS-3: Paving, Sealing, Sawcutting, and Grinding Operations"
        TypeQuestion4 = "NS-4: Temporary Stream Crossing"
        TypeQuestion5 = "NS-5: Clear Water Diversion"
        TypeQuestion6 = "NS-6: Illicit Connection and Illegal Discharge Detection Reporting"
        TypeQuestion7 = "NS-7: Potable Water/Irrigation"
        TypeQuestion8 = "NS-8: Vehicle and Equipment Cleaning"
        TypeQuestion9 = "NS-9: Vehicle and Equipment Fueling"
        TypeQuestion10 = "NS-10: Vehicle and Equipment Maintenance"
        TypeQuestion11 = "NS-11: Pile Driving Operations"
        TypeQuestion12 = "NS-12: Concrete Curing"
        TypeQuestion13 = "NS-13: Material and Equipment Use Over Water"
        TypeQuestion14 = "NS-14: Concrete Finishing"
        TypeQuestion15 = "NS-15: Structure Demolition/Removal Over or Adjecent to Water"
    } else if (category.includes("Waste Management")) {
        TypeQuestion1 = "WM-1: Material Delivery and Storage"
        TypeQuestion2 = "WM-2: Material Use"
        TypeQuestion3 = "WM-3: Stockpile Management"
        TypeQuestion4 = "WM-4: Spill Prevention and Control"
        TypeQuestion5 = "WM-5: Solid Waste Management"
        TypeQuestion6 = "WM-6: Hazardous Waste Management"
        TypeQuestion7 = "WM-7: Contaminated Soil Management"
        TypeQuestion8 = "WM-8: Concrete Waste Management/Temporary Concrete Washout Facility/Termporary Concrete Washout Portable"
        TypeQuestion9 = "WM-9: Sanitary/Septic Waste Management"
        TypeQuestion10 = "WM-10: Liquid Waste Maintenance"
    }


    var ChecklistQ1, ChecklistQ2, ChecklistQ3, ChecklistQ4, ChecklistQ5, ChecklistQ6 = null;


    // ------ SOIL STABILIZATION ------ //
    if (type === "SS-1: Scheduling") {
        ChecklistQ1 = "SS-1.1: Are BMPs appropriately scheduled to prevent or reduce runoff?"
    } else if (type === "SS-2: Preservation of Property/Preservation of Existing Vegetation") {
        ChecklistQ1 = "SS-2.1: Is existing vegitation appropriately preserved?"
        ChecklistQ2 = "SS-2.2: Is preservation of existing vegetation maintained correctly?"
    } else if (type === "SS-3: Hydraulic Mulch") {
        ChecklistQ1 = "SS-3.1: Is the hydraulic mulch used for the correct application?"
        ChecklistQ2 = "SS-3.2: Is the hydraulic mulch installed correctly?"
        ChecklistQ3 = "SS-3.3: Is the hydraulic mulch made of the correct materials?"
        ChecklistQ4 = "SS-3.4: Is the hydraulic mulch maintained correctly?"
    } else if (type === "SS-4: Hydroseeding") {
        ChecklistQ1 = "SS-4.1: Is the hydroseeding used for the correct application?"
        ChecklistQ2 = "SS-4.2: Is the hydroseeding applied correctly?"
        ChecklistQ3 = "SS-4.3: Are hydroseeding materials appropriate?"
        ChecklistQ4 = "SS-4.4: Is the hydroseeding maintained correctly?"
    } else if (type === "SS-5: Soil Binder") {
        ChecklistQ1 = "SS-5.1: Are the soil binders used for the correct application?"
        ChecklistQ2 = "SS-5.2: Are the soil binders installed correctly?"
        ChecklistQ3 = "SS-5.3: Are the soil binders made of the correct materials?"
        ChecklistQ4 = "SS-5.4: Are the soil binders maintained correctly?"
    } else if (type === "SS-6: Straw Mulch") {
        ChecklistQ1 = "SS-6.1: Is the straw mulch used for the correct application?"
        ChecklistQ2 = "SS-6.2: Is the straw mulch installed correctly?"
        ChecklistQ3 = "SS-6.3: Is the straw mulch made of the correct materials?"
        ChecklistQ4 = "SS-6.4: Is the straw mulch maintained correctly?"
    } else if (type === "SS-7: Geotextiles, Plastic Covers, Erosion Control Blankets/Mats") {
        ChecklistQ1 = "SS-7.1: Are the geotextiles, plastic covers, erosion control blankets/mats used for the correct application?"
        ChecklistQ2 = "SS-7.2: Are the geotextiles, plastic covers, erosion control blankets/mats installed correctly?"
        ChecklistQ3 = "SS-7.3: Are the geotextiles, plastic covers, erosion control blankets/mats made of the correct materials (temporary covers, erosion control blankets, rolled erosion control products)?"
        ChecklistQ4 = "SS-7.4: Are the geotextiles, plastic covers, erosion control blankets/mats maintained correctly?"
    } else if (type === "SS-8: Wood Mulching") {
        ChecklistQ1 = "SS-8.1: Is the wood mulching used for the correct application?"
        ChecklistQ2 = "SS-8.2: Is the wood mulching installed correctly?"
        ChecklistQ3 = "SS-8.3: Is the wood mulching made of the correct materials?"
        ChecklistQ4 = "SS-8.4: Is the wood mulching maintained correctly?"
    } else if (type === "SS-9: Earth Dikes/Drainage Swales/Lined Ditches") {
        ChecklistQ1 = "SS-9.1: Are the earth dikes/drainage swales/lined ditches used for the correct application?"
        ChecklistQ2 = "SS-9.2: Are the earth dikes/drainage swales/lined ditches installed correctly?"
        ChecklistQ3 = "SS-9.3: Are the earth dikes/drainage swales/lined ditches made of the correct materials?"
        ChecklistQ4 = "SS-9.4: Are the earth dikes/drainage swales/lined ditches maintained correctly?"
    } else if (type === "SS-10: Outlet Protection/Velocity Dissipatin Devices") {
        ChecklistQ1 = "SS-10.1: Are the outlet protection/velocity dissipation devices used for the correct application?"
        ChecklistQ2 = "SS-10.2: Are the outlet protection/velocity dissipation devices installed correctly?"
        ChecklistQ3 = "SS-10.3: Are the outlet protection/velocity dissipation devices made of the correct materials?"
        ChecklistQ4 = "SS-10.4: Are the outlet protection/velocity dissipation devices maintained correctly?"
    } else if (type === "SS-11: Slope Drains") {
        ChecklistQ1 = "SS-11.1: Are the slope drains used for the correct application?"
        ChecklistQ2 = "SS-11.2: Are the slope drains installed correctly?"
        ChecklistQ3 = "SS-11.3: Are the slope drains made of the correct materials?"
        ChecklistQ4 = "SS-11.4: Are the slope drains maintained correctly?"
    } else if (type === "SS-12: Streambank Stabilization") {
        ChecklistQ1 = "SS-12.1: Is the streambank stabilization used for the correct application?"
        ChecklistQ2 = "SS-12.2: Is the streambank stabilization installed correctly?"
        ChecklistQ3 = "SS-12.3: Is the streambank stabilization made of the correct materials?"
        ChecklistQ4 = "SS-12.4: Is the streambank stabilization maintained correctly?"
    }


    // ------ Sediment Control ------ //
    else if (type === "SC-1: Temporary Slit Fence") {
        ChecklistQ1 = "SC-1.1: Is the temporary silt fence used for the correct application?"
        ChecklistQ2 = "SC-1.2: Is the temporary silt fence installed correctly?"
        ChecklistQ3 = "SC-1.3: Is the temporary reinforced silt fence installed correctly?"
        ChecklistQ4 = "SC-1.4: Does the temporary silt fence consist of the correct materials (fabric, posts)?"
        ChecklistQ5 = "SC-1.5: Does the temporary silt reinforced fence consist of the correct materials (fabric, posts)?"
        ChecklistQ6 = "SC-1.6: Is the temporary silt fence or temporary silt reinforced fence maintained correctly?"
    } else if (type === "SC-2: Temporary Sediment Basin") {
        ChecklistQ1 = "SC-2.1: Is the temporary sediment basin installed correctly?"
        ChecklistQ2 = "SC-2.2: Is the temporary sediment basin maintained correctly?"
    } else if (type === "SC-3: Temporary Sediment Trap") {
        ChecklistQ1 = "SC-3.1: Is the temporary sediment trap applied correctly?"
        ChecklistQ2 = "SC-3.2: Is the temporary sediment trap maintained correctly?"
    } else if (type === "SC-4: Temporary Check Dam") {
        ChecklistQ1 = "SC-4.1: Are the check dams used for the correct application?"
        ChecklistQ2 = "SC-4.2: If fiber rolls are used as check dams, is a type 1 temporary check dam installed correctly?"
        ChecklistQ3 = "SC-4.3: If gravel-filled bags are used as check dams, is a type 2 temporary check dam installed correctly?"
        ChecklistQ4 = "SC-4.4: Are the check dams made of the correct materials?"
        ChecklistQ5 = "SC-4.5: Are the check dams maintained correctly?"
    } else if (type === "SC-5: Temporary Fiber Rolls") {
        ChecklistQ1 = "SC-5.1: Are the fiber rolls used for the correct application (temporary check dam, temporary drainage inlet protection, temporary linear barrier, large sediment barrier)?"
        ChecklistQ2 = "SC-5.2: Are the fiber rolls properly installed correctly?"
        ChecklistQ3 = "SC-5.3: Are the fiber rolls anchored correctly?"
        ChecklistQ4 = "SC-5.4: Are the fiber rolls made out of the correct material?"
        ChecklistQ5 = "SC-5.5: Are the fiber rolls maintained correctly?"
    } else if (type === "SC-6: Temporary Gravel Bag Berm") {
        ChecklistQ1 = "SC-6.1: Is the gravel bag berm installed correctly?"
        ChecklistQ2 = "SC-6.2: Is the gravel bag berm made of the correct materials?"
        ChecklistQ3 = "SC-6.3: Is the gravel bag berm maintained correctly?"
    } else if (type === "SC-7: Street Sweeping") {
        ChecklistQ1 = "SC-7.1: Are the streets swept to prevent unauthorized non-storm water discharges from reaching surface water of MS4 drainage systems?"
        ChecklistQ2 = "SC-7.2: If street sweeping is required, is a street sweeper available at all times?"
        ChecklistQ3 = "SC-7.3: Is the sediment collected and disposed on the job site protected against erosion?"
    } else if (type === "SC-8: Temporary Sandbag Barrier") {
        ChecklistQ1 = "SC-8.1: Is the sandbag barrier installed correctly?"
        ChecklistQ2 = "SC-8.2: Is the sandbag barrier maintained correctly?"
    } else if (type === "SC-9: Temporary Straw Bale Barrier") {
        ChecklistQ1 = "SC-9.1: Is the straw bale barrier installed correctly?"
        ChecklistQ2 = "SC-9.2: Is the straw bale barrier maintained correctly?"
    } else if (type === "SC-10: Temporary Drain Inlet Protection") {
        ChecklistQ1 = "SC-10.1: Is the drainage inlet protection used for the correct application (Type 1, 2, 3A, 3B, 4A, 4B, 5, 6A, or 6B)?"
        ChecklistQ2 = "SC-10.2: Is the drainage inlet protection installed correctly (Type 1, 2, 3A, 3B, 4A, 4B, 5, 6A, or 6B)?"
        ChecklistQ3 = "SC-10.3: Is the drainage inlet protection made of the correct materials (gravel-filled bag, rigid plastic barrier, sediment filter bag, foam barrier, gravel-filled bag berm, erosion control blanket, linear barrier)?"
        ChecklistQ4 = "SC-10.4: Is the drainage inlet protection maintained correctly?"
    }


    // ------ TRACKING CONTROL ------ //
    else if (type === "TC-1: Temporary Construction Entrance") {
        ChecklistQ1 = "TC-1.1: Is the temporary construction entrance used for the correct application?"
        ChecklistQ2 = "TC-1.2: Is the temporary construction entrance installed correctly?"
        ChecklistQ3 = "TC-1.3: Does the temporary construction entrance consist of the correct materials (Type 1 or Type 2)?"
        ChecklistQ4 = "TC-1.4: Is the temporary construction entrance maintained correctly?"
    } else if (type === "TC-2: Stabilized Construction Roadway") {
        ChecklistQ1 = "TC-2.1: Is the stabilized construction roadway used for the correct application?"
        ChecklistQ2 = "TC-2.2: Is the stabilized construction roadway installed correctly?"
        ChecklistQ3 = "TC-2.3: Does the stabilized construction roadway consist of the correct materials?"
        ChecklistQ4 = "TC-2.4: Is the stabilized construction roadway maintained correctly?"
    } else if (type === "TC-3: Temporary Entrance/Outlet Tire Wash") {
        ChecklistQ1 = "TC-3.1: Is the temporary entrance/outlet tire wash used for the correct application?"
        ChecklistQ2 = "TC-3.2: Is the temporary entrance/outlet tire wash installed correctly?"
        ChecklistQ3 = "TC-3.3: Does the temporary entrance/outlet tire wash consist of the correct materials/equipment?"
        ChecklistQ4 = "TC-3.4: Is the temporary entrance/outlet tire wash maintained correctly?"
    }

    // ------ WIND Erosion CONTROL ------ //
    else if (type === "WE-1: Wind Erosion Control") {
        ChecklistQ1 = "WE-1.1: Is wind erosion control implemented for active and inactive stockpiles subject to wind erosion?"
        ChecklistQ2 = "WE-1.2: Is wind erosion control installed correctly?"
        ChecklistQ3 = "WE-1.3: Are materials used for wind erosion control correct?"
        ChecklistQ4 = "WE-1.4: Is wind erosion control maintained correctly?"
    }

    // ------ NON STORM WATER ------ //
    else if (type === "NS-1: Water Control and Conservation") {
        ChecklistQ1 = "NS-1.1: Are the water conservation practices being applied correctly?"
        ChecklistQ2 = "NS-1.2: Are the water conservation practices implemented correctly?"
        ChecklistQ3 = "NS-1.3: Are hoses equipped with a positive shutoff valve?"
    } else if (type === "NS-2: Dewatering") {
        ChecklistQ1 = "NS-2.1: Are dewatering operations being correctly applied to control non-storm water discharges during construction?"
        ChecklistQ2 = "NS-2.2: Are dewatering operations being implemented correctly?"
        ChecklistQ3 = "NS-2.3: Are dewatering operations maintained correctly?"
    } else if (type === "NS-3: Paving, Sealing, Sawcutting, and Grinding Operations") {
        ChecklistQ1 = "NS-3.1: Are paving and grinding operations being correctly applied to non-storm water sidecharges during construction?"
        ChecklistQ2 = "NS-3.2: Are paving and grinding operations implemented correctly (stockpile management, paving/sealing/sawcutting/grooving/grinding, thermoplastic striping and pavement markers, air pollution control, dust control)?"
        ChecklistQ3 = "NS-3.3: Are linear sediment barriers and covers repaired or replaced to keep them functioning properly?"
        ChecklistQ4 = "NS-3.4: Has sediment accumulated to 1/3 of the linear barrier height removed?"
    } else if (type === "NS-4: Temporary Stream Crossing") {
        ChecklistQ1 = "NS-4.1: Is the temporary stream crossing appropiately applied?"
        ChecklistQ2 = "NS-4.2: Is the temporary stream crossing implemented correctly?"
        ChecklistQ3 = "NS-4.3: Is the temporary stream crossing maintained correctly?"
    } else if (type === "NS-5: Clear Water Diversion") {
        ChecklistQ1 = "NS-5.1: Is the clear water diversion appropiately applied?"
        ChecklistQ2 = "NS-5.2: Is the clear water diversion implemented correctly?"
        ChecklistQ3 = "NS-5.3: Is the clear water diversion maintained correctly?"
    } else if (type === "NS-6: Illicit Connection and Illegal Discharge Detection Reporting") {
        ChecklistQ1 = "NS-6.1: Are there any instances of an observed illicit connection or illegal discharge during the field BMP review?"
    } else if (type === "NS-7: Potable Water/Irrigation") {
        ChecklistQ1 = "NS-7.1: Is the potable water/irrigation BMP correctly applied to control non-storm water discharges during construction?"
        ChecklistQ2 = "NS-7.2: Is the potable water/irrigation BMP implemented correctly?"
        ChecklistQ3 = "NS-7.3: Is the potable water/irrigation BMP maintained correctly?"
    } else if (type === "NS-8: Vehicle and Equipment Cleaning") {
        ChecklistQ1 = "NS-8.1: Are vehicle and equipment cleaning processes"
        ChecklistQ2 = "NS-8.2: Are vehicle and equipment cleaning"
        ChecklistQ3 = "NS-8.3: Are vehicle and equipment cleaning processes"
        ChecklistQ4 = "NS-8.4: Are vehicle and equipment cleaning"
        ChecklistQ5 = "NS-8.5: Are vehicle and equipment cleaning"
    } else if (type === "NS-9: Vehicle and Equipment Fueling") {
        ChecklistQ1 = "NS-9.1: Is the vehicle and equipment fueling being correctly applied to control non-storm water discharges during construction?"
        ChecklistQ2 = "NS-9.2: Is the fueling of vehicles and equipment performed at least 100 feet from concentrated flows of stormwater drainage courses, and inlets if within the floodplain and at least 50 feet if outside the flooplain, unless otherwise authorized?"
        ChecklistQ3 = "NS-9.3: Are fuels in water tight containers (with appropriate secondary containment to prevent any spillage or leakage) or in a storage shed (completely enclosed)?"
        ChecklistQ4 = "NS-9.4: Is vehicle and equipment fueling implemented correctly?"
        ChecklistQ5 = "NS-9.5: Is vehicle and equipment fueling maintained correctly?"
    } else if (type === "NS-10: Vehicle and Equipment Maintenance") {
        ChecklistQ1 = "NS-10.1: Is the vehicle and equipment maintenance correctly applied to control non-storm water discharges during construction?"
        ChecklistQ2 = "NS-10.2: Is the vehicle and equipment maintenance performed at least 100 feet from concentrated flows of stormwater drainage courses, and inlets if within the floodplain and at least 50 feet if outside the flooplain, unless otherwise authorized?"
        ChecklistQ3 = "NS-10.3: Are oil, grease, and fuel prevented from leaking onto the ground, storm drains, or surface water?"
        ChecklistQ4 = "NS-10.4: Is vehicle and equipment maintenance implemented correctly?"
        ChecklistQ5 = "NS-10.5: Are vehicle and equipment maintenance materials and tools maintained correctly?"
    } else if (type === "NS-11: Pile Driving Operations") {
        ChecklistQ1 = "NS-11.1: Are pile driving operations BMPs correctly applied to control non-storm water discharges during construction?"
        ChecklistQ2 = "NS-11.2: Are pile driving equipment and liquid waste containers being stored at least 100 feet from concentrated flows of stormwater drainage courses, and inlets if within the floodplain and at least 50 feet if outside the flooplain, unless otherwise authorized?"
        ChecklistQ3 = "NS-11.3: Are pile driving operations being conducted correctly?"
        ChecklistQ4 = "NS-11.4: Are pile driving operations implemented correctly?"
        ChecklistQ5 = "NS-11.5: Are pile driving operations maintained correctly?"
    } else if (type === "NS-12: Concrete Curing") {
        ChecklistQ1 = "NS-12.1: Is concrete curing correctly applied to control non-storm water discharges during construction?"
        ChecklistQ2 = "NS-12.2: Is concrete curing overspray controlled?"
        ChecklistQ3 = "NS-12.3: Is concrete curing implemented correctly?"
        ChecklistQ4 = "NS-12.4: Are maintenance procedures correctly performed during concrete curing?"
    } else if (type === "NS-13: Material and Equipment Use Over Water") {
        ChecklistQ1 = "NS-13.1: Is material and equipment use over water correctly applied to control non-storm water discharges during construction?"
        ChecklistQ2 = "NS-13.2: Are spill kits and cleanup materials present or kept on hand?"
        ChecklistQ3 = "NS-13.3: Is material and equipment use over water implemented correctly?"
        ChecklistQ4 = "NS-13.4: Are measures used for material and equipment use over water maintained correctly?"
    } else if (type === "NS-14: Concrete Finishing") {
        ChecklistQ1 = "NS-14.1: Are concrete finishing BMP processes applied correctly to control non-storm water discharges during construction?"
        ChecklistQ2 = "NS-14.2: Are concrete finishing processes implemented correctly?"
        ChecklistQ3 = "NS-14.3: Is equipment used in concrete finishing maintained correctly?"
    } else if (type === "NS-15: Structure Demolition/Removal Over or Adjecent to Water") {
        ChecklistQ1 = "NS-15.1: Is structure demolition/removal over or adjecent to water BMP applied correctly to control non-storm water discharges during construction?"
        ChecklistQ2 = "NS-15.2: Are demolished materials prevented from entering storm drain systems and receiving waters?"
        ChecklistQ3 = "NS-15.3: Are attachments on equipment used to catch debris during small demolition activities?"
        ChecklistQ4 = "NS-15.4: Is structure demolition/removal over or adjecent to water implemented correctly?"
        ChecklistQ5 = "NS-15.5: Is structure demolition/removal over or adjecent to water maintained correctly?"
    }




    // ------ WASTE MANAGMENT ------ //
    else if (type === "WM-1: Material Delivery and Storage") {
        ChecklistQ1 = "WM-1.1: Are materials delivered and stored correctly?"
        ChecklistQ2 = "WM-1.2: Are material delivery and storage areas correctly installed?"
        ChecklistQ3 = "WM-1.3: Are material delivery and storage areas maintained correctly?"
    } else if (type === "WM-2: Material Use") {
        ChecklistQ1 = "WM-2.1: Are materials used correctly?"
    } else if (type === "WM-3: Stockpile Management") {
        ChecklistQ1 = "WM-3.1: Are stockpiles at least 100 feet from concentrated flows of stormwater drainage courses, and inlets if within the floodplain and at least 50 feet if outside the flooplain, unless otherwise authorized?"
        ChecklistQ2 = "WM-3.2: Are stockpiles properly protected?"
        ChecklistQ3 = "WM-3.3: Are the correct materials used to protect stockpiles?"
        ChecklistQ4 = "WM-3.4: Is stockpile protection maintained correctly?"
    } else if (type === "WM-4: Spill Prevention and Control") {
        ChecklistQ1 = "WM-4.1: Are spill prevention and control correctly selected?"
        ChecklistQ2 = "WM-4.2: Are spill prevention and control correctly implemented?"
    } else if (type === "WM-5: Solid Waste Management") {
        ChecklistQ1 = "WM-5.1: Are solid waste management measures correctly selected?"
        ChecklistQ2 = "WM-5.2: Are solid waste management measures correctly implemented?"
    } else if (type === "WM-6: Hazardous Waste Management") {
        ChecklistQ1 = "WM-6.1: Are hazardous waste management measures correctly selected?"
        ChecklistQ2 = "WM-6.2: Are hazardous waste management measures correctly implemented?"
    } else if (type === "WM-7: Contaminated Soil Management") {
        ChecklistQ1 = "WM-7.1: Are contaminated soil management measures correctly selected and applied?"
    } else if (type === "WM-8: Concrete Waste Management/Temporary Concrete Washout Facility/Termporary Concrete Washout Portable") {
        ChecklistQ1 = "WM-8.1: Is concrete waste management applied correctly?"
        ChecklistQ2 = "WM-8.2: is concrete waste management implemented correctly?"
        ChecklistQ3 = "WM-8.3: Are materials used for concrete waste management correct?"
    } else if (type === "WM-9: Sanitary/Septic Waste Management") {
        ChecklistQ1 = "WM-9.1: Is the sanitary/septic waste management properly located?"
        ChecklistQ2 = "WM-9.2: Is the sanitary/septic waste management correctly installed?"
        ChecklistQ3 = "WM-9.3: Is sanitary/septic waste management correctly maintained?"
    } else if (type === "WM-10: Liquid Waste Maintenance") {
        ChecklistQ1 = "WM-10.1: Is liquid waste management correctly applied?"
        ChecklistQ2 = "WM-10.2: Is liquid waste management correctly implemented?"
        ChecklistQ3 = "WM-10.3: Are materials used for liquid waste management correct?"
        ChecklistQ4 = "WM-10.4: Is liquid waste management properly maintained?"
    }


    return (
        <>
            <TitleStyle>
                <p1>CONSTRUCTION SITE BMP REVIEW</p1>
            </TitleStyle>
            <br />
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Box sx={{ minWidth: 130 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">FIND NO.</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="FINDING NO."
                            >
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>



                <Grid item xs={3}>
                    <Box sx={{ minWidth: 300 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">BMP CATEGORY</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="BMP CATEGORY"
                                onChange={handleChangeCat}
                            >
                                <MenuItem value={''}>None</MenuItem>
                                <MenuItem value={'Soil Stabilization'}>Soil Stabilization</MenuItem>
                                <MenuItem value={'Sediment Control'}>Sediment Control</MenuItem>
                                <MenuItem value={'Tracking Control'}>Tracking Control</MenuItem>
                                <MenuItem value={'Wind Erosion Control'}>Wind Erosion Control</MenuItem>
                                <MenuItem value={'Non-Storm Water'}>Non-Storm Water</MenuItem>
                                <MenuItem value={'Waste Management'}>Waste Management</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>



                <Grid item xs={2}>
                    <Box sx={{ minWidth: 130 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">BMP TYPE</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="BMP TYPE"
                                onChange={handleChangeType}
                            >
                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-1: Scheduling"} >{TypeQuestion1}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-2: Preservation of Property/Preservation of Existing Vegetation"} >{TypeQuestion2}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-3: Hydraulic Mulch"} >{TypeQuestion3}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-4: Hydroseeding"} >{TypeQuestion4}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-5: Soil Binder"} >{TypeQuestion5}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-6: Straw Mulch"} >{TypeQuestion6}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-7: Geotextiles, Plastic Covers, Erosion Control Blankets/Mats"} >{TypeQuestion7}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-8: Wood Mulching"} >{TypeQuestion8}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-9: Earth Dikes/Drainage Swales/Lined Ditches"} >{TypeQuestion9}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-10: Outlet Protection/Velocity Dissipatin Devices"} >{TypeQuestion10}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-11: Slope Drains"} >{TypeQuestion11}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-12: Streambank Stabilization"} >{TypeQuestion12}</MenuItem>

                                ) : null}



                                {/* ----------- Sediment Control ------------------*/}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-1: Temporary Slit Fence"} >{TypeQuestion1}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-2: Temporary Sediment Basin"} >{TypeQuestion2}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-3: Temporary Sediment Trap"} >{TypeQuestion3}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-4: Temporary Check Dam"} >{TypeQuestion4}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-5: Temporary Fiber Rolls"} >{TypeQuestion5}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-6: Temporary Gravel Bag Berm"} >{TypeQuestion6}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-7: Street Sweeping"} >{TypeQuestion7}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-8: Temporary Sandbag Barrier"} >{TypeQuestion8}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-9: Temporary Straw Bale Barrier"} >{TypeQuestion9}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-10: Temporary Drain Inlet Protection"} >{TypeQuestion10}</MenuItem>

                                ) : null}



                                {/* ----------- TRACKING Control ------------------*/}

                                {category === 'Tracking Control' ? (

                                    <MenuItem value={"TC-1: Temporary Construction Entrance"} >{TypeQuestion1}</MenuItem>

                                ) : null}

                                {category === 'Tracking Control' ? (

                                    <MenuItem value={"TC-2: Stabilized Construction Roadway"} >{TypeQuestion2}</MenuItem>

                                ) : null}

                                {category === 'Tracking Control' ? (

                                    <MenuItem value={"TC-3: Temporary Entrance/Outlet Tire Wash"} >{TypeQuestion3}</MenuItem>

                                ) : null}






                                {/* ----------- WIND Erosion Control ------------------*/}

                                {category === 'Wind Erosion Control' ? (

                                    <MenuItem value={"WE-1: Wind Erosion Control"} >{TypeQuestion1}</MenuItem>

                                ) : null}






                                {/* ----------- NON STORM WATER ------------------*/}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-1: Water Control and Conservation"} >{TypeQuestion1}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-2: Dewatering"} >{TypeQuestion2}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-3: Paving, Sealing, Sawcutting, and Grinding Operations"} >{TypeQuestion3}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-4: Temporary Stream Crossing"} >{TypeQuestion4}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-5: Clear Water Diversion"} >{TypeQuestion5}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-6: Illicit Connection and Illegal Discharge Detection Reporting"} >{TypeQuestion6}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-7: Potable Water/Irrigation"} >{TypeQuestion7}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-8: Vehicle and Equipment Cleaning"} >{TypeQuestion8}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-9: Vehicle and Equipment Fueling"} >{TypeQuestion9}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-10: Vehicle and Equipment Maintenance"} >{TypeQuestion10}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-11: Pile Driving Operations"} >{TypeQuestion11}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-12: Concrete Curing"} >{TypeQuestion12}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-13: Material and Equipment Use Over Water"} >{TypeQuestion13}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-14: Concrete Finishing"} >{TypeQuestion14}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-15: Structure Demolition/Removal Over or Adjecent to Water"} >{TypeQuestion15}</MenuItem>

                                ) : null}


                                {/* ----------- Waste Management ------------------*/}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-1: Material Delivery and Storage"} >{TypeQuestion1}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-2: Material Use"} >{TypeQuestion2}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-3: Stockpile Management"} >{TypeQuestion3}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-4: Spill Prevention and Control"} >{TypeQuestion4}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-5: Solid Waste Management"} >{TypeQuestion5}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-6: Hazardous Waste Management"} >{TypeQuestion6}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-7: Contaminated Soil Management"} >{TypeQuestion7}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-8: Concrete Waste Management/Temporary Concrete Washout Facility/Termporary Concrete Washout Portable"} >{TypeQuestion8}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-9: Sanitary/Septic Waste Management"} >{TypeQuestion9}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-10: Liquid Waste Maintenance"} >{TypeQuestion10}</MenuItem>

                                ) : null}

                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={2}>
                    <Box sx={{ minWidth: 130 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">CHECKLIST Q. NUM</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={cQ}
                                label="CHECKLIST Q. NUM"
                                onChange={handleChangecQ}
                            >
                                <MenuItem value={'1'}>{ChecklistQ1}</MenuItem>
                                <MenuItem value={'2'}>{ChecklistQ2}</MenuItem>
                                <MenuItem value={'3'}>{ChecklistQ3}</MenuItem>
                                <MenuItem value={'4'}>{ChecklistQ4}</MenuItem>
                                <MenuItem value={'5'}>{ChecklistQ5}</MenuItem>
                                <MenuItem value={'6'}>{ChecklistQ6}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>


                <Grid item xs={3}>
                    <Box sx={{ minWidth: 300 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">LOCATION</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"

                                label="LOCATION"

                            >

                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

            </Grid>
            <Box sx={{ mt: 1 }}>
                <TextField
                    id="outlined-multiline-static"
                    label="STANDARD REFERANCE"
                    multiline
                    rows={1}
                    placeholder="Enter Standard Referance"
                    fullWidth
                />
            </Box>
            <Box sx={{ mt: 1 }}>
                <TextField
                    id="outlined-multiline-static"
                    label="STANDARD"
                    multiline
                    rows={3}
                    placeholder="Enter Standard"
                    fullWidth
                />
            </Box>
            <br />
        </>
    )
}

const TitleStyle = styled.div`
    background-color: #abc0d4;
    font-size: 1.10rem;
    font-weight: 500;
`;

