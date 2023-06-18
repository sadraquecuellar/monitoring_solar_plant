import React from 'react';
import { render } from '@testing-library/react-native';
import CardDetails from '../index'

describe('CardDetails', () => {
  test('the component rendered', ()=>{
    render(<CardDetails direction="left" value="30" type="energy-generated" title="Energia gerada" unity="kWh" />)
  })
  describe('the props (type, title, value, unity) was passed',()=>{
    it('show the type', ()=>{
      const {getByTestId} = render(<CardDetails direction="left" value="30" type="energy-generated" title="Energia gerada" unity="kWh" />)
      
      const element = getByTestId("iconCardDetails");
  
      expect(element).toBeTruthy();
    })
    it('show the title', ()=>{
      const {getByText} = render(<CardDetails direction='left' value="30" type="energy-generated" title="Energia gerada" unity="kWh" />)
      
      const element = getByText("Energia gerada");
  
      expect(element).toBeTruthy();
    })
    it('show the value', ()=>{
      const {getByText} = render(<CardDetails direction='left' value="30" type="energy-generated" title="Energia gerada" unity="kWh" />)
      
      const element = getByText('30');
  
      expect(element).toBeTruthy();
    })
    it('show the unity', ()=>{
      const {getByText} = render(<CardDetails direction='left' value="30" type="energy-generated" title="Energia gerada" unity="kWh" />)
      
      const element = getByText('kWh');
  
      expect(element).toBeTruthy();
    })
  })
})

