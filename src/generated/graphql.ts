import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  setOfAnnouncements?: Maybe<SetOfAnnouncements>;
  setOfAnnouncementsCollection?: Maybe<SetOfAnnouncementsCollection>;
  announcement?: Maybe<Announcement>;
  announcementCollection?: Maybe<AnnouncementCollection>;
  position?: Maybe<Position>;
  positionCollection?: Maybe<PositionCollection>;
  award?: Maybe<Award>;
  awardCollection?: Maybe<AwardCollection>;
  project?: Maybe<Project>;
  projectCollection?: Maybe<ProjectCollection>;
  setOfProjects?: Maybe<SetOfProjects>;
  setOfProjectsCollection?: Maybe<SetOfProjectsCollection>;
  keyValuePair?: Maybe<KeyValuePair>;
  keyValuePairCollection?: Maybe<KeyValuePairCollection>;
  skill?: Maybe<Skill>;
  skillCollection?: Maybe<SkillCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};


export type QuerySetOfAnnouncementsArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySetOfAnnouncementsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SetOfAnnouncementsFilter>;
  order?: Maybe<Array<Maybe<SetOfAnnouncementsOrder>>>;
};


export type QueryAnnouncementArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAnnouncementCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AnnouncementFilter>;
  order?: Maybe<Array<Maybe<AnnouncementOrder>>>;
};


export type QueryPositionArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPositionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PositionFilter>;
  order?: Maybe<Array<Maybe<PositionOrder>>>;
};


export type QueryAwardArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAwardCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AwardFilter>;
  order?: Maybe<Array<Maybe<AwardOrder>>>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryProjectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ProjectFilter>;
  order?: Maybe<Array<Maybe<ProjectOrder>>>;
};


export type QuerySetOfProjectsArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySetOfProjectsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SetOfProjectsFilter>;
  order?: Maybe<Array<Maybe<SetOfProjectsOrder>>>;
};


export type QueryKeyValuePairArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryKeyValuePairCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<KeyValuePairFilter>;
  order?: Maybe<Array<Maybe<KeyValuePairOrder>>>;
};


export type QuerySkillArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySkillCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SkillFilter>;
  order?: Maybe<Array<Maybe<SkillOrder>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};


export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};



export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}


export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsProjectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type Entry = {
  sys: Sys;
};

export type ProjectCollection = {
  __typename?: 'ProjectCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Project>;
};

/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/project) */
export type Project = Entry & {
  __typename?: 'Project';
  sys: Sys;
  linkedFrom?: Maybe<ProjectLinkingCollections>;
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  codeUrl?: Maybe<Scalars['String']>;
  mediaCollection?: Maybe<AssetCollection>;
  tagline?: Maybe<Scalars['String']>;
  collaborators?: Maybe<Array<Scalars['String']>>;
  skillsCollection?: Maybe<ProjectSkillsCollection>;
  description?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/project) */
export type ProjectTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/project) */
export type ProjectUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/project) */
export type ProjectCodeUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/project) */
export type ProjectMediaCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/project) */
export type ProjectTaglineArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/project) */
export type ProjectCollaboratorsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/project) */
export type ProjectSkillsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/project) */
export type ProjectDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ProjectLinkingCollections = {
  __typename?: 'ProjectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  awardCollection?: Maybe<AwardCollection>;
  setOfProjectsCollection?: Maybe<SetOfProjectsCollection>;
};


export type ProjectLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ProjectLinkingCollectionsAwardCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ProjectLinkingCollectionsSetOfProjectsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AwardCollection = {
  __typename?: 'AwardCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Award>;
};

/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/award) */
export type Award = Entry & {
  __typename?: 'Award';
  sys: Sys;
  linkedFrom?: Maybe<AwardLinkingCollections>;
  organization: Scalars['String'];
  organizationUrl?: Maybe<Scalars['String']>;
  award: Scalars['String'];
  date?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  submissionUrl?: Maybe<Scalars['String']>;
  submissionProject?: Maybe<Project>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/award) */
export type AwardLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/award) */
export type AwardOrganizationArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/award) */
export type AwardOrganizationUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/award) */
export type AwardAwardArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/award) */
export type AwardDateArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/award) */
export type AwardDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/award) */
export type AwardSubmissionUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/award) */
export type AwardSubmissionProjectArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AwardLinkingCollections = {
  __typename?: 'AwardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AwardLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SetOfProjectsCollection = {
  __typename?: 'SetOfProjectsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<SetOfProjects>;
};

/** Defines which projects to show on the website, which ones are featured, and what order to display them in [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/setOfProjects) */
export type SetOfProjects = Entry & {
  __typename?: 'SetOfProjects';
  sys: Sys;
  linkedFrom?: Maybe<SetOfProjectsLinkingCollections>;
  id?: Maybe<Scalars['String']>;
  featuredProjectsCollection: SetOfProjectsFeaturedProjectsCollection;
  notFeaturedProjectsCollection?: Maybe<SetOfProjectsNotFeaturedProjectsCollection>;
};


/** Defines which projects to show on the website, which ones are featured, and what order to display them in [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/setOfProjects) */
export type SetOfProjectsLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Defines which projects to show on the website, which ones are featured, and what order to display them in [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/setOfProjects) */
export type SetOfProjectsIdArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Defines which projects to show on the website, which ones are featured, and what order to display them in [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/setOfProjects) */
export type SetOfProjectsFeaturedProjectsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Defines which projects to show on the website, which ones are featured, and what order to display them in [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/setOfProjects) */
export type SetOfProjectsNotFeaturedProjectsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SetOfProjectsLinkingCollections = {
  __typename?: 'SetOfProjectsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SetOfProjectsLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SetOfProjectsFeaturedProjectsCollection = {
  __typename?: 'SetOfProjectsFeaturedProjectsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Project>;
};

export type SetOfProjectsNotFeaturedProjectsCollection = {
  __typename?: 'SetOfProjectsNotFeaturedProjectsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Project>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

export type ProjectSkillsCollection = {
  __typename?: 'ProjectSkillsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Skill>;
};

/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/skill) */
export type Skill = Entry & {
  __typename?: 'Skill';
  sys: Sys;
  linkedFrom?: Maybe<SkillLinkingCollections>;
  title: Scalars['String'];
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/skill) */
export type SkillLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/skill) */
export type SkillTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type SkillLinkingCollections = {
  __typename?: 'SkillLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type SkillLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SkillLinkingCollectionsProjectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['String']>;
  publishedAt_not?: Maybe<Scalars['String']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt_contains?: Maybe<Scalars['String']>;
  publishedAt_not_contains?: Maybe<Scalars['String']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['String']>;
  firstPublishedAt_not?: Maybe<Scalars['String']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstPublishedAt_contains?: Maybe<Scalars['String']>;
  firstPublishedAt_not_contains?: Maybe<Scalars['String']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['String']>;
  publishedVersion_not?: Maybe<Scalars['String']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedVersion_contains?: Maybe<Scalars['String']>;
  publishedVersion_not_contains?: Maybe<Scalars['String']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/setOfAnnouncements) */
export type SetOfAnnouncements = Entry & {
  __typename?: 'SetOfAnnouncements';
  sys: Sys;
  linkedFrom?: Maybe<SetOfAnnouncementsLinkingCollections>;
  id: Scalars['String'];
  featuredAnnouncementsCollection?: Maybe<SetOfAnnouncementsFeaturedAnnouncementsCollection>;
  notFeaturedAnnouncementsCollection?: Maybe<SetOfAnnouncementsNotFeaturedAnnouncementsCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/setOfAnnouncements) */
export type SetOfAnnouncementsLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/setOfAnnouncements) */
export type SetOfAnnouncementsIdArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/setOfAnnouncements) */
export type SetOfAnnouncementsFeaturedAnnouncementsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/setOfAnnouncements) */
export type SetOfAnnouncementsNotFeaturedAnnouncementsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SetOfAnnouncementsLinkingCollections = {
  __typename?: 'SetOfAnnouncementsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SetOfAnnouncementsLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SetOfAnnouncementsFeaturedAnnouncementsCollection = {
  __typename?: 'SetOfAnnouncementsFeaturedAnnouncementsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Announcement>;
};

/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/announcement) */
export type Announcement = Entry & {
  __typename?: 'Announcement';
  sys: Sys;
  linkedFrom?: Maybe<AnnouncementLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  information?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/announcement) */
export type AnnouncementLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/announcement) */
export type AnnouncementTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/announcement) */
export type AnnouncementInformationArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/announcement) */
export type AnnouncementDateArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type AnnouncementLinkingCollections = {
  __typename?: 'AnnouncementLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  setOfAnnouncementsCollection?: Maybe<SetOfAnnouncementsCollection>;
};


export type AnnouncementLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AnnouncementLinkingCollectionsSetOfAnnouncementsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SetOfAnnouncementsCollection = {
  __typename?: 'SetOfAnnouncementsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<SetOfAnnouncements>;
};

export type SetOfAnnouncementsNotFeaturedAnnouncementsCollection = {
  __typename?: 'SetOfAnnouncementsNotFeaturedAnnouncementsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Announcement>;
};

export type SetOfAnnouncementsFilter = {
  sys?: Maybe<SysFilter>;
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  featuredAnnouncementsCollection_exists?: Maybe<Scalars['Boolean']>;
  notFeaturedAnnouncementsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<SetOfAnnouncementsFilter>>>;
  AND?: Maybe<Array<Maybe<SetOfAnnouncementsFilter>>>;
};

export enum SetOfAnnouncementsOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AnnouncementFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  information_exists?: Maybe<Scalars['Boolean']>;
  information?: Maybe<Scalars['String']>;
  information_not?: Maybe<Scalars['String']>;
  information_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  information_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  information_contains?: Maybe<Scalars['String']>;
  information_not_contains?: Maybe<Scalars['String']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['String']>;
  date_not?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_contains?: Maybe<Scalars['String']>;
  date_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<AnnouncementFilter>>>;
  AND?: Maybe<Array<Maybe<AnnouncementFilter>>>;
};

export enum AnnouncementOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AnnouncementCollection = {
  __typename?: 'AnnouncementCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Announcement>;
};

/** A work position [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/position) */
export type Position = Entry & {
  __typename?: 'Position';
  sys: Sys;
  linkedFrom?: Maybe<PositionLinkingCollections>;
  company: Scalars['String'];
  companyUrl?: Maybe<Scalars['String']>;
  position: Scalars['String'];
  startDate: Scalars['String'];
  endDate?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  points?: Maybe<Array<Scalars['String']>>;
};


/** A work position [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/position) */
export type PositionLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A work position [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/position) */
export type PositionCompanyArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A work position [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/position) */
export type PositionCompanyUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A work position [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/position) */
export type PositionPositionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A work position [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/position) */
export type PositionStartDateArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A work position [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/position) */
export type PositionEndDateArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A work position [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/position) */
export type PositionDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A work position [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/position) */
export type PositionPointsArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PositionLinkingCollections = {
  __typename?: 'PositionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PositionLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PositionFilter = {
  sys?: Maybe<SysFilter>;
  company_exists?: Maybe<Scalars['Boolean']>;
  company?: Maybe<Scalars['String']>;
  company_not?: Maybe<Scalars['String']>;
  company_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  company_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  company_contains?: Maybe<Scalars['String']>;
  company_not_contains?: Maybe<Scalars['String']>;
  companyUrl_exists?: Maybe<Scalars['Boolean']>;
  companyUrl?: Maybe<Scalars['String']>;
  companyUrl_not?: Maybe<Scalars['String']>;
  companyUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  companyUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  companyUrl_contains?: Maybe<Scalars['String']>;
  companyUrl_not_contains?: Maybe<Scalars['String']>;
  position_exists?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['String']>;
  position_not?: Maybe<Scalars['String']>;
  position_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  position_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  position_contains?: Maybe<Scalars['String']>;
  position_not_contains?: Maybe<Scalars['String']>;
  startDate_exists?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['String']>;
  startDate_not?: Maybe<Scalars['String']>;
  startDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  startDate_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  startDate_contains?: Maybe<Scalars['String']>;
  startDate_not_contains?: Maybe<Scalars['String']>;
  endDate_exists?: Maybe<Scalars['Boolean']>;
  endDate?: Maybe<Scalars['String']>;
  endDate_not?: Maybe<Scalars['String']>;
  endDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  endDate_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  endDate_contains?: Maybe<Scalars['String']>;
  endDate_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  points_exists?: Maybe<Scalars['Boolean']>;
  points_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  points_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  points_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<Maybe<PositionFilter>>>;
  AND?: Maybe<Array<Maybe<PositionFilter>>>;
};

export enum PositionOrder {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  CompanyUrlAsc = 'companyUrl_ASC',
  CompanyUrlDesc = 'companyUrl_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PositionCollection = {
  __typename?: 'PositionCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Position>;
};

export type AwardFilter = {
  submissionProject?: Maybe<CfProjectNestedFilter>;
  sys?: Maybe<SysFilter>;
  organization_exists?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<Scalars['String']>;
  organization_not?: Maybe<Scalars['String']>;
  organization_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_contains?: Maybe<Scalars['String']>;
  organization_not_contains?: Maybe<Scalars['String']>;
  organizationUrl_exists?: Maybe<Scalars['Boolean']>;
  organizationUrl?: Maybe<Scalars['String']>;
  organizationUrl_not?: Maybe<Scalars['String']>;
  organizationUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organizationUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organizationUrl_contains?: Maybe<Scalars['String']>;
  organizationUrl_not_contains?: Maybe<Scalars['String']>;
  award_exists?: Maybe<Scalars['Boolean']>;
  award?: Maybe<Scalars['String']>;
  award_not?: Maybe<Scalars['String']>;
  award_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  award_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  award_contains?: Maybe<Scalars['String']>;
  award_not_contains?: Maybe<Scalars['String']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['String']>;
  date_not?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_contains?: Maybe<Scalars['String']>;
  date_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  submissionUrl_exists?: Maybe<Scalars['Boolean']>;
  submissionUrl?: Maybe<Scalars['String']>;
  submissionUrl_not?: Maybe<Scalars['String']>;
  submissionUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  submissionUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  submissionUrl_contains?: Maybe<Scalars['String']>;
  submissionUrl_not_contains?: Maybe<Scalars['String']>;
  submissionProject_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<AwardFilter>>>;
  AND?: Maybe<Array<Maybe<AwardFilter>>>;
};

export type CfProjectNestedFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  codeUrl_exists?: Maybe<Scalars['Boolean']>;
  codeUrl?: Maybe<Scalars['String']>;
  codeUrl_not?: Maybe<Scalars['String']>;
  codeUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  codeUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  codeUrl_contains?: Maybe<Scalars['String']>;
  codeUrl_not_contains?: Maybe<Scalars['String']>;
  mediaCollection_exists?: Maybe<Scalars['Boolean']>;
  tagline_exists?: Maybe<Scalars['Boolean']>;
  tagline?: Maybe<Scalars['String']>;
  tagline_not?: Maybe<Scalars['String']>;
  tagline_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagline_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagline_contains?: Maybe<Scalars['String']>;
  tagline_not_contains?: Maybe<Scalars['String']>;
  collaborators_exists?: Maybe<Scalars['Boolean']>;
  collaborators_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  collaborators_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  collaborators_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  skillsCollection_exists?: Maybe<Scalars['Boolean']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfProjectNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfProjectNestedFilter>>>;
};

export enum AwardOrder {
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  OrganizationUrlAsc = 'organizationUrl_ASC',
  OrganizationUrlDesc = 'organizationUrl_DESC',
  AwardAsc = 'award_ASC',
  AwardDesc = 'award_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SubmissionUrlAsc = 'submissionUrl_ASC',
  SubmissionUrlDesc = 'submissionUrl_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ProjectFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  codeUrl_exists?: Maybe<Scalars['Boolean']>;
  codeUrl?: Maybe<Scalars['String']>;
  codeUrl_not?: Maybe<Scalars['String']>;
  codeUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  codeUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  codeUrl_contains?: Maybe<Scalars['String']>;
  codeUrl_not_contains?: Maybe<Scalars['String']>;
  mediaCollection_exists?: Maybe<Scalars['Boolean']>;
  tagline_exists?: Maybe<Scalars['Boolean']>;
  tagline?: Maybe<Scalars['String']>;
  tagline_not?: Maybe<Scalars['String']>;
  tagline_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagline_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagline_contains?: Maybe<Scalars['String']>;
  tagline_not_contains?: Maybe<Scalars['String']>;
  collaborators_exists?: Maybe<Scalars['Boolean']>;
  collaborators_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  collaborators_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  collaborators_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  skillsCollection_exists?: Maybe<Scalars['Boolean']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<ProjectFilter>>>;
  AND?: Maybe<Array<Maybe<ProjectFilter>>>;
};

export enum ProjectOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  CodeUrlAsc = 'codeUrl_ASC',
  CodeUrlDesc = 'codeUrl_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SetOfProjectsFilter = {
  sys?: Maybe<SysFilter>;
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  featuredProjectsCollection_exists?: Maybe<Scalars['Boolean']>;
  notFeaturedProjectsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<SetOfProjectsFilter>>>;
  AND?: Maybe<Array<Maybe<SetOfProjectsFilter>>>;
};

export enum SetOfProjectsOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Used to store miscellaneous data [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/keyValuePair) */
export type KeyValuePair = Entry & {
  __typename?: 'KeyValuePair';
  sys: Sys;
  linkedFrom?: Maybe<KeyValuePairLinkingCollections>;
  key: Scalars['String'];
  value: Scalars['String'];
};


/** Used to store miscellaneous data [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/keyValuePair) */
export type KeyValuePairLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Used to store miscellaneous data [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/keyValuePair) */
export type KeyValuePairKeyArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Used to store miscellaneous data [See type definition](https://app.contentful.com/spaces/d4vc57z4o8dm/content_types/keyValuePair) */
export type KeyValuePairValueArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type KeyValuePairLinkingCollections = {
  __typename?: 'KeyValuePairLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type KeyValuePairLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type KeyValuePairFilter = {
  sys?: Maybe<SysFilter>;
  key_exists?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  key_not?: Maybe<Scalars['String']>;
  key_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  key_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  key_contains?: Maybe<Scalars['String']>;
  key_not_contains?: Maybe<Scalars['String']>;
  value_exists?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
  value_not?: Maybe<Scalars['String']>;
  value_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  value_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  value_contains?: Maybe<Scalars['String']>;
  value_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<KeyValuePairFilter>>>;
  AND?: Maybe<Array<Maybe<KeyValuePairFilter>>>;
};

export enum KeyValuePairOrder {
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type KeyValuePairCollection = {
  __typename?: 'KeyValuePairCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<KeyValuePair>;
};

export type SkillFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<SkillFilter>>>;
  AND?: Maybe<Array<Maybe<SkillFilter>>>;
};

export enum SkillOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SkillCollection = {
  __typename?: 'SkillCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Skill>;
};

export type ReadmeDataQueryVariables = Exact<{
  keyValuePairs?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  setOfProjectsCollectionId?: Maybe<Scalars['String']>;
  projectsLimit?: Maybe<Scalars['Int']>;
}>;


export type ReadmeDataQuery = (
  { __typename?: 'Query' }
  & { keyValuePairCollection?: Maybe<(
    { __typename?: 'KeyValuePairCollection' }
    & { items: Array<(
      { __typename?: 'KeyValuePair' }
      & Pick<KeyValuePair, 'key' | 'value'>
    )> }
  )>, setOfProjectsCollection?: Maybe<(
    { __typename?: 'SetOfProjectsCollection' }
    & { items: Array<(
      { __typename?: 'SetOfProjects' }
      & { featuredProjectsCollection: (
        { __typename?: 'SetOfProjectsFeaturedProjectsCollection' }
        & { items: Array<(
          { __typename?: 'Project' }
          & FeaturedProjectFragment
        )> }
      ) }
    )> }
  )>, positionCollection?: Maybe<(
    { __typename?: 'PositionCollection' }
    & { items: Array<(
      { __typename?: 'Position' }
      & PositionReadmeFragment
    )> }
  )> }
);

export type FeaturedProjectFragment = (
  { __typename?: 'Project' }
  & Pick<Project, 'title' | 'url' | 'codeUrl' | 'tagline'>
  & { mediaCollection?: Maybe<(
    { __typename?: 'AssetCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Asset' }
      & ProjectMediaFragment
    )>> }
  )> }
);

export type ProjectMediaFragment = (
  { __typename?: 'Asset' }
  & Pick<Asset, 'title' | 'width' | 'height' | 'url'>
);

export type PositionReadmeFragment = (
  { __typename?: 'Position' }
  & Pick<Position, 'company' | 'companyUrl' | 'position' | 'startDate'>
);

export const ProjectMedia = gql`
    fragment ProjectMedia on Asset {
  title
  width
  height
  url(transform: {format: WEBP, height: 600, quality: 50})
}
    `;
export const FeaturedProject = gql`
    fragment FeaturedProject on Project {
  title
  url
  codeUrl
  tagline
  mediaCollection(limit: 1) {
    items {
      ...ProjectMedia
    }
  }
}
    ${ProjectMedia}`;
export const PositionReadme = gql`
    fragment PositionReadme on Position {
  company
  companyUrl
  position
  startDate
}
    `;
export const ReadmeData = gql`
    query ReadmeData($keyValuePairs: [String], $setOfProjectsCollectionId: String, $projectsLimit: Int) {
  keyValuePairCollection(where: {key_in: $keyValuePairs}) {
    items {
      key
      value
    }
  }
  setOfProjectsCollection(where: {id: $setOfProjectsCollectionId}, limit: 1) {
    items {
      featuredProjectsCollection(limit: $projectsLimit) {
        items {
          ...FeaturedProject
        }
      }
    }
  }
  positionCollection {
    items {
      ...PositionReadme
    }
  }
}
    ${FeaturedProject}
${PositionReadme}`;