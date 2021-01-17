import { FeaturedProjectFragment } from "../generated/graphql";

export default function ProjectCell(project: FeaturedProjectFragment) {
    return (
        `<h3>${project.url !== undefined ? (
            `<a href="${project.url}">${project.title}</a>`
        ) : project.title }${project.codeUrl !== undefined ? (
            `<a href="${project.codeUrl}"><img align="right" src="https://raw.githubusercontent.com/Merlin04/github-contentful-readme/main/github-24px.svg"></a>`
        ) : ""}</h3>
        <p>${project.tagline}</p>
        ${project.mediaCollection?.items[0]?.url !== undefined ? `<img src="${project.mediaCollection.items[0].url}">` : ""}`
    );
}