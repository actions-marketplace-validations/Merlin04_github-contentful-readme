import { FeaturedProjectFragment, ProjectMediaFragment } from "../generated/graphql";

// px
const imageMaxHeight = 300;
// The width of the contents of a table cell is 27px less than the td element's width
const cellWidthDifference = 27;

function generateImageTag(image: ProjectMediaFragment, maxHeight: number, containerWidth: number) {
    if(!image.width || !image.height) throw new Error("Image width or height is undefined");
    let result = `<img src="${image.url}"`;

    const widthAtMaxHeight = (image.width / image.height) * maxHeight;
    // If the image doesn't fit within the maxHeight without resizing,
    // and if the image with height set to maxHeight would fit in the container
    // (otherwise the width would be automatically scaled to fit the container,
    // and the scaled height would be less than maxHeight)
    if(image.height > maxHeight && widthAtMaxHeight <= containerWidth) {
        // GitHub automatically adds max-width: 100% but not max-height to images
        // This means that if I set the width and make the container smaller than
        // the set value the image will scale correctly but if I set the height
        // and make the container smaller the aspect ratio will not be preserved
        result += ` width="${widthAtMaxHeight}px"`;
    } 
    return result + ">";
}

export default function ProjectCell(project: FeaturedProjectFragment, cellWidth: number) {
    return (
        `<h3>${project.url ? (
            `<a href="${project.url}">${project.title}</a>`
        ) : project.title }${project.codeUrl ? (
            `<a href="${project.codeUrl}"><img align="right" src="https://raw.githubusercontent.com/Merlin04/github-contentful-readme/main/github-24px.svg"></a>`
        ) : ""}</h3>
        <p>${project.tagline}</p>
        ${project.mediaCollection?.items[0]?.url !== undefined ? generateImageTag(project.mediaCollection.items[0], imageMaxHeight, cellWidth - cellWidthDifference) : ""}`
    );
}