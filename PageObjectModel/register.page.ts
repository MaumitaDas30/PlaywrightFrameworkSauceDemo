import {Locator, Page, expect} from '@playwright/test'

class Register {

page : Page
txtName : Locator
txtLastName : Locator
txtEmail : Locator
RBtnMale : Locator
RBtnFemale : Locator
RBtnOthers : Locator
txtMobileNo : Locator
CalnDOB : Locator
DDyear : Locator
DDmonth : Locator
date : Locator

DDSubjects : Locator
CBoxSports : Locator
CBoxReading : Locator
CBoxMusic : Locator
UBTnChooseFile : Locator
txtAddress : Locator
DDstate : Locator
DDcity : Locator
BtnSubmit : Locator


constructor(page: Page) {
    this.page = page
    this.txtName = page.getByPlaceholder("First Name", {exact:true})
    this.txtLastName = page.getByPlaceholder("Last Name", {exact:true})
    this.txtEmail = page.getByPlaceholder("name@example.com", {exact:true})
    //Gender
    this.RBtnMale = page.getByLabel("Male", {exact:true})
    this.RBtnFemale = page.getByLabel("Female", {exact:true})
    this.RBtnOthers = page.getByLabel("Other", {exact:true})

    this.txtMobileNo = page.getByPlaceholder("Mobile Number", {exact:true})
    
    //Date of birth
    this.CalnDOB = page.locator("#dateOfBirthInput")
    this.DDyear =page.locator(".react-datepicker__year-select")
    this.DDmonth = page.locator(".react-datepicker__month-select")
    this.date = page.getByText("5",{exact:true})

    this.DDSubjects = page.locator("#subjectsInput")
    
    //Hobbies
    this.CBoxSports = page.getByLabel("Sports", {exact:true})
    this.CBoxReading = page.getByLabel("Reading", {exact:true})
    this.CBoxMusic = page.getByLabel("Music", {exact:true})
    
    //upload picture
    this.UBTnChooseFile = page.locator("#uploadPicture")
    this.txtAddress = page.getByPlaceholder("Current Address", {exact:true})
    
    //State selection 
    this.DDstate = page.locator('#react-select-3-input')
    //City selection
    this.DDcity = page.locator("#city")
    //this.cityPanipat = page.getByText('Panipat', {exact: true})

    this.BtnSubmit = page.getByRole("button", {name:'Submit', exact:true})
}
   async launchURL(url:any){
    await this.page.goto(url)
   }

    async entername(name:any,lastName:any, email){
    await this.txtName.fill(name)
    await this.txtLastName.fill(lastName)
    await this.txtEmail.fill(email)
    }

    async selectgender(gender:string){
      if(gender === "Male"){
        await this.RBtnMale.check()
      }
      else if(gender === "Female"){
        await this.RBtnFemale.check()
      }
      else if(gender === "Others"){
        await this.RBtnOthers.check()
      }
    }
    async enterMobileNo(mob:string){
       await this.txtMobileNo.fill(mob)
    }
    async selectdate(year:string, month:string){
        await this.CalnDOB.click()
        await this.DDyear.selectOption({label:year})
        await this.DDmonth.selectOption({value:month})
        await this.date.first().click()
        await this.page.keyboard.press("Tab")
    }
    async selectSubject(subject:string){
        await this.DDSubjects.fill(subject)
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("Enter")
    }
    async selectHobbies(hobbies:any) {
      for (const hobby of hobbies)
      {
        if(hobby == "Sports")
        {
          await this.CBoxSports.click()
        }
        else if(hobby == "Music")
        {
          await this.CBoxMusic.click()
        }
        if(hobby == "Reading")
        {
          await this.CBoxReading.click()
        }
      }
    }
    async uploadPicture(picturepath){
      if(picturepath){
        await this.UBTnChooseFile.setInputFiles(picturepath)
      }
    }

    async enterAddress (address){
      await this.txtAddress.fill(address)
    }

    async selectStateAndCity(state, city){
      await this.DDstate.click()
      await this.page.getByText(state, {exact:true}).last().click()

      await this.DDcity.click()
      await this.page.getByText(city, {exact:true}).first().click()
    }
    async submitform(){
      await this.BtnSubmit.click()
    }
}

export default Register

