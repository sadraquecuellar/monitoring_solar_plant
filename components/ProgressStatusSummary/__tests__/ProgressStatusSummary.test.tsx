import React from 'react';
import { render } from '@testing-library/react-native';
import ProgressStatusSummary from '../index'

describe('ProgressStatusSummary', () => {
  test('the component rendered', ()=>{
    render(<ProgressStatusSummary percentageGenerated={90} />)
  })

  describe('percentageGenerated was passed',() =>{
    it('show the percentageGenerated', ()=>{
      const {getByTestId} = render(<ProgressStatusSummary percentageGenerated={90} />)
  
      const element = getByTestId('fillValueCircularProgress');
  
      expect(element).toBeTruthy();
    })
  })
})

