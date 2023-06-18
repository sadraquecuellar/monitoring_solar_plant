import React from 'react';
import { render } from '@testing-library/react-native';
import BoxDetails from '../index'

describe('BoxDetails', () => {
  test('the component rendered', ()=>{
    render(<BoxDetails up={false} value='72' unity='kWm' description='Energia gerada'   />)
  })
  describe('the props (value, unity, description) was passed',()=>{
    it('show the value', ()=>{
      const {getByText} = render(<BoxDetails up={false} value='72' unity='kWm' description='Energia gerada'   />)
      
      const element = getByText('72');
  
      expect(element).toBeTruthy();
    })
    it('show the unity', ()=>{
      const {getByText} = render(<BoxDetails up={false} value='72' unity='kWm' description='Energia gerada'   />)
      
      const element = getByText('kWm');
  
      expect(element).toBeTruthy();
    })
    it('show the description', ()=>{
      const {getByText} = render(<BoxDetails up={false} value='72' unity='kWm' description='Energia gerada'   />)
      
      const element = getByText('Energia gerada');
  
      expect(element).toBeTruthy();
    })
  })
})

