import { FeaturedProjectFragment, ProjectMediaFragment } from "../generated/graphql";

// px
const imageMaxHeight = 300;
// The width of the contents of a table cell is 27px less than the td element's width
const cellWidthDifference = 27;

function generateImageTag(image: ProjectMediaFragment, maxHeight: number, containerWidth: number) {
    if(!image.width || !image.height) throw new Error("Image width or height is undefined");
    let result = `<img src="${image.url}">`;
    // If the image doesn't fit within the maxHeight without resizing,
    // and if the image with height set to maxHeight would fit in the container
    // (otherwise the width would be automatically scaled to fit the container,
    // and the scaled height would be less than maxHeight)
    if(image.height > maxHeight && (image.width / image.height) * maxHeight <= containerWidth) {
        result = `<div height="${maxHeight}px">${result}</div>`;
    } 
    return result;
}

export default function ProjectCell(project: FeaturedProjectFragment, cellWidth: number) {
    return (
        `<h3>${project.url !== undefined ? (
            `<a href="${project.url}">${project.title}</a>`
        ) : project.title }${project.codeUrl !== undefined ? (
            `<a href="${project.codeUrl}"><img align="right" src="https://raw.githubusercontent.com/Merlin04/github-contentful-readme/main/github-24px.svg"></a>`
        ) : ""}</h3>
        <p>${project.tagline}</p>
        ${project.mediaCollection?.items[0]?.url !== undefined ? generateImageTag(project.mediaCollection.items[0], imageMaxHeight, cellWidth - cellWidthDifference) : ""}`
    );
}