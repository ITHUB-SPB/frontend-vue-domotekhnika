export type NewsOverview = {
    datePublish: string,
    title: string,
    shortText: string,
    image: string,
    slug: string
}

export type NewsOverviewResponse = {
    data: NewsOverview[]
}