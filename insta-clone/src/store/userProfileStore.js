import { create } from "zustand"

const useUserProfileStore = create((set) =>({
    userProfile:null,
    setUserProfile:(userProfile) => set({userProfile}),
    // this is used to update the number of profile posts on profile page
    addPost:(post) => set(state => ({
        userProfile:{...state.userProfile, posts:[post.id,...state.userProfile.posts]}
    }))
}));

export default useUserProfileStore