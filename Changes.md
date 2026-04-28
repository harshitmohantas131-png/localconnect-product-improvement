# LocalConnect Improvements

## Existing Features Before Changes
Before my improvements, the application included the following features:
- **Feed (Posts):** A general discussion board for neighbors.
- **Issues:** A system for logging and tracking local civic issues.
- **Tasks:** A productivity feature allowing users to assign tasks to other individuals and track their completion.
- **Leaderboard:** A gamified page showing top community contributors based on scores.
- **Dashboard:** A page providing a top-level overview of metrics related to the above features.

## Features Removed & Reasoning
I removed the **Tasks** and **Leaderboard** features because they did not align well with the purpose of a neighborhood community platform.
- **Tasks:** Neighborhoods generally operate on voluntary collaboration. A system built around "assigning" tasks to specific individuals feels too rigid and corporate, better suited for a project management tool than a community hub.
- **Leaderboard:** Gamifying community contributions with arbitrary points can lead to toxic competition or feel artificial in a neighborhood setting where collaboration should be organic.

## New Features Implemented
To replace the removed features, I implemented two new ones that directly support meaningful neighborhood interaction:
1. **Events (`/events`):** Neighbors can now organize and view upcoming local gatherings, such as block parties, neighborhood watch meetings, or community cleanups. This fosters real-world connections.
2. **Marketplace (`/market`):** Neighbors can now list items they want to sell, trade, or give away locally. This promotes a circular local economy and reduces waste while building trust among residents.

## How These Changes Improve the Product
By pivoting away from workplace-style task assignment and gamification, LocalConnect now focuses entirely on organic community building. Neighbors have practical, relevant tools to communicate (Feed), fix problems (Issues), socialize (Events), and share resources (Marketplace). The updated Dashboard now aggregates these relevant metrics to give a true snapshot of neighborhood health.

## Deployment Links
*Please update these links after deployment.*

- **Frontend Deployment Link:** [INSERT VERCEL/NETLIFY LINK HERE]
- **Backend Deployment Link:** [INSERT RENDER/RAILWAY LINK HERE]
