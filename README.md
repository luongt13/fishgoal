# Project Overview

## Project Name
FishGoal

## Project Description
A tool to allows users to add, update, and remove custom goals. The goal is to allow users to keep track of SMART goals or tasks.

## Wireframes

#### Below are screenshots of the wireframe with description

**Desktop Image 1:**  
Upon page load, user than view their goals, add a goal, mark as complete, mark as incomplete, or edit their goal.

![desktop wireframe](/assets/desktop-2.png)

**Desktop Image 2:**
The user can access their completed goals in the completed goals component. 

![desktop wireframe](/assets/desktop-1.png)


**Tablet Image 1:**
The tablet design is the same as the desktop design. The first image is for portrait and the second is landscape.

![tablet wireframe](/assets/tablet-1.png)

**Tablet Image 2:**

![tablet wireframe](/assets/tablet-2.png)

**Mobile:**
Mobile design shows the changes needed in order to fit the components in the screen.

![mobile wireframe](/assets/mobile.png)

## Component Hierarchy

![component hierarchy](/assets/hierarchy.png)

## API and Data Sample
```
{
    "records": [
        {
            "id": "recAdivpV88WZROBj",
            "fields": {
                "what": "Meal prep ",
                "when": "6:30pm",
                "measure": "7 meals",
                "how": "plan out the meals"
            },
            "createdTime": "2021-03-25T16:49:03.000Z"
        },
        {
            "id": "recHPIlfyl1ErvbPo",
            "fields": {
                "what": "Finish homework ",
                "when": "8pm",
                "measure": "all assignments",
                "how": "put away my phone"
            },
            "createdTime": "2021-03-25T15:09:32.000Z"
        },
        {
            "id": "reciz8i4VAIDRYnzO",
            "fields": {
                "what": "Drink more water",
                "when": "the end of the day",
                "measure": "8 cups",
                "how": "fill my bottle the night before"
            },
            "createdTime": "2021-03-25T15:09:32.000Z"
        },
        {
            "id": "recvpePOmAvqGWxdF",
            "fields": {
                "what": "Take a walk",
                "when": "the end of my lunch break",
                "measure": "30 mins",
                "how": "set a reminder"
            },
            "createdTime": "2021-03-25T15:09:32.000Z"
        }
    ]
}
```

## MVP/Post MVP

### MVP
* Get and post goals from AirTable
* Allow users to add custom goals
* Create buttons to update (put) and create (post) goals
* Allow users to mark complete or incomplete for goals
* Responsive design 

### Post MVP
* Arrange goals based on time to start/complete
* Users can add an alarm to remind them to complete each specific goal
* Add a display for goals for one week
* Users can see incomplete goals and add them back to their active goals
* Users can create an account to save their goals
* Allow admin accounts (healthcare professionals) to access user accounts goals
* Users can delete their completed goals and incomplete goals


## Project Schedule
| Day | Deliverable | Status |
| :---- | :---- | :---- |
| Thursday 3/18  | Wireframes / Timeframes | Complete |
| Friday 3/19    | Project Proposal / AirTable / Create function components / Render Data | Complete |
| Saturday 3/20  | Continue create function components / Render Data / Buttons | Complete |
| Sunday 3/21    | Continue previous day / Add create | Complete |
| Monday 3/22    | Continue previous day / Add update | Complete |
| Tuesday 3/23   | Wrap up components / Start styling | In progress |
| Wednesday 3/24 | Style | In progress |
| Thursday 3/25  | MVP / User Testing | In progress |
| Friday 3/26    | Project Presentation | In progress |

## Timeframes
| Component | Priority | Estimated Time (hours) | Time Invested (hours) | Actual Time (hours) |
| --------- | :----: | :----: | :----: | :----: |
| **COMPONENTS:** |
| Nav              | H | 2 | 1 |  |
| Goal             | H | 3 | 3 |  |
| Completed Goals  | H | 3 | 3 |  |
| Form to Create   | H | 3 | 3 |  |
| Form to Update   | H | 3 | 3 |  |
| **DATA:** |
| Set up AirTable | H | 4 | 2 |  |
| Axios calls     | H | 3 | 3 |  |
| Render on page  | H | 5 | 3 |  |
| React Router    | H | 2 | 2 |  |
| **DESIGN:** |
| Nav             | H | 2 |  |  |
| Goal            | H | 3 |  |  |
| Goal item       | H | 3 |  |  |
| Form            | L | 3 |  |  |
| Buttons         | L | 3 |  |  |
| General Design  | L | 5 |  |  |
| **TOTAL:**      |   |**47**|**TBD**|**TBD**| 

## SWOT Analysis
**Strengths:**

I am clear as to what I would like to accomplish with my project. I anticipate to implement the design I have planned. I am always trying to learn and challenge myself. 

**Weaknesses:**

I am not completely comfortable with CRUD and the component hierarchy. Getting the components mentally organized takes a little more time. I can get caught up on the little details of styling/animation. 

**Opportunities:**

This opportunity will solidify my understanding of React and reinforce my knowledge in HTML/CSS/JavaScript. I anticipate to learn how to integrate a CSS library (bootstrap or material UI). I have an idea of what this project will look like postMVP and this project will help build my confidence in React to achieve my goal.

**Threats:**

I tend to tackle the problem on my own, but sometimes I spend more time than I have to struggling on a problem. It's okay to reach out to my resources. 