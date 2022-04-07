// in this file you can append custom step methods to 'I' object

const generateTCKN = require('tcidgen');

module.exports = function() {

    let parameters = require('./Parameters/hastane1.json');

  return actor({
    fields :
    {
         kullaniciAdi : '//input[@id="LoginForm_username"]',
         sifre : '//input[@id="LoginForm_password"]'
    },  
    buttons :
    {
        girisYapBtn : 'button.ant-btn.ant-btn-teal.ant-btn-block'
    },

    getEnvironmetParameters : function(key)
    {

      return parameters[key];
    },

   login : function () 
   {
     this.amOnPage(this.getEnvironmetParameters('url'));
     this.waitForElement(this.fields.kullaniciAdi);
     this.waitForElement(this.fields.sifre);
     this.fillField(this.fields.kullaniciAdi, this.getEnvironmetParameters('kullaniciAdi'));
     this.fillField(this.fields.sifre, this.getEnvironmetParameters('sifre'));
     this.waitForElement(this.buttons.girisYapBtn )
     this.click(this.buttons.girisYapBtn);
   },

   generateTCKimlikNo : function()
   {
       const generateTCKN = require('tcidgen');
       const tckn = generateTCKN();
       return tckn;
   }

  });
}
