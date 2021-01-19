# github-contentful-readme

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## About

This GitHub Action updates your profile README.md based on data in the Contentful headless CMS. Right now it can show the following:

- Header
- Subheader
- Footer
- Website URL (formatted like a button)
- Current position
- Projects

The code is built around my Contentful setup so it probably won't work for you out of the box, luckily it is easy to modify:

1. Edit `src/queries/readme.gql` to provide the data that you want to display
2. Create `.env.contentful-codegen` with the following template, adding the corresponding values after the `=`:
```env
CONTENTFUL_CONTENT_TOKEN=
CONTENTFUL_MANAGEMENT_TOKEN=
CONTENTFUL_SPACE_ID=
```
3. Run `yarn gql-codegen` to generate TypeScript typings for your GraphQL objects (uses `fix-contentful-schema` so the required properties in the typings will match the required option in your Contentful content type definitions)
4. Update any type/interface names in the files in the `src` directory that may have changed from the code generation
5. Edit `src/main.ts` and `action.yml` to define the action inputs
6. Edit `src/generate.ts` to use the values from the query (right now there's some code to handle key value pair objects but you can remove that if you want)

## Inputs

### `contentfulAccessToken`

**Required** Contentful content access token

### `contentfulSpaceId`

**Required** Contentful space ID (not the name)

### `headerKey`

**Required** The name of the Key-Value pair in Contentful with the header text

### `subheaderKey`

The name of the Key-Value pair in Contentful with the subheader text

### `footerKey`

The name of the Key-Value pair in Contentful with the footer text

### `setOfProjectsCollectionId`

The ID of the set of projects in Contentful to display

### `urlKey`

The name of the Key-Value pair in Contentful with a URL for a website to link to

### `projectsLimit`

The limit of the number of projects to display

### `path`

Path of your README.md file.

## Environment Inputs

### `GITHUB_TOKEN`

**Required** Set this to: `${{ secrets.GITHUB_TOKEN }}`

## Example usage

This article applies to the repository that this is based on. Most of it will also apply to this repository but you will need to make changes to the parameters and `uses` field, see the example below.

- Article on Medium: https://medium.com/@theboi/how-to-dynamically-update-your-github-profile-readme-using-github-actions-684be5db9932

- Create a repository named your username, add a `README.md` file.
- Create a workflow and paste this under `steps`:
```yaml
- name: Update README
  id: github-contentful-readme
  uses: Merlin04/github-contentful-readme@v[Insert latest release here, see https://github.com/Merlin04/github-contentful-readme/releases]
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  with:
    headerKey: "github-header"
    subheaderKey: "github-subheader"
    footerKey: "github-footer"
    setOfProjectsCollectionId: "projects-collection-id"
    urlKey: "website-url"
    projectsLimit: 4
    contentfulAccessToken: ${{ secrets.CONTENTFUL_ACCESS_TOKEN }}
    contentfulSpaceId: ${{ secrets.CONTENTFUL_SPACE_ID }}```
- You might want to schedule this to run every 10 mins, paste this under `on`:
```yaml
schedule:
  - cron: "*/10 * * * *"
```
- This will now run, updating your README with the latest values from Contentful, every 10 mins.