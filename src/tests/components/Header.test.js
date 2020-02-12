import React from 'react'
import{shallow}from'enzyme'
import{Header}from'../../components/Header'




test('render Header component',()=>{
    let wrapper=shallow(<Header startLogout={()=>{}}/>)
    expect(wrapper).toMatchSnapshot()
})

test('call Logout button',()=>{
    const startLogoutSpy=jest.fn()
    const wrapper=shallow(<Header startLogout={startLogoutSpy}/>)
    wrapper.find('button').simulate('click')
    expect(startLogoutSpy).toHaveBeenCalled()
})




// let renderer=new ReactShallowRenderer()
// renderer.render(<Header/>)
// console.log(renderer.getRenderOutput())
// expect(renderer).toMatchSnapshot()