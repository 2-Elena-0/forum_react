export type commentType = {
    "uid": string,
    "userUId": string,
    "userAvatar": string,
    "userName": string,
    "postUId": string,
    "body": string,
    "createdAt": string,
}

export type postType = {
    uid: string;
    name: string;
    body: string;
    likes: number;
    favorites: number;
    createdAt: string;
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
}

export type topicType = {
    uId: string,
    title: string,
    description: string
}