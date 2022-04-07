const kayıtKabul = require("../pages/kayıtKabul");

Feature('hastaKabul');

Before((I)=>
{
   I.login();
})

Scenario('Hasta Kabul Senaryosu', async ( I,  girisPagePage,  kayitKabulPage => {
  
     await girisPagePage.mesakKutusuKapatma();
     girisPagePage.kayıtKabulEkranıAc();
     kayitKabulPage.hastaAra();
     kayitKabulPage.hastaKayit();
     kayitKabulPage.hastaKabul();
     kayitKabulPage.hastaKaydetme();

     


     //Kayıt Kontrol

     I.waitForElement(kayitKabulPage.fields.kabulKontrolAlani);
     I.seeElement(kayitKabulPage.fields.kabulKontrolAlani);






   




});
