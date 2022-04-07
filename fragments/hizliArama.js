const { I } = inject();

module.exports = {

  fields : {
      hastaAramaAlani : "//input[@id=''edtPatientSearch]"
  },

  hastaArama : function()
  {
    I.switchTo('[src="../PatientAdmission/ObjectViewers/Patientadmission/patientadmissionviewer.html"]');
    I.waitForElement("//input[@id=''edtPatientSearch]");
    I.fillField(this.fields.hastaAramaAlani, I.generateTckimlikNo());
    console.log(I.generateTckimlikNo());
    I.pressKey('Enter');
    I.wait(1);
  }
}
