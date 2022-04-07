const { selects } = require("./girisPage");

const { I, hizliAramaFragment, kayitKabulFragment,solPanelFragment } = inject();

module.exports = {
   
  fields : {
    kabulKontrolAlani: '.x-grid3-row.x-grid3-row-collapsed.x-grid3-row-first.x-grid3-row-last.x-grid3-row'
  },
  selects : {},
  buttons : {} ,

  hastaAra : function()
  {
    hizliAramaFragment.hastaArama();
  
  },

  hastaKayit : function() 
  {
     kayitKabulFragment.kayitOlustur();
  },

  hastaKabul : function() 
  {
      kayitKabulFragment.kabulOlustur
  },

  hastaKaydetme : function()
  {
    
      solPanelFragment.kaydetmeIslemi();
  }

}
