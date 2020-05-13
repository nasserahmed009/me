export const state = () => ({
  projects: [{
    id: 1,
    name: "Nafham Mubasher",
    description: "An online portal which connects students with teachers easily. Where student can schedule a real-time video session on our platform with his preferred teacher.",
    slogan: "Continuing your education remotely has never been easier",
    thumbnail: "/images/nafhamMubasher.jpg",
    link: "http://mubasher.nafham.com/",
    screenshots: ["/images/nafhamMubasher.jpg", "/images/nafhamMubasher/1.png", "/images/nafhamMubasher/2.png", "/images/nafhamMubasher/3.png"],
    slug: "nafham-mubasher"
  }, {
    id: 2,
    name: "Nafham LifeSkills",
    description: "Nafham LifeSkills is an online educational platform that provides courses, complete tracks, quizzes, assessments and projects in all fields in order to increase the skills of the users in all the aspects of their life.",
    slogan: "Learn the skill you need, Now",
    thumbnail: "/images/nafhamLifeSkills.jpg",
    link: "https://lifeskills.nafham.com/",
    screenshots: ["/images/nafhamLifeSkills.jpg", "/images/nafhamLifeSkills/1.png"],
    slug: "nafham-lifeskills"
  }, {
    id: 3,
    name: "Spotify ElGhalaba",
    description: "A clone of the well-known music streaming service Spotify with all of its functionalities. It was built for educational purposes as a part of the software engineering course. I was a part of the backend team where we designed the database, RESTful Apis and core modules.",
    slogan: "Your best streaming service",
    thumbnail: "/images/spotifyElGhalaba.jpg",
    link: "https://spotify-elghalaba.me/",
    screenshots: ["/images/spotifyElGhalaba.jpg", "/images/spotifyElGhalaba/1.png", "/images/spotifyElGhalaba/2.png", "/images/spotifyElGhalaba/3.png"],
    slug: "spotify-elghalaba"
  }, {
    id: 4,
    name: "Shoryan",
    description: "An online e-commerce app for trading medical drugs between users and delivering them to the doorstep by couriers registered on the website.",
    slogan: "Same medical drugs, less price",
    thumbnail: "/images/shoryan.jpg",
    link: "https://github.com/nasserahmed009/shoryan-front",
    screenshots: ["/images/shoryan.jpg"],
    slug: "shoryan"
  }]
})

export const mutations = {

}

export const getters = {
  project: (state) => (slug) => {
    const filteredProjects = state.projects.filter(project => project.slug == slug);
    return filteredProjects.length ? filteredProjects[0] : null;
  }
}
