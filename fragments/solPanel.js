const { I } = inject();

module.exports = {
 
  fields : {},
  selects : {},
  buttons : {
    kaydetmeBtn : '#smallSaveButton'
  } ,

  kaydetmeIslemi : function()
  {
    I.waitForElement(this.buttons.kaydetmeBtn);
    I.waitForEnabled(this.buttons.kaydetmeBtn)
    I.click(this.buttons.kaydetmeBtn);
    I.wait(2);
  }

}


