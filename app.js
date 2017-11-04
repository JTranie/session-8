var app = new Vue({
  el: '#app',
  data: {
    firstName: "Julien",
    lastName: "Tranié",
    description: "Journaliste web à La Croix.fr / #Nouveaux Formats",
    photo: "https://pbs.twimg.com/profile_images/645226867360964608/oZU2pmoP.jpg",
    twitter: "@JTranie",
    github: "JTranie",
    mail: "julien.tranie@gmail.com",
    experiences: [{
      dateBegin: "2017",
      dateEnd: "Today",
      name: "La Croix.fr / Bayard",
      title: "Journaliste Web",
      logo: "https://static.aws.la-croix.com/vb903611/bundles/lacroixsite/images/logo.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      dateBegin: "Janvier 2016",
      dateEnd: false,
      name: "RCF Haute Normandie",
      title: "Aniamteur/Reporter radio",
      logo: false,
      description: false
    }, {
      dateBegin: "2016",
      dateEnd: false,
      name: "Les Echos",
      title: "Stagiaire au service >Services<",
      logo: false,
      description: false
    }],
    formations: [{
      dateBegin: "2015",
      dateEnd: "2018",
      name: "Master Journalisme",
      university: "Ecole de journalisme de Sciences Po"
    }, {
      dateBegin: "2009",
      dateEnd: "2012",
      name: "Bachelor Sciences Politiques",
      university: "Sciences Po Grenoble"
    }],
    languages: ["Anglais"],
    skills: ["Node", "VueJS", "D3js", "SCSS", "HTML"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})