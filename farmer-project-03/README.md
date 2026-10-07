# FarmWise - Farm Resource Management Plan (Mini Project Q4)

Plans water, fertilizer, labour, machinery and land for a farm so that inputs are
optimised while crop productivity is maintained.

## Files
- index.html - page layout and tabs
- css/style.css - styling
- js/data.js - per-acre estimates, costs, multipliers and tips
- js/app.js - tab switching and helpers
- js/planner.js - crops, land check and resource totals
- js/savings.js - ranks the best saving options
- js/guard.js - productivity safeguards

## How it works
Resource use = per-acre value x acres x method multiplier (drip 0.6, sprinkler 0.8,
soil-test fertilizer 0.85, shared machinery 0.8). Yield stays the same because savings
come from reducing waste, not cutting essential inputs. 10% of land is kept as reserve.

## Run
Open the folder in VS Code, right-click index.html, choose Open with Live Server.
