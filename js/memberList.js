const teamMembers = document.querySelector(".teamMembers");

const MEMBER_INFO = [
  {
    name: "Jamie Chen",
    title: "Founder",
    avaUrl: "https://jamieitservices.s3.ap-southeast-2.amazonaws.com/me.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://jamiechen.netlify.app/html/",
  },
  {
    name: "Jeffrey Lee",
    title: "Head of Operation",
    avaUrl:
      "https://jamieitservices.s3.ap-southeast-2.amazonaws.com/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-male-face-avatar-man-beard-suit-shirt-necktie-portrait-businessman-icon-vector-illustration-189004563.webp",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://jamiechen.netlify.app/html/",
  },
  {
    name: "Bruce W",
    title: "Head of IT",
    avaUrl:
      "https://jamieitservices.s3.ap-southeast-2.amazonaws.com/batman_hero_avatar_comics-512.webp",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://jamiechen.netlify.app/html/",
  },
  {
    name: "Alice Bylon",
    title: "Head of Sales",
    avaUrl:
      "https://jamieitservices.s3.ap-southeast-2.amazonaws.com/194938.png",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://jamiechen.netlify.app/html/",
  },
  {
    name: "Bianca Kath",
    title: "Head of Customer Support",
    avaUrl:
      "https://jamieitservices.s3.ap-southeast-2.amazonaws.com/pngtree-character-avatar-icon-design-image_2292859.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://jamiechen.netlify.app/html/",
  },
  {
    name: "Ben Chen",
    title: "IT Support Engineer",
    avaUrl:
      "https://jamieitservices.s3.ap-southeast-2.amazonaws.com/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-male-face-avatar-man-beard-suit-shirt-necktie-portrait-businessman-icon-vector-illustration-189004563.webp",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://jamiechen.netlify.app/html/",
  },
  {
    name: "Lucy Wong",
    title: "Marketing Director",
    avaUrl:
      "https://jamieitservices.s3.ap-southeast-2.amazonaws.com/97305669-avatar-icon-of-girl-in-a-baseball-cap.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://jamiechen.netlify.app/html/",
  },
  {
    name: "Shelly Li",
    title: "Financial Accountant",
    avaUrl:
      "https://jamieitservices.s3.ap-southeast-2.amazonaws.com/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://jamiechen.netlify.app/html/",
  },
  {
    name: "Kris Chen",
    title: "Full Stack Developer",
    avaUrl:
      "https://jamieitservices.s3.ap-southeast-2.amazonaws.com/806962_user_512x512.png",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://jamiechen.netlify.app/html/",
  },
  {
    name: "Ken Bech",
    title: "Head of Customer Support",
    avaUrl:
      "https://jamieitservices.s3.ap-southeast-2.amazonaws.com/depositphotos_136216036-stock-illustration-man-avatar-icon-hipster-character.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://jamiechen.netlify.app/html/",
  },
];

(() => {
  MEMBER_INFO.map((member) => {
    const teamMember = document.createElement("div");
    teamMember.className = "teamMember";

    teamMember.innerHTML = `
      <img src="${member.avaUrl}" alt="${member.name}" class="avatar">
      <div class="teamMemberInfo">
        <div class="teamMemberName"><span>${member.name}</span></div>
        <div class="teamMemberTitle"><span>${member.title}</span></div>
        <div class="teamMemberLink">
          <a
            href=${member.linkedinUrl}
            class="teamMemberLinkedin"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href=${member.githubUrl}
            class="teamMemberGithub"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href=${member.blogUrl}
            class="teamMemberBlog"
            target="_blank"
          >
            <i class="fa-solid fa-house"></i>
          </a>
        </div>
      </div>
      `;

    teamMembers.appendChild(teamMember);
  });
})();
