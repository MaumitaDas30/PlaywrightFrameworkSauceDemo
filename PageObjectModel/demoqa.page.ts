import {Locator, Page, expect} from '@playwright/test'

class registration {

page : Page
txtFName : Locator
txtLName : Locator
txtEmail : Locator
btnMale : Locator
btnFemale : Locator
btnOther : Locator
txtMobile : Locator
locDateofBirth : Locator
selectDateofBirth : Locator
selectYear : Locator
selectMonth : Locator

txtSubjectInput : Locator
chkSports : Locator
chkReading : Locator
chkMusic : Locator
filePicture : Locator
txtAddress : Locator
drpState : Locator
//stateHaryana : Locator

drpCity : Locator
cityPanipat: Locator
//cityKarnal: Locator

btnSubmit : Locator

constructor(page: Page) {
    this.page = page
    this.txtFName = page.getByPlaceholder("First Name", {exact:true})
    this.txtLName = page.getByPlaceholder("Last Name", {exact:true})
    this.txtEmail = page.getByPlaceholder("name@example.com", {exact:true})
    //Gender
    this.btnMale = page.getByLabel("Male", {exact:true})
    this.btnFemale = page.getByLabel("Female", {exact:true})
    this.btnOther = page.getByLabel("Other", {exact:true})

    this.txtMobile = page.getByPlaceholder("Mobile Number", {exact:true})
    
    //select date of birth
    this.locDateofBirth = page.locator("#dateOfBirthInput")

    this.selectYear= page.locator('.react-datepicker__year-select')

    this.selectMonth= page.locator('.react-datepicker__month-select')

    this.selectDateofBirth =  page.locator('//div[@class="react-datepicker__day react-datepicker__day--015"]')

    //select subjects
 
    this.txtSubjectInput = page.locator("#subjectsInput")
    


    //Hobbies
    this.chkSports = page.getByLabel("Sports", {exact:true})
    this.chkReading = page.getByLabel("Reading", {exact:true})
    this.chkMusic = page.getByLabel("Music", {exact:true})
    
    //upload picture
    this.filePicture = page.getByRole('button', {name: "Choose File", exact:true})

    this.txtAddress = page.getByPlaceholder("Current Address", {exact:true})
    
    //State selection 
    this.drpState = page.locator('#react-select-3-input')

   // this.stateHaryana = this.drpState.getByText('Haryana', {exact:true})
   // this.stateUttarPradesh = this.drpState.getByText('Uttar Pradesh', {exact:true}) 
    

    //City selection
    this.drpCity = page.locator("#react-select-4-input")
    this.cityPanipat = page.getByText('Panipat', {exact: true})

    this.btnSubmit = page.getByRole("button", {name:'Submit', exact:true})
   
    
}


 
}
export default registration