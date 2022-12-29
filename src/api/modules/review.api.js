import privateClient from "../client/private.client";

const reviewEndpoints = {
    list: "reviews",
    add: "reviews",
    remove:({reviewId})=>`reviews/${reviewId}`
}

const reviewApi = {
    add: async({ mediaId, mediaTitle, mediaType, mediaPoster, content }) => {
    const response = await privateClient.post(reviewEndpoints.add, { mediaId, mediaTitle, mediaType, mediaPoster, content })
    return { response };
},
    remove: async({ reviewId }) => {
    const response = await privateClient.post(reviewEndpoints.remove, {reviewId })
    return { response };
    },
    getList: async () => {
        const response = await privateClient.get(reviewEndpoints.list);
        return { response };
    }
}
export default reviewApi;