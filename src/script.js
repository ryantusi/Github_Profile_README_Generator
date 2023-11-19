const facts = {
    working: "🔭 I’m currently working on",
    learning: "🌱 I’m currently learning",
    reach: "📫 How to reach me",
    portfolio: "👨‍💻 All of my projects are available at",
    resume: "📄 Know about my experiences",
    fun: "⚡ Fun fact:"
};

const generate_name = (name) => {
    const opening = `<h1 align="center">Hello World! 👋 I'm ${name}</h1>`;
    return opening;
};

const generate_description = (desc) => {
    const opening = `<h4 align="center">${desc}</h4>`;
    return opening;
};

const generate_heading = (head) => {
    const heading = `<h2 align="left">${head}</h2>`;
    return heading;
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
    const url = `<img align="center" src="https://github-profile-trophy.vercel.app/?username=${name}" />`;
    return url;
};

const generate_topSkills = (name) => {
    const url = `<img src="https://github-readme-stats.vercel.app/api/top-langs?username=${name}&show_icons=true&locale=en&layout=compact" />`;
    return url
};

const generate_stats = (name) => {
    const url = `<img src="https://github-readme-stats.vercel.app/api?username=${name}&show_icons=true&locale=en" />`;
    return url
};

const generate_streaks = (name) => {
    const url = `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${name}&" />`;
    return url;
}

const generate_banner = (link) => {
    const img = `<img align="center" src="${link}" />`
    return img;
}

const generate_image = (link) => {
    const img = `<img align="right" src="${link}" />`
    return img;
};

const generate_skill = (folder, file) => {
    const api = `https://raw.githubusercontent.com/ryantusi/Github_Profile_README_Generator/main/src/images/icons/${folder}/${file}.svg`;
    const skill = `<img src="${api}" width='40' height='40' title='${file}'/>`;
    return skill;
};

const generate_social = (file, link) => {
    const api = `https://raw.githubusercontent.com/ryantusi/Github_Profile_README_Generator/main/src/images/icons/Social/${file}.svg`;
    const social = `<a href="${link}"><img src="${api} width='40" height='40' title="${file}"/></a>`
    return social;
};

const generate_README = () => {
    const arr = [];
};


