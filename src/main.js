import {Router, useSearch, useGetModules} from "./lib/index.js"
import pages from "./pages/index.js"




if(pages.admin){
    Router(pages.admin)
}

if(pages.public){
    console.log(pages.public)
    Router(pages.public)

}














