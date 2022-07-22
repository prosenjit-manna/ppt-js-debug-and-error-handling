/// <reference types="cypress" />

import Button from "../../lib/components/button"

describe('Forget Password test', () => {
  const button = new Button();
  
  it('Click on login button', () => {
    button.selector.button().click();
  })

})
