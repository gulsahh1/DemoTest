const { I } = inject();

module.exports = {

 fields : {},
 selects : {},
 buttons :
  {
     mesajKutusuKapatmaBtn : "//div[@class= 'x-tool x-tool-close']" ,
     kayitKabulBtn : "//table[@id='patientAdmissionMainBTN']"
  },

  mesajKutusuKapatma : async function ()
  {
    I.wait(4);
    I,switchTo("//iframe[@id='bafExplorer']"); // iframe e switchTo ile ulaşıyoruz.
    let mesajKutusu = await I.grabNumberOfVisibleElements(this.buttons.mesajKutusuKapatmaBtn);

    if(mesajKutusu !==0)
    {
       I.click(this.buttons.mesajKutusuKapatmaBtn)
    }
  },

  kayıtKabulEkranıAc : function()
  {
    I.waitForElement(this.buttons.kayitKabulBtn);
    I.click(this.buttons.kayitKabulBtn)
  }


}
