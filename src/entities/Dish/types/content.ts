
interface IVideo {
    title: string,
    link: string
}

interface IStory {
    description: string,
    img: string
}

interface IQuetion {
    text: string,
    answer: string,
    options: string[]
}

interface IModel {
    modelLink: string
}

interface IContent extends IModel {
    stories: IStory[],
    videos: IVideo[],
    quetions: IQuetion[]
}

export type {IVideo, IStory, IQuetion, IModel, IContent}

