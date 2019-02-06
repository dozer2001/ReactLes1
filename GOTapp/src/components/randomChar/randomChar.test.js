import React from 'react';
import renderer from 'react-test-renderer';
import RandomChar from './randomChar';


describe('Testing <RandomChar/>', () => {
    it('randomChar have rendered correctly', () => {
        const char = renderer.create(<RandomChar/>).toJSON();
        expect(char).toMatchSnapshot();

    })
});