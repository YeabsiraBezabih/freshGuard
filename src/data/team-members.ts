interface TeamMember {
  id: number;
  name: string;
  role: string;
  field: string;
  bio: string;
  imageUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Amanuel Tessema",
    role: "Team Lead",
    field: "Biotech Engineering",
    bio: "Amanuel specializes in developing sustainable biological solutions. His research focuses on natural preservatives and edible coatings.",
    imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Betelhem Mulugeta",
    role: "Research Specialist",
    field: "Chemistry",
    bio: "Betelhem is responsible for analyzing the chemical composition of our edible coatings and ensuring they meet safety standards.",
    imageUrl: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Daniel Kebede",
    role: "Technical Lead",
    field: "Food Technology",
    bio: "Daniel focuses on the application methods and scaling our solutions for commercial use across different food categories.",
    imageUrl: "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Eyerusalem Hailu",
    role: "Marketing & Outreach",
    field: "Agricultural Economics",
    bio: "Eyerusalem analyzes market needs and connects our research with local farming communities to ensure practical application.",
    imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    name: "Fasil Terefe",
    role: "Quality Assurance",
    field: "Microbiology",
    bio: "Fasil ensures that our edible coatings effectively prevent microbial contamination while being safe for consumption.",
    imageUrl: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    name: "Gelila Solomon",
    role: "Research Assistant",
    field: "Geology",
    bio: "Gelila studies natural minerals that can be incorporated into our coatings to enhance their effectiveness and sustainability.",
    imageUrl: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];