interface Report {
  id: number;
  week: number;
  title: string;
  date: string;
  summary: string;
  achievements: string[];
  challenges: string[];
  nextSteps: string[];
}

export const weeklyReports: Report[] = [
  {
    id: 1,
    week: 1,
    title: "Project Initiation and Research",
    date: "February 10, 2025",
    summary: "Our team began by researching existing edible coating solutions and identified key areas for innovation specific to Ethiopian fruits and vegetables.",
    achievements: [
      "Formed project team and defined roles",
      "Completed literature review of existing edible coating technologies",
      "Identified top 5 fruits and vegetables to focus on based on local needs",
      "Established baseline criteria for coating effectiveness"
    ],
    challenges: [
      "Limited local research on edible coatings",
      "Need to adapt solutions to tropical climate conditions"
    ],
    nextSteps: [
      "Begin testing natural ingredients available locally",
      "Contact local farmers to understand specific preservation challenges",
      "Develop initial formulation prototypes"
    ]
  },
  {
    id: 2,
    week: 2,
    title: "Ingredient Selection and Initial Testing",
    date: "February 17, 2025",
    summary: "The team selected potential natural ingredients for the edible coating based on availability, cost, and preliminary research on effectiveness.",
    achievements: [
      "Shortlisted 8 potential natural ingredients for coating formulation",
      "Established testing protocols for coating durability and food safety",
      "Completed safety review of all ingredients",
      "Created first prototype formulation with beeswax and aloe vera base"
    ],
    challenges: [
      "Some ingredients showed chemical incompatibility",
      "Need to improve coating transparency",
      "Encountered issues with coating adhesion to smooth-skinned fruits"
    ],
    nextSteps: [
      "Refine formulation to address adhesion issues",
      "Begin small-scale application tests on tomatoes and mangoes",
      "Design controlled storage tests to evaluate effectiveness"
    ]
  },
  {
    id: 3,
    week: 3,
    title: "First Prototype Development",
    date: "February 24, 2025",
    summary: "Successfully developed our first working prototype coating and began application testing on selected fruits.",
    achievements: [
      "Finalized first-generation coating formula with 92% natural ingredients",
      "Developed two application methods: dipping and spraying",
      "Completed initial application on tomatoes, mangoes, and avocados",
      "Established control group for comparative testing"
    ],
    challenges: [
      "Drying time longer than expected at ambient temperature",
      "Color change observed in certain coating formulations after 24 hours",
      "Need to improve moisture barrier properties"
    ],
    nextSteps: [
      "Begin shelf-life testing under various temperature conditions",
      "Optimize formula to reduce drying time",
      "Test additional ingredients to improve moisture barrier"
    ]
  },
  {
    id: 4,
    week: 4,
    title: "Optimization and Extended Testing",
    date: "March 3, 2025",
    summary: "Focused on optimizing the formula based on initial test results and began extended shelf-life testing.",
    achievements: [
      "Reduced coating drying time by 40% with formula adjustments",
      "Improved moisture barrier properties with added natural wax component",
      "Began extended shelf-life testing with 5 different fruit varieties",
      "Developed quantitative scoring system for preservation effectiveness"
    ],
    challenges: [
      "Some coating formulations affected the flavor of certain fruits",
      "Difficulty maintaining consistency in manual application",
      "Need for more robust microbial testing"
    ],
    nextSteps: [
      "Contact microbiology department for collaboration on testing",
      "Develop mechanical application method for improved consistency",
      "Begin sensory evaluation of coated fruits"
    ]
  },
  {
    id: 5,
    week: 5,
    title: "Data Collection and Analysis",
    date: "March 10, 2025",
    summary: "Collected data from ongoing tests and began comprehensive analysis to determine effectiveness across different produce types.",
    achievements: [
      "Collected first set of complete data across 14-day preservation period",
      "Observed 40-65% improvement in shelf life across tested produce",
      "Completed initial microbial testing with positive results",
      "Received positive feedback on coating invisibility and non-detection in taste tests"
    ],
    challenges: [
      "Variations in effectiveness based on fruit ripeness at application time",
      "Cost analysis indicates need for process optimization",
      "Scaling up production requires additional equipment"
    ],
    nextSteps: [
      "Refine formula based on data analysis",
      "Begin second-generation prototype development",
      "Investigate cost-reduction opportunities in ingredient sourcing"
    ]
  },
  {
    id: 6,
    week: 6,
    title: "Second Prototype and Application Methods",
    date: "March 17, 2025",
    summary: "Developed improved second-generation coating formula and focused on refining application methodologies.",
    achievements: [
      "Completed formulation of second-generation coating with improved properties",
      "Developed semi-automated dipping station for consistent application",
      "Achieved 70% shelf-life extension for tomatoes and 55% for mangoes",
      "Optimized formula uses 96% locally available ingredients"
    ],
    challenges: [
      "Need to improve coating flexibility for fruits that continue to ripen after coating",
      "Scaling challenges for diverse fruit shapes and sizes",
      "Storage temperature significantly impacts effectiveness"
    ],
    nextSteps: [
      "Begin field testing with local farmers",
      "Develop different formulations for different produce categories",
      "Prepare for real-world transportation and market testing"
    ]
  }
];