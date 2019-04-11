export const person = {
  basics: {
    name: 'Maxime Choffat',
    label: 'software_engineer',
    picture: './img/profile.png',
    email: 'maxime.choffat@gmail.com',
    phone: '+33 6 33 56 3 25',
    summary: 'my_summary',
    location: {
      address: '5128 rue Saint Andre',
      postalCode: 'H2J 3A7',
      city: 'Montréal',
      countryCode: 'CANADA',
      region: 'Québec',
    },
    profiles: [
      {
        network: 'GitHub',
        username: 'MrRandol',
        url: 'https://github.com/MrRandol',
      },
      {
        network: 'Twitter',
        username: 'Mr_Randol',
        url: 'https://twitter.com/Mr_Randol',
      },
      {
        network: 'LinkedIn',
        username: 'maxime-choffat',
        url: 'https://www.linkedin.com/in/maxime-choffat-b2423a75/',
      },
    ]
  },
  skills: [
    { name: "language_JavaScript", level: "75" },
    { name: "language_Java", level: "60" },
    { name: "language_Bash", level: "70" },
    { name: "language_HTML / CSS", level: "75" },
    { name: "language_Ruby On Rails", level: "40" },
    { name: "tool_Jenkins", level: "95" },
    { name: "tool_Nexus", level: "95" },
    { name: "tool_Docker", level: "85" },
    { name: "tool_Gitlab", level: "95" },
    { name: "tool_Bitbucket", level: "95" },
    { name: "tool_Jira", level: "90" },
    { name: "tool_Confluence", level: "90" },
    { name: "tool_SonarQube", level: "85" },
    { name: "tool_Kubernetes", level: "75" },
    { name: "webServer_Nginx", level: "95" },
    { name: "webServer_Tomcat", level: "90" },
    { name: "webServer_WildFly", level: "70" },
    { name: "webServer_NodeJs", level: "90" },
    { name: "webServer_Geoserver", level: "75" },
    { name: "webServer_MySQL", level: "85" },
    { name: "webServer_PostgreSQL", level: "80" },
    { name: "webServer_ElasticSearch", level: "75" },
    { name: "framework_OpenScales", level: "95" },
    { name: "framework_OpenLayers", level: "85" },
    { name: "devTool_Maven", level: "90" },
    { name: "devTool_Gradle", level: "70" },
    { name: "devTool_Git", level: "95" },
    { name: "devTool_Mercurial", level: "95" },
    { name: "devTool_Ansible", level: "75" },
    { name: "softSkill_Agile", level: "90" },
    { name: "softSkill_DevOps", level: "95" },
    { name: "softSkill_Gestion de Projet", level: "50" },
    { name: "softSkill_SIG", level: "95" },
    { name: "Linux", level: "80" }
  ],
  work: [
    {
      company: 'SII Canada',
      logo: 'img:https://www.siicanada.com/wp-content/uploads/2016/08/sii-canada-logo-website-72x110.png',
      position: 'devops_cata_inte',
      website: 'https://www.siicanada.com/',
      startDate: '2019-01',
      endDate: 'Today',
      summary: "sii_summary",
      highlights: [
        'tool_Jenkins',
        'tool_SonarQube',
        'tool_Nexus',
        'tool_Atlassian (Jira, Bitbucket, Confluence)',
        'webServer_Nginx',
        'devTool_Ansible',
        'devTool_Git',
        'devTool_Maven',
        'devTool_Gradle',
        'softSkill_Agile',
        'softSkill_DevOps',
        'softSkill_Analysis',
        'softSkill_Architecture',
        'softSkill_Continuous Integration',
        'softSkill_Training'
      ],
    },
    {
      company: 'Nalys',
      logo: 'img:https://www.nalys-group.com/theme/default-2017/img/logo.png',
      position: 'internal_cluster_build',
      website: 'https://www.nalys-group.com/en/home',
      startDate: '2018-06',
      endDate: '2018-08',
      summary: 'nalys_internal_summary',
      highlights: [
        'tool_Jenkins',
        'tool_SonarQube',
        'tool_Nexus',
        'tool_Gitlab',
        'tool_Jira',
        'tool_Kubernetes',
        'devTool_Docker',
        'devTool_Git',
        'devTool_Maven',
        'devTool_Gradle',
        'softSkill_Agile',
        'softSkill_Devops'
      ]
    },
    {
      company: 'ING (Nalys)',
      logo: 'img:https://www.nalys-group.com/theme/default-2017/img/logo.png',
      position: 'release_engineer',
      website: 'http://piedpiper.com',
      startDate: '2017-06',
      endDate: '2018-06',
      summary: 'nalys_ing_summary',
      highlights: [
        'tool_Jenkins',
        'tool_SonarQube',
        'tool_Artifactory',
        'tool_Gitlab',
        'tool_Jira',
        'tool_Conluence',
        'tool_TFS',
        'devTool_Git',
        'devTool_Maven',
        'devTool_Gradle',
        'softSkill_Agile',
        'softSkill_Devops'
      ]
    },
    {
      company: 'GIM (Nalys)',
      logo: 'img:https://www.nalys-group.com/theme/default-2017/img/logo.png',
      position: 'developer_devops_coach',
      website: 'https://www.gim.be/en',
      startDate: '2017-02',
      endDate: '2017-05',
      summary: 'nalys_ing_summary',
      highlights: [
        'language_JavaScript',
        'language_Java',
        'framework_OpenLayers',
        'tool_Jenkins',
        'tool_Nexus',
        'tool_Gitlab',
        'devTool_Git',
        'devTool_Maven',
        'devTool_Docker',
        'webServer_Nginx',
        'webServer_Geoserver',
        'webServer_Wildfly',
        'softSkill_Agile',
        'softSkill_DevOps',
        'softSkill_SIG',
        'softSkill_Training',
      ]
    },
    {
      company: 'Worldline',
      logo: 'img:https://worldline.com/content/dam/gotomarket/logo/logo-worldline.png',
      position: 'project_manager',
      website: 'https://worldline.com/',
      startDate: '2016-12',
      endDate: '2015-07',
      summary: 'worldline_project_manager_summary',
      highlights: [
        "softSkill_Agile",
        "softSkill_DevOps",
        "softSkill_Project Management",
        "softSkill_Architecture",
        'softSkill_SIG'
      ]
    },
    {
      company: 'Worldline',
      logo: 'img:https://worldline.com/content/dam/gotomarket/logo/logo-worldline.png',
      position: 'application_manager',
      website: 'https://worldline.com/',
      startDate: '2012-09',
      endDate: '2015-06',
      summary: 'worldline_application_manager_summary',
      highlights: [
        "language_Flex",
        "language_JavaScript",
        "language_Java",
        "language_Bash",
        "webServer_Nginx",
        "webServer_Tomcat",
        "webServer_NodeJs",
        "webServer_Geoserver",
        "webServer_Rok4",
        "framework_OpenScales",
        "bdd_PostgreSQL (PostGIS)",
        "bdd_MySQL",
        "bdd_ElasticSearch",
        "bdd_Redis",
        "devTool_Maven",
        "devTool_Git",
        "devTool_Vagrant",
        "devTool_Docker",
        "tool_Jenkins",
        "tool_Nexus",
        "tool_Jira",
        "softSkill_Agile",
        "softSkill_DevOps",
        'softSkill_SIG'
      ]
    },
    {
      company: 'Worldline',
      logo: 'img:https://worldline.com/content/dam/gotomarket/logo/logo-worldline.png',
      position: 'flex_developper',
      website: 'https://worldline.com/',
      startDate: '2012-02',
      endDate: '2012-08',
      summary: 'worldline_flex_summary',
      highlights: [
        "language_Flex",
        "language_JavaScript",
        "language_Java",
        "language_Bash",
        "webServer_Nginx",
        "webServer_Tomcat",
        "framework_OpenScales",
        "devTool_Mercurial",
        "devTool_Maven",
        "tool_Jenkins",
        "tool_Jira",
        "tool_Nexus",
        'softSkill_SIG'
      ]
    },
    {
      company: 'Captive Studio',
      logo: 'img:https://pbs.twimg.com/profile_images/1112815436909985793/_1klXiWS_400x400.png',
      position: 'web_developper',
      website: 'https://www.captive.fr/',
      startDate: '2010-08',
      endDate: '2011-02',
      summary: 'captive_studio_summary',
      highlights: [
        "language_Ruby On Rails",
        "bdd_MySQL",
        "softSkill_Agile",
        "softSkill_Extreme Programming"
      ]
    }
  ],
  education: [
    {
      institution: 'UTBM (Université de Technologie de Belfort Montbéliard), France',
      logo: 'img:https://pbs.twimg.com/profile_images/673805187400749056/18OZaqMO_400x400.png',
      website: 'https://www.utbm.fr/',
      area: 'utbm_area',
      studyType: 'utbm_studytype',
      startDate: '2007-09',
      endDate: '2012-06',
      gpa: '0.0',
      courses: [
        'education_english_course'
      ],
    },
    {
      institution: 'Lycée Saint André - Colmar, France',
      area: 'st_andre_area',
      studyType: 'st_andre_studytype',
      startDate: '2003-08',
      endDate: '2004-05',
      gpa: '0.0',
      courses: [
        'education_mention_bac',
        'education_spe_math'
      ],
    }
  ],
  interests: [
    {
      name: 'Hobbies',
      keywords: [
        'hobby_high_tech',
        'hobby_travel',
      ],
    },
    {
      name: 'Sports',
      keywords: [
        'sport_fencing',
        'sport_judo',
      ],
    },
  ],
  languages: [
    {
      name: 'french',
      level: 'native_speaker',
    },
    {
      name: 'english',
      level: 'fluent',
    },
  ]
};
