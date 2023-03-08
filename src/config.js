/*  
    This file contains a list of configurable parameters
*/

const companyTitle = "T E S T"
const companySubtitle = "C O M P A N I E S"

const skinToneList = [    { label: 'White', value: 'white' },    { label: 'Asian', value: 'asian' },    { label: 'African American', value: 'african-american' },    { label: 'American Indian or Alaska Native', value: 'native-american' },    { label: 'Native Hawaiian or Other Pacific Islander', value: 'pacific-islander' },  ]
const skinType = ['White', 'Asian', 'African American', 'American Indian OR Alaska Native', 'Native Hawaiian OR Other Pacific Islander']


const diseases = [
  { name: "Pakrinson", defaultChecked: false },
  { name: "Eczema", defaultChecked: true },
  { name: "Vitiligo", defaultChecked: true },
  { name: "Lichen", defaultChecked: true },
  { name: "Psoriasis", defaultChecked: true },
  { name: "Acne", defaultChecked: true },
]

export {
    companySubtitle,
    companyTitle,
    skinToneList,
    skinType,
    diseases
}