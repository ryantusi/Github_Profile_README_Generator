const generated_file = document.getElementById("file");
const copy = document.getElementById("copy");
const text = document.getElementById("file");

document.addEventListener('DOMContentLoaded', function () {
    generated_file.style.display = "none";
    copy.style.display = "none"
    text.innerHTML = "";
});

const programming = [
    "c", "cpp", "csharp", "go", "java", "javascript", "php",
    "perl", "ruby", "scala",  "python", "swift", "objectivec",
    "clojure", "rust", "haskell", "coffeescript", "elixir", "erlang"
];

const frontend = [
    "vuejs", "reactjs", "svelte", "angularjs", "backbonejs",
    "bootstrap", "vuetify", "html", "css", "pug", "gulp", "sass",
    "redux", "webpack", "babel", "tailwind", "materialize", "bulma",
    "gtk", "qt", "wxwidgets", "ember"
];

const backend = [
    "nodejs", "spring", "express", "graphql", "kafka", "solr",
    "rabbitmq", "nginx", "hadoop", "openresty", "nestjs"
];

const mobile = [
    "android", "flutter", "dart", "kotlin", "nativescript", "xamarin",
    "reactnative", "ionic", "apachecordova"
];

const AI_ML = [
    "tensorflow", "pytorch", "opencv", "scikit"
];

const database = [
    "mongodb", "cassandra", "cockroachdb", "couchdb", "elasticsearch",
    "hive", "mariadb", "mysql", "oracle", "postgresql", "realm",
    "redis", "sqlite"
];

const visualization = [
    "canvasjs", "d3js", "grafana", "kibana"
];

const devops = [
    "aws", "azure", "bash", "circleci", "docker", "gcp", "jenkins",
    "kubernetes", "travisci", "vagrant"
];

const baas = [
    "amplify", "firebase", "heroku"
];

const framework = [
    "codeigniter", "django", "dotnet", "electron" , "flask",
    "laravel", "quasar", "rails", "symfony"
];

const testing = [
    "cypress", "jasmine", "jest", "karma", "mocha", 
    "puppeteer", "selenium"
];

const softwares = [
    "blender", "figma", "framer", "illustrator", "invision",
    "matlab", "photoshop", "postman", "sketch", "solidworks", "xd"
];

const static = [
    "11ty", "gatsby", "gridsome", "hexo", "hugo", "jekyll", "middleman",
    "nextjs", "nuxtjs", "sapper", "scully", "sculpin", "vuepress"
];

const game = [
    "unity", "unreal"
];

const automation = [
    "ifttt", "zapier"
];

const others = [
    "arduino", "git", "linux"
];

const social = [
    "github", "linked-in", "twitter", "facebook", "instagram",
    "youtube", "discord", "codepen", "google", "hackerrank", "kaggle",
    "leet-code", "medium", "pinterest", "reddit", "stack-overflow",
    "topcoder", "twitch"
];

const facts = {
    working: "🔭 I’m currently working on",
    learning: "🌱 I’m currently learning",
    reach: "📫 How to reach me",
    portfolio: "👨‍💻 All of my projects are available at",
    resume: "📄 Know about my experiences",
    fun: "⚡ Fun fact:"
};

const facts_id = ["working", "learning", "reach", "portfolio", "resume", "fun"];

const generate_name = (name) => {
    const opening = `<h1 align="center">Hello World! 👋 I'm ${name}</h1>`;
    return opening;
};

const generate_description = (desc) => {
    const opening = `<h5 align="center">${desc}</h5><br>`;
    return opening;
};

const generate_heading = (head) => {
    const heading = `<h2 align="left">${head}</h2>`;
    return heading;
}

const generate_subheading = (head) => {
    const sub = `<h3 align="left">${head}</h3>`;
    return sub;
}

const generate_facts = (fact, val) => {
    let point;
    if (fact == "reach" || fact == "portfolio" || fact == "resume") {
        point = `- ${facts[fact]} *[${val}](${val})*`;
    } else {
        point = `- ${facts[fact]} **${val}**`;
    }
    return point;
};

const generate_visitors = (name) => {
    const url = `<img align="left" src="https://komarev.com/ghpvc/?username=${name}&label=Profile%20views&color=0e75b6&style=flat" />`;
    return url;
};

const generate_trophy = (name) => {
    const url = `<img width="100%" align="center" src="https://github-profile-trophy.vercel.app/?username=${name}" />`;
    return url;
};

const generate_topSkills = (name) => {
    const url = `<img align="right" src="https://github-readme-stats.vercel.app/api/top-langs?username=${name}&show_icons=true&locale=en&layout=compact" />`;
    return url
};

const generate_stats = (name) => {
    const url = `<img width="50%" align="left" src="https://github-readme-stats.vercel.app/api?username=${name}&show_icons=true&locale=en" />`;
    return url
};

const generate_streaks = (name) => {
    const url = `<img width="50%" align="left" src="https://github-readme-streak-stats.herokuapp.com/?user=${name}&" />`;
    return url;
}

const generate_banner = (link) => {
    const img = `<img width="100%" align="center" src="${link}" />`
    return img;
}

const generate_image = (link) => {
    const img = `<img width="30%" align="right" src="${link}" /><br>`
    return img;
};

const generate_skill = (folder, file) => {
    const api = `https://raw.githubusercontent.com/ryantusi/Github_Profile_README_Generator/main/src/images/icons/${folder}/${file}.svg`;
    const skill = `<img src="${api}" width='40' height='40' title='${file}'/>`;
    return skill;
};

const generate_social = (file, link) => {
    const api = `https://raw.githubusercontent.com/ryantusi/Github_Profile_README_Generator/main/src/images/icons/Social/${file}.svg`;
    const social = `<a href="${link}"><img src="${api}" width="40" height='40' title="${file}"/></a>`
    return social;
};

const isNull = (element) => {
    if (element === '' || element === undefined || element === null) {
        return true;
    } else {
        return false;
    }
};

const generate_README = () => {
    const arr = [];
    let skills = "";
    let socials = "";
    let count = 0;
    let temp;

    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let desc = document.getElementById("description").value;

    temp = generate_name(name);
    arr.push(temp);

    let banner = document.getElementById("banner").value;
    if (!isNull(banner)) {
        temp = generate_banner(banner);
        arr.push(temp);
    }

    if (!isNull(desc)) {
        temp = generate_description(desc);
        arr.push(temp);
    }

    let image = document.getElementById("image").value;
    if (!isNull(image)) {
        temp = generate_image(image);
        arr.push(temp);
    }

    temp = generate_heading("Some Facts About Me");
    arr.push(temp);

    for (let i = 0; i < facts_id.length; i++) {
        let fact = document.getElementById(facts_id[i]).value;
        if (!isNull(fact)) {
            temp = generate_facts(facts_id[i], fact);
            arr.push(temp);
        }
    }

    temp = generate_heading("Skillset");
    arr.push(temp);

    for (let i = 0; i < programming.length; i++) {
        let element = document.getElementById(programming[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("ProgrammingLanguages", programming[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Programming Languages:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    let top_skills = document.getElementById("top_skills");
    if (top_skills.checked) {
        temp = generate_topSkills(username);
        arr.push(temp)
    }

    for (let i = 0; i < frontend.length; i++) {
        let element = document.getElementById(frontend[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("FrontendDevelopment", frontend[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Frontend Development:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < backend.length; i++) {
        let element = document.getElementById(backend[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("BackendDevelopment", backend[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Backend Development:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < mobile.length; i++) {
        let element = document.getElementById(mobile[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("MobileAppDevelopment", mobile[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Mobile App Development:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < AI_ML.length; i++) {
        let element = document.getElementById(AI_ML[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("AIML", AI_ML[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("AI / ML:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < database.length; i++) {
        let element = document.getElementById(database[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("Database", database[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Database Management:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < visualization.length; i++) {
        let element = document.getElementById(visualization[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("DataVisualization", visualization[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Data Visualization:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < devops.length; i++) {
        let element = document.getElementById(devops[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("Devops", devops[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Devops:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < baas.length; i++) {
        let element = document.getElementById(baas[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("BaaS", baas[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Backend as a Service (BaaS):");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < framework.length; i++) {
        let element = document.getElementById(framework[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("Framework", framework[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Frameworks:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < testing.length; i++) {
        let element = document.getElementById(testing[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("Testing", testing[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Testing:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < softwares.length; i++) {
        let element = document.getElementById(softwares[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("Software", softwares[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Softwares:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < static.length; i++) {
        let element = document.getElementById(static[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("StaticSiteGenerators", static[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Static Site Generators:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < game.length; i++) {
        let element = document.getElementById(game[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("GameEngines", game[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Game Engines:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < automation.length; i++) {
        let element = document.getElementById(automation[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("Automation", automation[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Automation:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    for (let i = 0; i < others.length; i++) {
        let element = document.getElementById(others[i]);
        if (element.checked) {
            if (count == 0) {
                skills += "<p align='left'>";
            }
            temp = generate_skill("Other", others[i]);
            skills += temp;
            count++;
        }
    }

    if (count > 0) {
        temp = generate_subheading("Others:");
        arr.push(temp);
        skills += "</p>";
        arr.push(skills);
    }

    count = 0;
    skills = "";

    arr.push("<br><hr><br>")

    let trophy = document.getElementById("trophy");
    if (trophy.checked) {
        temp = generate_trophy(username);
        arr.push(temp);
    }

    let stats = document.getElementById("stats")
    if (stats.checked) {
        temp = generate_stats(username);
        arr.push(temp)
    }

    let streak = document.getElementById("streaks");
    if (streak.checked) {
        temp = generate_streaks(username);
        arr.push(temp);
    }

    let visits = document.getElementById("visitors");
    if (visits.checked) {
        temp = generate_visitors(username);
        arr.push(temp);
    }

    for (let i = 0; i < social.length; i++) {
        try {
            let element = document.getElementById(social[i]).value;
            if (!isNull(element)) {
                if (count == 0) {
                    socials += "<p align='left'>";
                }
                temp = generate_social(social[i], element);
                socials += temp;
                count++;
            }
        } catch (e) {
            console.log(e);
        }
    }

    if (count > 0) {
        temp = generate_heading("Connect with Me");
        arr.push(temp);
        socials += "</p>";
        arr.push(socials);
    }

    count = 0;
    socials = "";

    const readme = arr.join("\n\n");

    document.getElementById("file").innerHTML = readme;

    generated_file.style.display = "block";
    copy.style.display = "block";
};

const generate = document.getElementById("generate");
generate.addEventListener('click', generate_README);

const copyText = () => {
    text.select();
    text.setSelectionRange(0, 99999);
    
    document.execCommand('copy');
    alert("README.MD code copied to clipboard");
};

copy.addEventListener('click', copyText);