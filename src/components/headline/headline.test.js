import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr, checkProps } from './../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('Headline component', () => {
    
    describe('Check prop types', () =>{

        it('Should not throw a warning', () =>{
            const expecteedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false
                }]
            };
            const propsErr = checkProps(Headline, expecteedProps);
            expect(propsErr).toBeUndefined();
        })
    })
   
    describe('Have props', () => {
        let wrapper;
        beforeEach( () => {
            const props = {
                header: "Test Header",
                desc: " test Desc"
            }
            wrapper = setUp(props);
        });
       
        it('Should render without error', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })

        it('Should render h1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        })

        it('Should render desc', () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
        
    })

    describe('Have No props', () => {
        let wrapper;
        beforeEach( () => {
            wrapper = setUp();
        });
        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })
    })


})
