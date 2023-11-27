import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import React from 'react';

test('renders learn react link', () => {
  const onClick = jest.fn()
  render(<App  onClick={onClick}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  
  const testId = screen.getByTestId("hello")
  expect(testId).toBeInTheDocument()

  const btnEle = screen.getByText("click")
  fireEvent.click(btnEle)
  expect(onClick).toHaveBeenCalledTimes(1)
});

test("render call immediately",() =>{
  const effectEb = jest.fn()
  function UseEffectExample(){
    React.useEffect(effectEb)
    return null;
  }
  render (<UseEffectExample />)
  expect(effectEb).toHaveBeenCalledTimes(1)
})

test('gives committed result', () => {
  const {result} = renderHook(() => {
    const [state, setState] = React.useState(1)

    React.useEffect(() => {
      setState(2)
    }, [])

    return [state, setState]
  })

  expect(result.current).toEqual([2, expect.any(Function)])
})