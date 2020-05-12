export const state = () => ({
  projects: [{
    id: 1,
    name: "Nafham Mubasher",
    description: "An online portal which connects students with teachers easily. Where student can schedule a real-time video session on our platform with his preferred teacher.",
    slogan: "Continuing your education remotely has never been easier",
  }, {
    id: 2,
    name: "Nafham LifeSkills",
    description: "Nafham LifeSkills is an online educational platform that provides courses, complete tracks, quizzes, assessments and projects in all fields in order to increase the skills of the users in all the aspects of their life.",
    slogan: "Learn the skill you need, Now",
  }, {
    id: 3,
    name: "Spotify ElGhalaba",
    description: "A clone of the well-known music streaming service Spotify with all of its functionalities. It was built for educational purposes as a part of the software engineering course. I was a part of the backend team where we designed the database, RESTful Apis and core modules.",
    slogan: "Your best streaming service"
  }, {
    id: 4,
    name: "Shoryan",
    description: "An online e-commerce app for trading medical drugs between users and delivering them to the doorstep by couriers registered on the website.",
    slogan: "Same medical drugs, less price"
  }]
})

export const mutations = {

}

export const getters = {
  project: (state) => (id) => {
    return state.projects.filter(project => project.id == id)[0];
  }
}
