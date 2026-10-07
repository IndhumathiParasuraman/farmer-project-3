// Per-acre estimates for one season (planning values, not exact)
const CROPS={ // water kL, fertilizer kg, labour person-days, tractor hours, yield quintal
 'Paddy':{w:1200,f:120,l:45,m:6,y:22},
 'Sugarcane':{w:2200,f:150,l:60,m:8,y:350},
 'Groundnut':{w:500,f:60,l:30,m:4,y:8},
 'Banana':{w:1800,f:200,l:70,m:5,y:100},
 'Black gram':{w:350,f:30,l:20,m:3,y:3.5}};
// Multipliers applied to normal practice (1 = normal)
const IRR={'Flood (normal)':1,'Sprinkler':0.8,'Drip':0.6};
const FERT={'Single dose (normal)':1,'Soil-test based, split doses':0.85};
const MACH={'Own tractor for each task (normal)':1,'Shared / hired machinery':0.8};
// Sample unit costs in rupees
const COST={w:1.5,f:25,l:500,m:900};
const UNITS={w:'kL water',f:'kg fertilizer',l:'person-days',m:'tractor hours'};
const NAMES={w:'Water',f:'Fertilizer',l:'Labour',m:'Machinery'};
const RESERVE=0.10; // share of land kept for bunds, compost pit and farm pond
const GUARDS=[
 ['Water at critical stages','Never cut water at flowering and grain or pod filling. Save during vegetative growth instead.'],
 ['Fertilizer timing','Split doses match crop uptake, so less is wasted and yield holds.'],
 ['Soil test first','A Soil Health Card shows what the soil already has, so you apply only what is missing.'],
 ['Labour peaks','Plan sowing and harvest early and book workers in advance.'],
 ['Shared machinery','Share a tractor or rotavator with neighbours and book slots before the busy week.'],
 ['Crop rotation','Follow cereals with pulses such as black gram to restore soil nitrogen.'],
 ['Keep a land reserve',`Keep about ${RESERVE*100}% of land for bunds, compost and a farm pond to store rain.`]];
