import {fireEvent, render, screen} from "@testing-library/react"
import renderer from 'react-test-renderer'
import Greet from "./Greet"
import Grets from "./Grets"
import Counter from "./Counter"


describe("Counter", () => {
   
    test("increment counter", () => {
        render(<Counter />)
    
        const counter = screen.getByTestId("counter")
        const incrementBtn = screen.getByTestId("increment")
    
        fireEvent.click(incrementBtn)
    
        expect(counter).toHaveTextContent("3")
    })
    test("decrement counter", () => {
        render(<Counter />)
    
        const counter = screen.getByTestId("counter")
        const decrementBtn = screen.getByTestId("decrement")
    
        fireEvent.click(decrementBtn)
    
        expect(counter).toHaveTextContent("1")
    })

})
test('Greet renders correctly', () => {
    render(<Greet />)
   const eleId = screen.getByText(/Hello/i)
   expect(eleId).toBeInTheDocument()
})

it("greet check the name", () => {
    render(<Grets name = "john" />)
    const nameStore = screen.getByText("john")
    expect(nameStore).toBeInTheDocument()
})

describe("Counter SnapShot",() => {
    test ("should matches dom Snapshot", () => {
        const tree = renderer.create(<Counter />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})


