import {baseApi} from "./baseApi.ts";

export const photoApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getPhoto: builder.mutation<void, void>({
            query: () => ({
                url: `faceswap`,
                method: "POST",
            }),
        }),
    })
})

export const {
    useGetPhotoMutation
} = photoApi