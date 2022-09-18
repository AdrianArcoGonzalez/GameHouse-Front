import { useAppSelector } from "../../store/hooks"
import LoadingStyled from "./LoadingStyled"

const Loading =():JSX.Element=>{
  const {isLoading} = useAppSelector((state)=>state.ui)

  return  (<LoadingStyled>
    {isLoading && <img src="/images/loading.gif" alt="Loading Gif" className="loading-animation" width={250} height={175}/>}
  </LoadingStyled>)
    
}


export default Loading
