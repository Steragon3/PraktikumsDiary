import React from 'react'
import { render, queryByText, cleanup, fireEvent, queryByPlaceholderText, queryByDisplayValue} from '@testing-library/react'
import ResizableTextarea from './textarea'

afterEach(cleanup)

describe('textarea', () =>{
    it('renders given text', () =>{
        const placeholder = 'Edit text!'
        const rows = 5
        const defaultValue = "This was my internship"
        const {container} = render(<ResizableTextarea rows={rows} defaultValue={defaultValue} placeholder={placeholder}></ResizableTextarea>)

        expect(queryByText(container, defaultValue)).toBeTruthy()
    })
    it('renders as textarea', () =>{
        const placeholder = 'Edit text!'
        const rows = 5
        const defaultValue = "This was my internship"
        const {container} = render(<ResizableTextarea rows={rows} defaultValue={defaultValue} placeholder={placeholder}></ResizableTextarea>)

        expect(container.querySelector('textarea')).toBeTruthy()
    })
    it('renders the placeholder correctly', () =>{
        const placeholder = 'Edit text!'
        const rows = 5
        const defaultValue = "This was my internship"
        const {container} = render(<ResizableTextarea rows={rows} defaultValue={defaultValue} placeholder={placeholder}></ResizableTextarea>)

        expect(queryByPlaceholderText(container, placeholder)).toBeTruthy()
    })
    it('displays the default value', () =>{
        const placeholder = 'Edit text!'
        const rows = 5
        const defaultValue = "This was my internship"
        const {container} = render(<ResizableTextarea rows={rows} defaultValue={defaultValue} placeholder={placeholder}></ResizableTextarea>)

        expect(queryByDisplayValue(container,defaultValue)).toBeTruthy()
    })
})



