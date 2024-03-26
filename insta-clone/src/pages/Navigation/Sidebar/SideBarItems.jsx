import CreatePost from "./CreatePost"
import Home from "./Home"
import Notifications from "./Notifications"
import ProfileLink from "./ProfileLink"
import Search from "./Search"

const SideBarItems = () => {
  return (
    <>
      <Home />
      <Notifications />
      <Search />
      <CreatePost />
      <ProfileLink />
    </>
  )
}

export default SideBarItems