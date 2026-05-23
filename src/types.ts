export type commentType = {
    "uid": string,
    "userUId": string,
    "userAvatar": string,
    "userName": string,
    "postUId": string,
    "body": string,
    "createdAt": string,
    "likes": number,
    "wasDeleted": boolean
}

export type postType = {
    uid: string;
    name: string;
    body: string;
    likes: number;
    favorites: number;
    createdAt: string;
    userDelete: boolean;
    userUId: string;
}

export type userType = {
    uid: string,
    name: string,
    email: string,
    description: string,
    avatarUrl: string,
    createdAt: string,
    followersCount: number,
    role: string,
    roleGet: string
}

export type topicType = {
    uId: string,
    title: string,
    description: string
}