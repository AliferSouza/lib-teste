import useGetModules from "./useGetModules.js"
import Router from "./Router.js"

export default async function useNavigate(props) {
  const Pages = await useGetModules("../../../pages/index.js")
  history.pushState(null, null, props)
  Router(Pages)
}
