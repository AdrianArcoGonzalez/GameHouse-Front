import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import mockStore from "../../mocks/mockStore"
import Loading from "./Loading"

describe("Given a Loading component",()=>{
  describe("When it's invoked with isLoading on true",()=>{
    test("Then it should show and image of a loading spin",()=>{

      render(
      <Provider store={mockStore}>
      <Loading/></Provider>)
      const image = screen.getByRole("img")

      expect(image).toBeInTheDocument()
    })
  })
})
